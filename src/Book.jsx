
import React from 'react'

import { bookList } from "./bookList";

function Greeting() {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          {bookList.map((book, index) => {
            return (
              <Book key={book.id} {...book}>
                <h4>This is the tag child</h4>
              </Book>
            );
          })}
        </div>
      </div>
    </>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <div className="col" style={{ background: props.color }}>
      <article>
        <h4>{props.title}</h4>
        <img src={props.img} />
        <h5>{props.author}</h5>
        {props.children}
      </article>
    </div>
  );
};



export default Greeting


