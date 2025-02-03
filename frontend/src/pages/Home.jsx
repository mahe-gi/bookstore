import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router";
import { IoCreateOutline } from "react-icons/io5";

import BooksCard from "../components/Home/BooksCard";
import BooksTable from "../components/Home/BooksTable";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className=" flex items-center justify-center gap-x-[10px]">
        <div>
          <button
            className=" cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              setShowType("table");
            }}
          >
            Table View
          </button>
        </div>
        <div>
          <button
            className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              setShowType("card");
            }}
          >
            Card View
          </button>
        </div>
      </div>
      <div className="flex  justify-between items-center">
        <h1 className=" text-3xl my-8"> Book List </h1>
        <Link
          to="/books/create"
          className="bg-green-500 text-white px-3 py-2 rounded-md flex items-center"
        >
          <IoCreateOutline className="text-sky-100 text-2xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}

export default Home;
