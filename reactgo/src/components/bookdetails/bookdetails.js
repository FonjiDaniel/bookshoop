import React from 'react';
import "./bookdetails.css";

export default function BookDetails(props){
    return(
        <div className='book-details'>
            <div className="book-info">
                <div className="book-image">
                    <img src={props.book.image} alt={props.book.title} />
                </div>
                <div className="book-description">
                    <h2>{props.book.title}</h2>
                    <p className="detail-info">Title: {props.book.title}</p>
                    <p className="detail-info">Author: {props.book.author}</p>
                    <p className="detail-info">Description: {props.book.description}</p>
                    <p className="detail-info">Price: {props.book.price}</p>
                    <p className="detail-info">Genre: {props.book.genre}</p>
                    <p className="detail-info">Synopsis: {props.book.synopsis}</p>
                </div>
            </div>
        </div>
    )
}
