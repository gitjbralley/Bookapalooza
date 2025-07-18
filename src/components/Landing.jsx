import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
       <section id="Landing">
        <header>
        <div className="header__container">
            <div className="header__description">
                <h1>America's most awarded onlne Library platform</h1>
                <h2>Friend your dream book with <span className="purple">Library</span></h2>
                <Link to="#features">
                    <button className="btn">Browse Books</button>
                </Link>
            </div>
            <figure className="header__img--wrapper">
                <img src={UndrawBooks} alt="" />
            </figure>
        </div>
        </header>

       </section> 
    )
}

export default Landing