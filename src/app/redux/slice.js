import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    users:[]
}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
                const data={
                    id:nanoid(),
                    name:action.payload
                }
                state.users.push(data);
        },
        removeUser:(state,action)=>{
            const data = state.users.filter((item)=>{
                return item.id!==action.payload
            })
            state.users=data
        },
        editUser: (state, action) => {
            const { id, name } = action.payload;
            const userIndex = state.users.findIndex((user) => user.id === id);
            if (userIndex !== -1) {
                state.users[userIndex].name = name;
            }
        }
    }
})

export const {addUser,removeUser,editUser} = Slice.actions;
export default Slice.reducer;