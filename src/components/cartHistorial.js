import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';

 export function CartHistorial({datos}){
    
    return(
        <div className=' flex flex-col sm:flex-row border-solid via-cyan-500 border-2 rounded-lg justify-evenly w-3/4 mx-auto my-3'>
            <div className='border-solid border-1 md:w-3/6 '><img src={datos.images} alt={datos.product}></img> </div>
            <div className='flex flex-col m-1 border-2'>
                <h3>{datos&&datos.product}</h3>
                <p className=' flex max-w-sm'> precio {datos.price} <p className=' font-bold'>$</p> </p>
                <p> Numero de productos comprados sdfsdfd sdcsadsasadasd  asfasfsfd fasf
                    dgfdgfdgfdgdfgfdgg fd gsfg gsg gfdg </p>
                

            </div>
        </div>
    )
}