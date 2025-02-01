import React ,{useState}from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router';

function DeleteBooks() {
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = ()=>{
    setLoading(true);
    axios.delete(`http://localhost:5000/api/books/${id}`).then(()=>{
      setLoading(false);
      navigate('/');
    }).catch((err)=>{
      setLoading(false);
      alert('An error occured  please check console');
      console.log(err);
    })
     
  }

  return (
    <div className='p-4 '>
      <BackButton/>
      <h1 className=' text-3xl'>Delete book</h1>
      {loading ? <Spinner/>:" "}
      <div className=' flex flex-col items-center border-2 border-sky-200 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className=' text-2xl'> Are you sure  You want to delete  this book ? </h3>
        <button className=' p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook} >
          Yes ,Delete it

        </button>

      </div>
    </div>
  )
}

export default DeleteBooks