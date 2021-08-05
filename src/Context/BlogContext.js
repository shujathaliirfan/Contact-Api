import React, { useState , createContext } from 'react'
import { v4 as uuidv4 } from "uuid";


export const BlogContext = createContext();




function BlogContextProvider (props) {

    let initialState = [
        {
            
         
            id:1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            
          
            id:2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          }
    ];

    const [posts, setPosts] = useState(initialState || [] );

   
 

    const deleteHandler = (id) => {
        const post  = posts.filter(p=> p.id !== id)
        setPosts(post);
    }

   const editHandler = ({id,title,body}) => {
       const findIndex = posts.findIndex(p => p.id === id);
     const singPost = { ...posts[findIndex]};


     singPost.id = id;
     singPost.title = title;    
     singPost.body = body;

     const updatedPosts = [...posts];
     updatedPosts[findIndex] = singPost;
     setPosts(updatedPosts)
     console.log(posts);
    
   }




    return (
        <BlogContext.Provider value={{ posts,setPosts ,deleteHandler,editHandler }}>
            {props.children}
        </BlogContext.Provider> 
    )
}


export default BlogContextProvider
