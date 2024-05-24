import axios from "axios"
import { useForm } from "react-hook-form"
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Navbar"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    axios.post("http://localhost:8000/users",data)
}

const convertTo=(file)=>{
let reader= new FileReader();
reader.readAsDataURL(file)
reader.onload=()=>{
  setImage(reader.result)
}
}
  return (
  <>
    <Navbar/>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>ADD</h2>
      <input type="file" onInput ={(e)=>convertTo(e.target.files[0])} className="file-inp"/>
      <input  {...register("name")} />
      {errors.cost && <span>This field is required</span>}
      <input {...register("cost", { required: true })} />
      {errors.cost && <span>This field is required</span>}
      <input type="submit" className="btn1" value="submit" />
    </form>
    </>
  )
}