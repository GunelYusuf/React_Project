import React from "react";
import ReactDom from "react-dom";

import "./index.css";
const books=[{
  id:1,
  img:"https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg",
  title: "American Marxism",
  author:"Mark R. Levin"
},{
  id:2,
  img:"https://images-na.ssl-images-amazon.com/images/I/91%2BCnxqOEQS._AC_UL200_SR200,200_.jpg",
  title: "The Four Winds: A Novel",
  author:"Kristin Hannah"
},
{ id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author:"Amelia Hepworth"
},
{ id:4,
  img:"https://images-na.ssl-images-amazon.com/images/I/716Tlym5yRL._AC_UL200_SR200,200_.jpg",
  title: "The Seven Husbands of Evelyn Hugo: A Novel",
  author:"Taylor Jenkins Reid"
}
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book)=>{
        return(
        <Book key={book.id} {...book}></Book>
        )
      })}
   </section>
  );
}

const Book = ({img,title,author}) => {
  // const{img,title,author}=props.book;
  const clickHandler= (e) => {
    alert("hi Developers");
    console.log(e);
    console.log(e.target);
  };
  const complexExample=(author) =>{
     console.log(author);
  };

  return (
   <article className="book" onMouseOver={()=>console.log(title)}>
      <img src={img} alt="" />
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference Example</button>
      <button type="button" onClick={()=>complexExample(author)}>More Complex Example</button>
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
