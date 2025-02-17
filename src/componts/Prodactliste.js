import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';

function Prodactliste({Sershe}) {
    const [prodacts,setprodacts]=useState([]);
    const [loading,setloading]=useState(true);
    useEffect(async()=>{
        const res=await axios.get('https://dummyjson.com/products')
        .then(res=>{setprodacts(res.data.products)
            setloading(false)
        })
        .catch(err=>console.log(err))
        
    },[])
    console.log(prodacts)

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'20px'}} >
        {loading?<div class="loader">
    <span></span>
</div>:
        prodacts.filter(el => Sershe!=""?el.title.toLowerCase().includes(Sershe.toLowerCase()):el).map(el=>
  
                <Card style={{ width: '18rem' ,height:'700px' }}>
                  <Card.Img style={{height:'300px'}} variant="top" src={el.images[0]}  />
                  <Card.Body>
                    <Card.Title style={{fontSize:'1rem'}}>{el.title}</Card.Title>
                    <Card.Text >
                        {el.category}
                    </Card.Text>
                    <ReactStars
                        count={5}
                        value={el.rating.rate}
                        size={20}
                        color2={'#ffd700'} />
                    <Card.Text style={{fontSize:'20px'}}>
                        price: {el.price} $
                    </Card.Text>
                    <Card.Text style={{overflowY:'auto',height:'200px'}}>
                        {el.description}
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
             
            
            
        )}
    </div>
  )
}

export default Prodactliste