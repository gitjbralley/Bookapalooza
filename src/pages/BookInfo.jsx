import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";


const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find(book => book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__seleected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h3 className="book__selected--title">
                  Crack the coding interview
                </h3>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <div className="book__summary--para">
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officia ipsam culpa, minus dolor atque voluptate
                      explicabo. Tempore cum ad quo accusamus alias molestias
                      minima voluptate, eius at praesentium quisquam iusto!
                    </p>
                  </div>
                  <div className="book__summary--para">
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officia ipsam culpa, minus dolor atque voluptate
                      explicabo. Tempore cum ad quo accusamus alias molestias
                      minima voluptate, eius at praesentium quisquam iusto!
                    </p>
                  </div>
                  {bookExistsOnCart() ? (
                    <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                  ) : (
                    <button className="btn" onClick={() => addBookToCart(book)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
