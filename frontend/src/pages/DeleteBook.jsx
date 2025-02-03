import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

function DeleteBooks() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/api/books/${id}`)
      .then(() => {
        setLoading(false);
        alert("Book deleted successfully");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occured  please check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className=" text-2xl text-gray-500">Delete book </h1>
      {loading ? <Spinner /> : " "}
      <div className=" flex flex-col gap-5 items-center rounded-xl w-[600px] p-8 mx-auto">
        <h3 className=" px-2"> Are you sure You want to delete this book ? </h3>
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleDeleteBook}
        >
          Yes ,Delete it !
        </button>
      </div>
    </div>
  );
}

export default DeleteBooks;
