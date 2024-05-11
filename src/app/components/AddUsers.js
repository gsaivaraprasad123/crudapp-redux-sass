"use client"

import { useState } from "react"
import variables from "../styles/variables.module.scss"
import { addUser } from "../redux/slice"
import { useDispatch } from "react-redux"
const AddUsers = () => {

    const [name,setName] = useState("");
    const dispatch = useDispatch();
    const userDispatch = ()=>{
        dispatch(addUser(name));
    }

  return (
    <div className={variables.adduser}>
        <h3>Add Users</h3>
        <input type="text" placeholder="Add New User" className={variables.adduserinput} onChange={(e)=>setName(e.target.value)}/>
        <button className={variables.adduserbtn} onClick={userDispatch} >Add User</button>
    </div>
  )
}

export default AddUsers