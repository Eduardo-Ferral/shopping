
export const helpHttp=()=>{
   //este va ser un metodo privado por lo tanto no se retorna
    const customFetch=(endpoint, options)=>{
        const defaultHeader={
            accept:"application/json"
        } 
        //creamos este objeto para que si no resibe una peticion 
        //termine la peticion y diga que no encontro nada
        const controller= new AbortController();
        options.signal=controller.signal 

        //si method viene vacio colocara el metodo GET
        options.method=options.method||"GET";

        //si headers tiene datos va conbinar lo que tiene  headers con lo que tiene defaultHeader
        options.headers=options.headers?{...options.headers,...defaultHeader}:defaultHeader;

        //las peticiones GET no llevan body por esta razon debemos eliminar ese metodo si es que se usa GET
        options.body=JSON.stringify(options.body)||false;
        if(!options.body) delete options.body
        console.log(options);
        setTimeout(() => {
            controller.abort();
        },3000);

        return fetch(endpoint,options).then(res=>{
            //console.log(`res.ok customfetch ${res.ok}`);
            return res.ok?res.json(): Promise.reject({
            err:true,
            status:res.status||"00",
            statusText:res.statusText||"ocurrio un error"
        })}).catch(err=>err)
    }

    const get=(url,options={})=>customFetch(url,options)

    const post=(url,options={})=>{
        options.method="POST";
        return customFetch(url,options)
    }

    const put=(url,options={})=>{
        options.method="PUT";
        return customFetch(url,options)
    }
     
    const del=(url,options={})=>{
        options.method="DELETE";
        return customFetch(url,options)
    }
    return{
        get,
        post,
        put,
        del,
    }
}




/*
{
    "alumnos":[
        {
            "id":1,
            "name":"izuku Midorya",
            "Qirk":"One For All"
            },
            {
              "id":2,
            "name":"Uraraka Ochako",
            "Qirk":"zero Gravity"
            },
            {
            "id":3,
            "name":"Kaksuki Bakugo",
            "Qirk":"explosion"
            },
            {
              "id":4,
              "name":"Shoto Todoroki",
              "Qirk":"mitad frio mitad caliente"
            },
            {
              "id":5,
              "name":"Momo Yaoyorozu",
              "Qirk":"Creacion"
            }
    ],
    "profesores":[{
        "id":1,
        "name":"Shota Aizawa ",
        "Qirk":"eraser"
    }
    ]

}


*/ 