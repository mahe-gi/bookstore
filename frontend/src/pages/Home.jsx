import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios' 
import Spinner from '../components/Spinner'
import { Link } from 'react-router'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete,MdOutlineAddBox} from 'react-icons/md'
function Home() {
    const [books,setBooks] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
setLoading(true);
axios.get('http://localhost:3000/api/books').then((res)=>{
    setBooks(res.data.data);
    setLoading(false);
}).catch((err)=>{
    console.log(err);
    setLoading(false);
})
    },[])

  return (
    <div className=' p-4 '>
        <div className='flex  justify-between items-center'>
            <h1 className=' text-3xl my-8'> Book List </h1>
            <Link to="/books/create " className='bg-green-500 text-white px-4 py-2 rounded-md flex items-center'>
            <MdOutlineAddBox className='text-sky-800 text-4xl '/> 
            </Link >
        </div>
        {
            loading?(<Spinner/>):(<table className='w-full border-separate spacing-2'>
            <thead>
                <tr>
                    <th className='border p-2'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>publishYear</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Opearations</th>
                </tr>
            </thead> 
            <tbody>
                {
                    books.map((book,index)=>{
                        return (
                        <tr key={book._id} className=' h-8'>
                            <td className=' border border-slate-700 rounded-md text-center '>{index+1}</td>
                            <td className=' border border-slate-700 rounded-md text-center '>{book.title}</td>
                            <td className=' border border-slate-700 rounded-md text-center max-md:hidden '>{book.author}</td>
                            <td className=' border border-slate-700 rounded-md text-center max-md:hidden '>{book.publishedYear}</td>
                            <td className=' border border-slate-700 rounded-md text-center max-md:hidden '>
                                <div className=' flex justify-center gap-x-4'>
                                    <Link to={`/books/details/${book._id}`} >
                                    <BsInfoCircle className=' text-2xl text-green-800 '/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`} >
                                    <AiOutlineEdit className=' text-2xl bg-yellow-600 '/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`} >
                                    <MdOutlineDelete className=' text-2xl bg-red-800 '/>
                                    </Link>
                                </div>
                            </td>

                        </tr>
                        )
                    })
                }
            </tbody>
            </table>)
        }
    </div>
  )
}

export default Home