import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
const Admin= () => {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState("")
  const [selectValue, setSelectValue] = useState("normal")
//-------GET------
  useEffect(() => {
    axios.get("http://localhost:8000/users")
      .then(res => setdata(res.data))
  }, [])
//--------DELETE--------
  const deleteData = function (id) {
    axios.delete(`http://localhost:8000/users/`+id)
      .then(res => console.log(res.data))
  }
//---------------SORT-----------
  const sortData = function () {
   if(selectValue=='a-z'){
    return data.toSorted((a,b)=>a.name.localeCompare(b.name))
   }
   else if(selectValue=='z-a'){
    return data.toSorted((a,b)=>b.name.localeCompare(a.name))
   }
   else{
    return[...data]
   }
  }
  let sortedData=sortData()

  //-----FILTER-----
  const filteredData =sortedData.filter(item => {
    return item.name.toLowerCase().startsWith(search.toLowerCase()
  )
  });
  return (
    <div>
         <Navbar/>

       <div className="admin-center">
      <div className="links">
      <select onChange={(e)=>setSelectValue(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
       <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder="Search" />
      <Link  to={'/add'} className='add'>ADD</Link>
      </div>

        <table>
          <thead>
          <tr>
              <th>ID</th>
              <th>FILE</th>
              <th>NAME</th>
              <th>COST</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
          {
              filteredData.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><img src={item.file} alt="" className='td-img' /></td>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td><button className='btn' onClick={() => deleteData(item.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default Admin 