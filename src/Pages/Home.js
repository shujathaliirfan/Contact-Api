import React, { useContext } from 'react'
import {BlogContext} from '../Context/BlogContext'


import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Blogs from './Blogs'


export default function Home() {

  const {posts} =  useContext(BlogContext);

 
    return (
      <Container className="pt-4">
      <Row>
        
     

        {
        posts && posts.map((post ,index)=> {
            
            return <Blogs  key={post.id} post={post} />
             
    
         
            
          })
        }
        
     

    </Row>
    </Container>
        
    )
}
