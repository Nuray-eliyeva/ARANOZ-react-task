import React, { useEffect, useState } from 'react'
import{useParams} from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import Navbar from './Navbar';
function Edit() {
    const [info, setinf] = useState({})
    useEffect(() => {
     axios.get('http://localhost:8000/users'+id)
     .then(res=>setinf(res.data))
    }, [])
    
    const {id} = useParams()
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
 defaultValues:async()=>axios.get('http://localhost:8000/users'+id)
  })
  const onSubmit = (data) => {
    axios.patch("http://localhost:8000/users",data)
}
  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>EDIT</h2>
      <input defaultValue={info.name} {...register("name")} />
      {errors.name && <span>This field is required</span>}

      <input defaultValue={info.cost} {...register("cost", { required: true })} />
      {errors.cost && <span>This field is required</span>}
      <input  type="submit" className="btn1" value="submit" />
    </form>
    </>
  )
}

export default Edit
