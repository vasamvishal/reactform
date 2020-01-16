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
                <div className='card'>
                   <div className='imageSpace'>
                   <img className='bookImg' src={bookImg} alt={"bookImg"} ></img>
                   </div>
                   <div className='bookName'>Don't Make Me Think</div>
                   <div className='authorName'>by Steve Krug</div>
                   <div className='bookName'>Rs.1500</div>
                   <div className='buttonBuyNow' onClick={this.onSubmit}>BUY NOW</div>
                </div>
             </div>
             </div>
          </div>
          </div>
       );
    }
 }
 export default withRouter(Dashboard);