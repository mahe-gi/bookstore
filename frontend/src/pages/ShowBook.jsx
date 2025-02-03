import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
function ShowBooks() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/api/books/${id}`).then((res) => {
      setBook(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="p-4">
      <div className=" flex items-center justify-between">
        <BackButton />
        <h1 className=" text-3xl my-4 text-gray-500">ShowBook</h1>
        <h1 className=" text-3xl my-4 text-gray-500"> </h1>
      </div>
      <div className=" flex items-center justify-center mt-10">
        {loading ? (
          <Spinner />
        ) : (
          <div className=" flex flex-col items-start border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500 ">Id</span>
              <span>{book._id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500 ">Title</span>
              <span>{book.title}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500 ">Author</span>
              <span>{book.author}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500 ">Publish Year</span>
              <span>{book.publishedYear}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500 ">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500 ">
                Last Update Time
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowBooks;
