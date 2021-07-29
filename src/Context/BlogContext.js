import React, { useState , createContext } from 'react'
import { v4 as uuidv4 } from "uuid";


export const BlogContext = createContext();

function BlogContextProvider (props) {

    let initialState = [
        {
            
            "id":uuidv4(),
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            
            "id":uuidv4(),
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          }
    ]

    const [posts, setPosts] = useState(initialState || [] );

    const [edit, setEdit] = useState(false);
    // const [editToggle, setEditToggle] = useState(false)


    const deleteHandler = async(id ) => {
        const post  = await posts.filter(p=> p.id !== id)
        setPosts(post);
    }

    const editHandler = async(id ,post) => {
        const {title ,body} = post;
        const result  = await posts.filter(p=> p.id === id);

        
        setPosts([...posts,
            result[title] = title,
            result[body] = body


        ])
        
        
    }




    return (
        <BlogContext.Provider value={{posts ,setPosts,deleteHandler ,edit ,setEdit ,editHandler}}>
            {props.children}
        </BlogContext.Provider> 
    )
}

export default BlogContextProvider
