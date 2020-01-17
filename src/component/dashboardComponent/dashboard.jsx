import React,{Component} from 'react';
import './dashboard.css';
import { withRouter } from 'react-router-dom';
import bookImg from '../dashboardComponent/content.jpeg'
import { Link } from '@material-ui/core';
class Dashboard extends Component {
onSubmit=()=>{
   this.props.history.push('/customer')
}
 
    render() {
       return (
          <div className='main'>
             <div className='upper'>
          <div className='dashboard'>
             <div className='logo'>
             <img src="https://img.icons8.com/ios/64/000000/open-book.png"></img>
             </div>
             <div className='title'>Bookstore</div>
             <div className='search'>Search</div>
          </div>
          </div>
          <div className='subMain'>
             <div className='lower'>
             <h3>Books</h3>
             <div>
                <div className='card' >
                   {/* <div className='imageSpace' style={{height:'20vh'}}>
                   <img className='bookImg' src={bookImg} alt={"bookImg"} ></img>
                   </div>
                   <div className='bookName' style={{height:'2vh'}}>Don't Make Me Think!!</div>
                   <div className='authorName'style={{height:'1vh'}}>by Steve Krug</div>
                   <div className='bookName'style={{height:'2vh'}} >Rs.1500</div>
                   <div className='buttonBuyNow' onClick={this.onSubmit} style={{height:'5vh'}} >BUY NOW</div> */}
                </div>
             </div>
             </div>
          </div>
          </div>
       );
    }
 }
 export default withRouter(Dashboard);