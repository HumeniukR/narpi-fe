# narpi-fe
Smart home front-end 
Here is the [back-end](https://github.com/HumeniukR/narpi-back) part of smart home.
### Instalation (vacuum-service)
Clone and install [back-end](https://github.com/HumeniukR/narpi-back) part
Clone the narpi-fe repo to your PC
Set your backend URI into env
```sh
REACT_APP_HOME_API=http://127.0.0.1:4000
```
```sh
$ cd narpi-fe
$ npm i
$ npm run start
```
### Schema
![alt text](https://github.com/HumeniukR/narpi-fe/blob/master/public/intro/Simplified_schema_narpi.jpg?raw=true)

### Interface
Desktop
![alt text](https://github.com/HumeniukR/narpi-fe/blob/master/public/intro/front-des.JPG?raw=true)
Mobile
![alt text](https://github.com/HumeniukR/narpi-fe/blob/master/public/intro/front-mob1.JPG?raw=true)
![alt text](https://github.com/HumeniukR/narpi-fe/blob/master/public/intro/front-mob2.JPG?raw=true)

### TODO
- add auth functionality (mostly done)
- fix lint warnings
- add WebSockets functionality for receiving actual data to avoid mismatch state on two devices
- rewrite app using hooks
- refactoring

