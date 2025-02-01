import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiInfoCircle } from "react-icons/bi";

function BookModel({ book, onClose }) {
    return (
        <div
            className="fixed bg-black bg-opacity-10 top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative shadow-lg"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />
                <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg">
                    {book.publishedYear}
                </h2>
                <h4 className="my-2 text-gray-500">{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2 mb-2">
                    <PiBookOpenTextLight className="text-red-200 text-2xl" />
                    <h2 className="text-xl font-semibold">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2 mb-4">
                    <BiInfoCircle className="text-red-300 text-2xl" />
                    <h2 className="text-lg">{book.author}</h2>
                </div>
                <p className="mt-4 text-gray-700">Anything you want to show</p>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                    perspiciatis, molestiae atque exercitationem quam unde ab dolorem
                    voluptatibus tempora voluptates. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Perspiciatis, quasi fugiat. Enim vel
                    suscipit obcaecati illo expedita illum et eveniet.
                </p>
            </div>
        </div>
    );
}

export default BookModel;
