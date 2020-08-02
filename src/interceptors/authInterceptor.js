import axios from 'axios'

function setAuthInterceptors() {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log('config REQ', config)
        const token = localStorage.getItem('token')
        config.headers.authorization = token;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
/*
    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log('response', response)
        return response;
    }, function (error) {

        if (error.config && error.response && error.response.status === 401) {
            return getNewAccessToken().then((token) => {
                console.log('TTT: ', token)
                error.config.headers.authorization = token
                return axios(config);
            });
        }
        return Promise.reject(error);
    });*/
}

axios.interceptors.response.use(r => {
    console.log('config RES', r)
    return r
}, async error => {
    if (
        !localStorage.getItem('refreshToken') ||
        error.response.status !== 401 ||
        error.config.called
    ) {
        return Promise.reject(error)
    }

         return getNewAccessToken().then((token) => {
             error.config.headers.authorization = `Bearer ${token}`
             return axios({...error.config, called: true})
         });


})



async function getNewAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken')
    if(refreshToken) {
        return axios.post(process.env.REACT_APP_HOME_API + '/auth/token', {
            token: refreshToken
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('refreshToken', res.data.refreshToken)
            return res.data.token
        })
    } else {
        return Promise.reject('Refresh Token is empty');
    }
}

export default setAuthInterceptors
