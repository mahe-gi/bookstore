import React from "react";
import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/api/books", data)
      .then((res) => {
        setLoading(false);
        navigate(`/`);
      })
      .catch((err) => {
        setLoading(false);
        alert("Error in saving book please check console");
        console.log(err);
      });
  };
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className=" text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : " "}
      <div className="max-w-sm mx-auto">
        <div className=" my-4">
          <div>
            <label className=" text-md font-medium flex items-start text-gray-600 pl-2">
              Title{" "}
            </label>
            <input
              type="text"
              placeholder="Enter book title here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg"
            />
          </div>
          <label className=" text-md font-medium flex items-start text-gray-600 pl-2">
            Author{" "}
          </label>
          <input
            type="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg"
          />
          <label className="text-md font-medium flex items-start text-gray-600 pl-2">
            Published Year{" "}
          </label>
          <input
            type="publishedYear"
            value={publishedYear}
            onChange={(e) => {
              setPublishedYear(e.target.value);
            }}
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          className=" text-white bg-[#1da1f2] cursor-pointer hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          onClick={handleSaveBook}
        >
          Save Book
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
