/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Booklist = ({ searchValue }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.books);
        });
    };

    fetchData();
  }, []);

  const getStoredRating = (bookId) => {
    const storedRating = localStorage.getItem(`${bookId}`);
    return storedRating || giveRandomRating(bookId);
  };

  const giveRandomRating = (bookId) => {
    const randomRating = (Math.random() * (5.0 - 3.0) + 3.0).toFixed(1);
    localStorage.setItem(`${bookId}`, randomRating);
    return randomRating;
  };

  const filterBooksBySearch = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="grid grid-cols-[repeat(4,1fr)] p-5">
      {filterBooksBySearch.map((data) => (
        <div
          key={data.id}
          className="flex flex-col justify-center items-center m-2.5 p-5 hover:h-[400px] hover:shadow-[-10px_-12px_24px_-22px_rgba(0,0,0,1)] hover:cursor-pointer hover:bg-[#8d99ae];
"
        >
          <img
            src={data.imageLinks.thumbnail}
            alt={data.title}
            className="h-[300px] w-9/12 mt-[50px] rounded-[15px]"
          />
          <h5 className="text-xl w-9/12 text-center m-2.5 p-0">{data.title}</h5>
          <div className="flex justify-evenly w-9/12 text-center cursor-pointer text-black text-xl mb-5">
            <p>{getStoredRating(data.id)}★</p>
            <p>FREE</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booklist;
