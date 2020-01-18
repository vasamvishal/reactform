import React, { Component } from 'react';
import './dashboard.css';
import { withRouter } from 'react-router-dom';
import { Link } from '@material-ui/core';
import getAllBooksService from '../../service/service'
import AllBooks from '../allBooks/allBooks'
const axios = require('axios');

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         getBooks: []

      }
   }
   getAllBooksData = []
   // onSubmit = () => {
   // this.props.history.push('/customer')

   //  new getAllBooksService().getAllBooks().then(response=>{
   //     console.log("response friom get",response);

   //    console.log("Data14"+JSON.stringify(response.data.result));
   //    var allBooks=response.data.result;

   // for(var i=0;i<=allBooks.length;i++){
   // return(
   // <ul>
   //    <li>
   //       {i.author}
   //    </li>
   // </ul>
   // console.log("author",allBooks[i]);

   // )

   // }

   // allBooks.array.forEach(element => {
   //    this.getAllBooksData.push(element)

   // });
   //    this.setState({getBooks:allBooks})


   //  }).catch(err=>{
   //     console.error();

   //  })
   //  console.log();


   // }

   componentDidMount() {
      new getAllBooksService().getAllBooks().then(response => {
         // console.log("response friom get", response);
         var allBooks = response.data.result;
         console.log("allBooks",allBooks);
         this.setState({getBooks:allBooks})
      }

      )}
   


   render() {

         return(
         <div className = 'main' >
               <div className='upper'>
                  <div className='dashboard'>
                     <div className='logo'>
                        <img src="https://img.icons8.com/ios/64/000000/open-book.png"></img>
                     </div>
                     <div className='title'>Bookstore</div>
                     <div className='search'>Search</div>
                  </div>
               </div>
            {/* <div className='subMain'>
               <div className='lower'>
                  <h3>Books</h3>
                  <div>
                     <div>
                        {this.onSubmit()}
                     </div>
                      <div className='card' >
                        <div className='imageSpace' >
                           <img className='bookImg' src={bookImg} alt={"bookImg"} ></img>
                        </div>
                        <div className='bookName'>Don't Make Me Think!!</div>
                        <div className='authorName'>by Steve Krug</div>
                        <div className='bookName'>Rs.1500</div>
                        <div className='buttonBuyNow' onClick={this.onSubmit}  >BUY NOW</div>
                     </div> 
                  </div>
               </div>
            </div> */}
            <AllBooks  getAllBooksData = { this.state.getBooks } />
         </div>
      );
   }
}
export default withRouter(Dashboard);