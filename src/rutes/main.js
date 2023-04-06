import React from 'react';
import { CartMenu } from '../components/CartMenu';
import { Footer } from '../components/footer';
import { Home } from '../components/home';
import Navbar from '../components/Navbar';

 function Main(){
    
    return(
        <div className="App">
          <div className='p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <h1 className='   text-[150px] font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-violet-500 ' >All Shopping </h1>
        </div>
        <div className='m-2 right-7 rotate-2 border-solid  border border-zinc-600 rounded-xl w-2/6 shadow-lg shadow-slate-900' >
            <h2 className=' text-2xl'>All Shopping te da la más cordial Bienvenida...</h2>
            <p>Aqui encontraras todo lo que buscas para tu hogar</p>
          </div>
        
      </div>

    )
}
export default Main