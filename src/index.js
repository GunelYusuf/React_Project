import React from "react";
import ReactDom from "react-dom";

import "./index.css";
const FirstBook={
  img:"https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg",
  title: "American Marxism",
  author:"Mark R. Levin"
}
const SecondBook={
  img:"https://images-na.ssl-images-amazon.com/images/I/91%2BCnxqOEQS._AC_UL200_SR200,200_.jpg",
  title: "The Four Winds: A Novel",
  author:"Kristin Hannah"
}
function BookList() {
  return (
    <section className="booklist">
      <Book 
      img={FirstBook.img}
      title={FirstBook.title}
      author={FirstBook.author}
       ></Book>
       
      <Book 
      img={SecondBook.img}
      title={SecondBook.title} 
      author={SecondBook.author}
      />
      
    </section>
  );
}

const Book = (props) => {
  const{img,title,author}=props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
     
    </article>
  );
};

// const Greeting=() =>{
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'Hi Developer')
//     );
// };

ReactDom.render(<BookList />, document.getElementById("root"));
