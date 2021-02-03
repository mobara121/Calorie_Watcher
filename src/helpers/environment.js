let APIURL = '';

// eslint-disable-next-line default-case
switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1': 
        APIURL = 'http://localhost:3000';
        break;
    case 'caloriewatcher.herokuapp.com':
        APIURL = ' https://caloriewatcher.herokuapp.com'
}


export default APIURL;