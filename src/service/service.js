import Axios from "axios"

// import  {postAxios,getAxios} from ''
export default class  Service {
getAllBooks(){
    return Axios({
        method: 'GET',
        url:'http://192.168.0.119:3000/getBookDetails'
    })
    .then(result => {
    return result;
    });
}
 }
