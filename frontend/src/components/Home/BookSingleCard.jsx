import { Link } from "react-router";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { useState } from "react";
import BookModel from "./BookModel";

function BookSingleCard({ book }) {
  const [showModel, setShowModel] = useState(false);
  return (
    <div
      key={book._id}
      className=" border border-gray-300 rounded-lg px-4 py-2  m-4 hover:shadow-xl relative overflow-x-auto"
    >
      <div className=" flex items-center justify-between px-1">
        <h4 className=" my-2 textgray-500">{book._id}</h4>
        <h2 className="">{book.publishedYear}</h2>
      </div>
      <div className=" flex justify-start items-center  gap-x-2 ">
        <PiBookOpenTextLight className=" text-red-200 text-2xl " />
        <h2 className=" my-2">{book.title}</h2>
      </div>
      <div className=" flex justify-start items-center  gap-x-2 ">
        <BiInfoCircle className=" text-red-200 text-2xl " />
        <h2 className=" my-2">{book.author}</h2>
      </div>
      <div className=" flex justify-between items-center gap-x-2 mt-4  p-4">
        <BiShow
          className=" text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className=" text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className=" text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className=" text-2xl text-red-800  hover:text-black" />
        </Link>
      </div>
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
}

export default BookSingleCard;
