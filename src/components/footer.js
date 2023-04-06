import React from 'react';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <div className='w-full  bottom-0'> 
        <div className='  bg-gray-800   text-white justify-between flex '>
            <div className=' flex flex-col p-1 w-2/4 sm:w-4/5 sm:flex-row sm:justify-around [&_div]:my-1 ' >
                <div className= ' rounded-md md:text-left' >
                    <h3 className=' font-bold text-lg text ' >Conocenos</h3>
                    <ul className=' p-1 text-sm  ' >
                    <li><Link to={"nosotros"} className=' hover:text-indigo-400  hover:border  border-teal-200 hover:rounded-sm hover:ring-emerald-400'>Sobre Nosotros </Link> </li>
                    <li><Link to={`sesion`} className='hover:text-indigo-400'>Informacion corporativa </Link></li>
                    <li><a href='#' className='hover:text-indigo-400'>Trabajo ShoppingCart </a></li>
                    <li>Vender en Shopping</li>
                    </ul>
                </div>
                <div className='rounded-md mx-1 md:text-left' >
                    <h3 className=' font-bold text-lg text'>contacto</h3>
                    <ul className= 'p-1 text-sm md:text-left' >
                    <li className='hover:text-indigo-400'>Yo soy Shopping </li>
                    <li className='hover:text-indigo-400'>batman@gmail.com</li>
                    <li className='hover:text-indigo-400'>llamanos al 54613265</li>
                    <li className='hover:text-indigo-400'>ayuda</li>
                    </ul>
                </div>
                <div className='rounded-md'>
                    <h3 className=' font-bold text-lg text'>podemos ayudarte</h3>
                    <ul className='p-1 text-sm md:text-left'>
                    <li className='hover:text-indigo-400'>Devolver o resplazar producto</li>
                    <li className='hover:text-indigo-400'>Gestionar cuenta</li>
                    <li  className='hover:text-indigo-400'>Recomendaciones de Covid-19</li>
                    <li  className='hover:text-indigo-400'>Asesoria</li>
                    
                    </ul>
                </div>
            
            
            </div>
            <div className=' m-auto w-1/5'>
                <div className=' text-center'>
                     second
                 </div>
            </div>
        </div>
    </div>
    )
}