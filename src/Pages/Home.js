import React, { useContext } from 'react'
import {BlogContext} from '../Context/BlogContext'
import Cards from '../Components/Cards'


import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Home() {

  const {posts} =  useContext(BlogContext);

 
    return (
      <Container className="pt-4">
      <Row>
     

        {
          posts && posts.map((post ,index)=> {
            
            return <Cards  id={post.id} key ={index} post={post} />
             
    
         
            
          })
        }
        
     

    </Row>
    </Container>
        
    )
}
