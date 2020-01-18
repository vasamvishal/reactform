import axios from 'axios';

const header = {
    headers:{
        'Content-Type': 'application/json'
    }
}
url="http://192.168.0.110:3000/getBookDetails"

export function getAxios(url,callback) {
    console.log('header is ', baseurl.baseUrl + url);
    axios.get(baseurl.baseUrl + url, authRequired ? header:null)
    .then(function(data){
    return callback(null,data)
    })
    .catch(function(err){
    callback(err);
    })
    }