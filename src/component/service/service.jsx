import Axios from "axios"


export default class  Service {
customerDetails(){
    return Axios({
        method: 'POST',
        url:'http://192.168.0.117/customerDetails'
    })
    .then(result => {
    return result;
    });
}
 }