import { Link } from "react-router";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineAddBox } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

function BooksTable({ books }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="border p-2 rounded-md">No</th>
            <th className="border p-2 border-slate-600 rounded-md">Title</th>
            <th className="border p-2 border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border p-2 border-slate-600 rounded-md max-md:hidden">
              PublishYear
            </th>
            <th className="border p-2  border-slate-600 rounded-md max-md:hidden">
              Opearations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={book._id} className=" h-8">
                <td className=" border border-slate-700 rounded-md text-center ">
                  {index + 1}
                </td>
                <td className=" border border-slate-700 rounded-md text-center ">
                  {book.title}
                </td>
                <td className=" border border-slate-700 rounded-md text-center max-md:hidden ">
                  {book.author}
                </td>
                <td className=" border border-slate-700 rounded-md text-center max-md:hidden ">
                  {book.publishedYear}
                </td>
                <td className=" border border-slate-700 rounded-md text-center max-md:hidden ">
                  <div className=" flex justify-center gap-x-4 items-center">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className=" text-[20px] text-blue-400 " />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <BiEdit className=" text-2xl text-green-500 " />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className=" text-2xl text-red-700" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;
