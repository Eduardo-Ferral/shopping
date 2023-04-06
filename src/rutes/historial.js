import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import { CartHistorial } from '../components/cartHistorial';


export function Historial(){
    const[db,setDb]=useState([])
    let api=helpHttp()
    let url="http://localhost:5000/products"
    let data
    useEffect(()=>{
    api.get(url).then(res=>{
        if(!res.err){
            setDb(res)
        }
    })
    },[])
      /*let response= await fetch(url)
      if(!response.ok) throw new Error("error",response.status)
      let data=await response.json()
      
    return data;
    }
    let datos=requestData("http://localhost:5000/users")
    //console.log(datos);*/
    db.map(el=>console.log(el))
    return(
        
        <div >
            <h2 className='font-bold'> Historial de compras</h2>
            
            {<h1>si hay datos</h1> }
            {db.length===0?<h1>Sin  datos</h1>: db.map(el=><CartHistorial key={el.id} datos={el}/>)}
            
            
            
    
            
        </div>
    )
}

