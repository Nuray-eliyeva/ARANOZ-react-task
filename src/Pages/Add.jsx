import axios from "axios"
import { useForm } from "react-hook-form"
import Navbar from "./Navbar"
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    axios.post("http://localhost:8000/users",data)
}
  return (
  <>
    <Navbar/>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>ADD</h2>
      <input  {...register("name")} />
      {errors.cost && <span>This field is required</span>}
      <input {...register("cost", { required: true })} />
      {errors.cost && <span>This field is required</span>}
      <input type="submit" className="btn1" value="submit" />
    </form>
    </>
  )
}