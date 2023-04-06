import React from 'react';
import { Form } from 'react-router-dom';

import { useState } from "react";



export function Sesion(){
    const[form,setForm]=useState({})
    const[formCheck,setFormCheck]=useState({})

    function handleinput(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        }
        function handleCheck(e){
            setFormCheck({
                ...formCheck,[e.target.name]:e.target.checked
            })
        }

    return(
        <div className='w-full h-max min-h-full bg-gradient-to-r  from-blue-500 to-blue-800 flex justify-center p-2' >
         <div id='logo' className=' bg-lime-50 bg-gradient-to-r from-zinc-700 to-blue-800'>

         </div>
         <div id='form' className=' shadow-lg border-2 rounded-lg border-gray-300 flex flex-col justify-center bg-slate-600'>
            <h3 className=' mx-5 my-7  text-red-50 text-3xl font-semibold'>iniciar Sesion</h3>
            <div className=' flex justify-around'>
                <button className=' border-solid rounded-lg p-1 font-medium  text-slate-100 bg-sky-600 hover:bg-red-700'>Google</button>
                <button className=' border-solid rounded-lg p-1 font-medium text-slate-100 bg-sky-700 hover:bg-blue-700'>facebook</button>
            </div>
            <div>
                <form className=' flex flex-col p-2'>
                    <label htmlFor='user' className=' text-left text-red-50'>Usuario</label>
                    <input type="text" onChange={(e)=>{handleinput(e)}} id='user' name='user' className=' rounded valid:border-2 valid:border-green-600 invalid:border-red-700' />
                    <label htmlFor='passw' className='text-left text-red-50'>Contraseña</label>
                    <input type="password" onChange={(e)=>{handleinput(e)}} id='passw' name='passw' className=' rounded valid:border-2 valid:border-green-600'/>
                   <div className=' flex'>
                   <input type="checkbox" id='condition'name='condition' className=' mr-1' onClick={(e)=>{handleCheck(e)}}/>
                   <label htmlFor='condition' className='text-left text-red-50 hover:text-indigo-500'>acepto terminos y condiciones</label> 
                   </div>
                    <button className=' my-4 mx-8 rounded-sm  hover:bg-red-600 bg-red-50'>entrar</button>
                </form>
            </div>

         </div>
         <div id="new"></div>
       </div>
      
    )
}
