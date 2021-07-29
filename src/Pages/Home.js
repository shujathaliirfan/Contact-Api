import React, { useContext } from 'react'
import {BlogContext} from '../Context/BlogContext'
import Cards from '../Components/Cards'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Home() {

  const {posts ,setPosts ,deleteHandler} =  useContext(BlogContext);

 
    return (
      <Container className="pt-4">
      <Row>
     

        {
          posts && posts.map(post=> {
            
            return(
              <Col xs={6} md={4} key={post.id}>
              <Cards  post={post}  deleteHandler={deleteHandler}/>
              </Col>
            ) 
            
          })
        }
        
     

    </Row>
    </Container>
        
    )
}
