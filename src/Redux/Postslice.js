import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice ({
    name: "posts",
    initialState:{
        items:[]
    },
    reducers:{
       Addpost: function(state,action){
        state.items.push(action.payload);
        },
        // عملنا اكشن جديد مشان نمسح البوست
        deletPost: function(state,action){
            // عباره عن فلتر حطينا فيه لوجيك لو الرقم لا يساو واحد امسح عن طريق الفلتر
         state.items =  state.items.filter(item=>item.id !== action.payload.id)
        },
        updatePost: function (state,action){
            state.items.map(item=>{
                if(item.id === action.payload.id){
                    item.title = action.payload.title;
                    item.desc = action.payload.desc
                }
            })
        }

    }
})
export const {Addpost, deletPost, updatePost} = postSlice.actions

export default postSlice.reducer
