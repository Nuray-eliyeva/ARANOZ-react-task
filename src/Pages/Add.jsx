import axios from "axios"
import { useForm } from "react-hook-form"


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
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>ADD</h2>
      <input  {...register("name")} />
      {errors.cost && <span>This field is required</span>}
      <input {...register("cost", { required: true })} />
      {errors.cost && <span>This field is required</span>}
      <input type="submit" className="btn1" value="submit" />
    </form>
  )
}