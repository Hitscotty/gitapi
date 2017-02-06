# gitapi

You can get started using/helping with this plugin by:
 ``` bash    
git clone https://github.com/Hitscotty/gitapi.git && cd gitapi 
npm install 
 ```  
then creating a `config.js` file and use this configuration below filling in with your information

```js
var config = {
   github: {
     user: 'YOUR_GITHUB_USER_NAME',
     client_id: 'YOUR_CLIENT_ID',
     client_secret: 'YOUR_CLIENT_SECRET',
     access_token: 'YOUR_ACCESS_TOKEN',
   },
};

module.exports = config;
 ```  
 
and finally running a development server with:

```bash
npm start && nodemon
 ```
 
 if `npm start && nodemon` doesn't work you'll need to do these seperatly in different windows, I still haven't
 figured out how to chain those commands, but hey~ sometimes it works yolo.     
    

# Github Api

if you need to get a client_id and client_secret, you can get one [here](https://github.com/settings/developers) and then select `register new application` and create a new app to get your credentials.
