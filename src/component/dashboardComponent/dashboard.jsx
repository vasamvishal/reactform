import React,{Component} from 'react';
import './dashboard.css';
import bookImg from '../dashboardComponent/content.jpeg'
class Dashboard extends Component {
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
                   <div className='buttonBuyNow'>BUY NOW</div>
                </div>
             </div>
             </div>
          </div>
          </div>
       );
    }
 }
 export default Dashboard;