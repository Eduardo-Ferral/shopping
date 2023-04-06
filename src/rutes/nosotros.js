import React from 'react';
let person=[
    "https://cdn.atomix.vg/wp-content/uploads/2021/04/vigilantes-.jpg",
    "https://cdnx.jumpseller.com/mangabreria/image/29135591/VIGILANTE-_BOKU_NO_HERO_N.14_QVIGI014_1200.jpg?1667545799",
    "https://www.coyotemag-store.fr/wp-content/uploads/2022/07/ILLEGAL-15.jpg",
    "https://static.wikia.nocookie.net/bokunoheroacademia/images/7/73/Volumen_3_Vigilantes.png/revision/latest?cb=20181125015111&path-prefix=es",
];

export function Nosotros(){

    return(
       <div className='p-2 w-full max-h-full md:flex   bg-gray-700  '>
         <div className=''>
            <img className='mx-5  rounded-full w-4/5' src='https://www.amaterasu.es/wp-content/uploads/2020/05/boku-no-hero-academia.jpg'></img>
         </div>
        <div className=' m-8 w-4/5 bg-lime-700 h-3/6 flex flex-col justify-center' >
            <h3 className=' m-2 text-xl text-center font-bold'> ShoppingCart</h3>
            <h4 className=' font-serif font-semibold text-xl'> Vision</h4>
            <p>Ser una de las mayores empresas en latrinoamerica, provedora de productos 
                de todo tipo para el uso diario 
            </p>
            <h4 className=' font-serif font-semibold text-lg'> Mision</h4>
            <p>Que nustro servicio proporcione la mejorexperiencia para el usuario  </p>
            <div className='my-6 font-serif font-semibold'>
                <h3 className='m-1 text-lg'>Colaboradores </h3>
                {person? person.map(el=><div className=' inline-flex '><img className=' h-28 w-28  rounded-full mx-2     ' src={el}></img></div>):<p> NO hay personas</p>}
            </div>
        </div>
       </div>
    )
}
