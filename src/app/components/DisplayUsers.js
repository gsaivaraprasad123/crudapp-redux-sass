"use client"
import { useDispatch, useSelector } from "react-redux"
import variables from "../styles/variables.module.scss"
import { Edit, Trash2 } from "lucide-react"
import { removeUser,editUser } from "../redux/slice"

const DisplayUsers = () => {
    const userData = useSelector((data)=>data.users)
    const dispatch = useDispatch();

    const handleEditUser = (id, newName) => {
        dispatch(editUser({ id, name: newName }));
    };
    console.log(userData);
  return (
    <div className={variables.displayuser}>
        <h3>Users List</h3>
        {
            userData.map((item)=>(
                <div key={item.id} className={variables.useritem} >
                    <span>{item.name}</span>
                    <div>
                    <button onClick={()=>dispatch(removeUser(item.id))} ><Trash2 /></button>
                    <button onClick={() => handleEditUser(item.id, prompt("Enter new name:"))}><Edit /></button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayUsers