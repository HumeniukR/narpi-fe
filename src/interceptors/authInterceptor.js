import axios from 'axios'

function setAuthInterceptors() {
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        config.headers.authorization = token;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}

axios.interceptors.response.use(r => {
    return r
}, async error => {
    relogin(error.response.status)
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

function relogin(statusCode) {
    if(statusCode === 403 && window.location.pathname !== '/login') {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        window.location.pathname = '/login'
    }
}

export default setAuthInterceptors
