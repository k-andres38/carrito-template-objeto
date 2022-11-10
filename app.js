//////algo como un carrito de compras
// const frutas=[];

// const fruta=prompt('que fruta desea comprar');
// frutas.push(fruta);


// while(confirm("desea agregar otro elemento al carrito?")){
//     const fruta=prompt('que fruta desea comprar');
//     frutas.push(fruta);
// }


// console.log('compraste:')
// // for (const fruta of frutas){
    
// //     console.log(fruta)
// // }

// frutas.forEach((e,i)=>console.log(e,i));


///////funciones declarativas

// function numeroAleatorio(min,max){
//     return Math.floor(Math.random()*(max-min))+min;
// }
// console.log(numeroAleatorio(10,21))

/////funciones expresada.. guarda el resultado en una variable

// const numAzar=function(max,min){
//     return Math.floor(Math.random()*(max-min))+min;
// }
// console.log(numAzar(100,110));

/////arrow funcion

// const numero=(min,max)=>Math.floor(Math.random()*(max-min))+min;
// console.log(numero(null,102));


///////////javaScript con objetos

// const gato={
//     nombre:"Valiente",
//     duerme:"True",
//     color:"VErde",
//     edad:5,
//     enemigos:["agua","perro","otros"],
//    comer:function(){
//     console.log('gatos comiendo');
//    },
//    comerDos(){
//     console.log('gato2 coer')
//    },
//    come:p=>console.log(`${gato.nombre} esta comeindo ${p}`),
//     get nombreM(){
//         return this.nombre.toUpperCase()
//     },

//     set agregar(a){
//         this.enemigos.push(a)
//     },

// }

// gato.comer()
// gato.comerDos()
// gato.come('pescado')


///////destructuring en Objetos
// const {nombre:nombre3/*alias de la variable*/,color,enemigos}=gato
// console.log(nombre3,enemigos);

/////getter y setter.. get bno recibe parametro y no se llama como funcion y el set si necesita un parametro

//llamar a get
// console.log(gato.nombreM);

// //llamar a set
// gato.agregar='batman';
// console.log(gato.enemigos);

// //////
// console.log(document.title)

// const div1=document.querySelector('.prueba');


// div1.style.backgroundColor="red"
// div1.style.color='white'
// div1.addEventListener('click',()=>{
//     div1.textContent='cambio'
//     removeEventListener('click',()=>{
//         div1.textContent='hola'
//     })
// })
///////////////////////create list
// const lista=document.querySelector('.lista');
// const li=document.createElement('li');
// li.textContent='elemento de javascript';

// lista.appendChild(li)
//////con arrar
// const arrayp=['peru','colombia','mexico','brazil'];

// const fragmen=document.createDocumentFragment();

// arrayp.forEach(e=>{
//     const li=document.createElement('li');
//     li.textContent=e;
//     lista.appendChild(li);
// })
// arrayp.forEach(e=>{
//     const li=document.createElement('li');
//     li.textContent=e;
//     fragmen.appendChild(li);
// })

// lista.appendChild(fragmen) //practica

// arrayp.forEach(pais=>{
//     const li=document.createElement('li');
//     li.className='list';

//     const b=document.createElement('b');
//     b.textContent='Pais: ';

//     const span=document.createElement('span');
//     span.className='textp'
//     span.textContent=pais;
//     span.style.color='blue';
//     lista.style.backgroundColor='aquamarine';
//     li.style.listStyle='none';

//     li.appendChild(b);
//     li.appendChild(span);


    
//     fragmen.appendChild(li);
// })

// lista.appendChild(fragmen);

//////alternativa al ejercicio anterior y mejorar el codigop

///tempalte contrl+shift+p luego escribir snippet configuracion de usuario y luego buscar html y seguir las instrucciones del ejemplo escrito en json

// const lista=document.querySelector('.lista');
// const li=document.createElement('li');


// const fragmen=document.createDocumentFragment();
// const template=document.querySelector('#litemplate');
// const arrayp=['peru','colombia','mexico','brazil'];

// const clicp=(e) => console.log('me diste click',e.target.textContent)//agragar el evento para extraer el contenido;


// arrayp.forEach(pais=>{

//     const clone=template.content.firstElementChild.cloneNode(true);
//     clone.querySelector('.textp').textContent=pais;

//     fragmen.appendChild(clone);

//     clone.addEventListener('click',clicp);

// })
// lista.appendChild(fragmen)

// const clone=template.content.cloneNode(true);

// clone.querySelector('.textp').textContent="agregue a travez de un template";
// lista.appendChild(clone)
// console.log(clone)


const carrito=document.querySelector('#carrito');
const template=document.querySelector('#template');
const fragment=document.createDocumentFragment();

const btn=document.querySelectorAll('.btn');

const carrobj={};

const aggregarAlCarrito=(e) =>{
    console.log(e.target.dataset.fruta);
    const producto={
        titulo:e.target.dataset.fruta,
        id:e.target.dataset.fruta,
        cantidad:1
    }


    if(carrobj.hasOwnProperty(producto.titulo)){
        producto.cantidad=carrobj[producto.titulo].cantidad+1
    }





    carrobj[producto.titulo]=producto;
    display(producto)
    console.log(carrobj)
}

const display=() =>{

    carrito.textContent="";
    Object.values(carrobj).forEach(e=>{
        const clone=template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent=e.titulo;
        clone.querySelector('.badge').textContent=e.cantidad;

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment);
}

btn.forEach(fruta=>{
    fruta.addEventListener('click',aggregarAlCarrito)
})
