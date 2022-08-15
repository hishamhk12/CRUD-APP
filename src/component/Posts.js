import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addpost, deletPost,updatePost } from '../Redux/Postslice';

export default function Posts() {
  const [title,setTitle]= useState("");
  const [desc, setDesc]= useState("");
  const [updateTitle,setupdateTitle]= useState("");
  const [updateDesc, setupdateDesc]= useState("");
  const [isEdite,setIsEdite]= useState(false);
  const [id,setId] = useState(null);
  //مشان نقدر نمسك الستايت منعلم يوزسليكتور
  const posts = useSelector((state)=> state.posts.items)
  //جبنا الديس باتش
  const dispatch = useDispatch();

  return (
    <div className='form'>
        <input type="text" placeholder="Enter Post Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="Enter Post Desc"
      onChange={(e)=>setDesc(e.target.value)} value={desc}/>
        <button type="" 
        onClick={()=>{//بياخد الستايت القديمه وبيعملا ابديت
          dispatch(Addpost({id:posts.length + 1, title,desc}))
        setTitle("");
        setDesc("");
        }}
        >Add post</button>
        <div/>
        <div className='posts'> 
        <div className='post'>
          {posts.length> 0 ?  posts.map(post=> <div key={post.id}>
          {/*عملنا ماب على البوست وعرضناه */}
             <h2>{post.title}</h2>
          <p>{post.desc}</p>
          <button type="" onClick={()=>{
            setIsEdite(true)
            setId(post.id)
          }}
                 >Edite</button>
          <button type="" onClick={()=> dispatch(deletPost({id: post.id}))}>Delete </button>

          {isEdite && id === post.id && (
            <>
            <input type="text" placeholder='Update title'
            onChange={(e)=> setupdateTitle(e.target.value)}
            />
            <input type="text" placeholder='Update desc' onChange={(e)=> setupdateDesc(e.target.value)}/>
              <button type=""
              onClick={()=>dispatch(updatePost({id: post.id , title: updateTitle, desc: updateDesc}, setIsEdite(false)  ))}
              >Update</button>

          
          </>
          )}
          
         
          
          
           </div>): <h2> There is no post </h2>}
           
           
            
         

          
          
            
          </div>
        </div>

          
        
 
    </div>
  )
}
