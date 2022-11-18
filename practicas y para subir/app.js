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


// const carrito=document.querySelector('#carrito');
// const template=document.querySelector('#template');
// const fragment=document.createDocumentFragment();

// const btn=document.querySelectorAll('.btn');

// const carrobj={};

// const aggregarAlCarrito=(e) =>{
//     console.log(e.target.dataset.fruta);
//     const producto={
//         titulo:e.target.dataset.fruta,
//         id:e.target.dataset.fruta,
//         cantidad:1
//     }


//     if(carrobj.hasOwnProperty(producto.titulo)){
//         producto.cantidad=carrobj[producto.titulo].cantidad+1
//     }





//     carrobj[producto.titulo]=producto;
//     display(producto)
//     console.log(carrobj)
// }

// const display=() =>{

//     carrito.textContent="";
//     Object.values(carrobj).forEach(e=>{
//         const clone=template.content.firstElementChild.cloneNode(true);
//         clone.querySelector('.lead').textContent=e.titulo;
//         clone.querySelector('.badge').textContent=e.cantidad;

//         fragment.appendChild(clone)
//     })

//     carrito.appendChild(fragment);
// }

// btn.forEach(fruta=>{
//     fruta.addEventListener('click',aggregarAlCarrito)
// })


// const frutas = ["🍌", "🍏", "🍓"];

// const nuevoArray = frutas.map(item => item);

// console.log(nuevoArray);


/////recorrer array methodo filter que devuelve un objeto a conparacion de filter que devulve un array

// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
// ];

// const {age}=users.find((user)=>user.uid==2);
// console.log(age)



///////con el method some devuelve un tru o un false
// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
// ];

// const exist = users.some((user)=>user.name=="John");
// console.log(exist)


///findindex devulve numero positivo si encuentra algo y negativo cuando el dato no esta por ejemplo devulve un -1
// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
// ];

// const indice=users.findIndex((user)=>user.uid===5);
// console.log(indice);



////slice devulve un nuevo array.. no cambia el array existente
// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// //             0     [1      2]        3
// const newArray = arr.slice(0, );

// console.log(newArray);


///////unir varios array
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// //const array3 = array1.concat(array2).concat("lo sabia");
// //spread operator
//Spread syntax (opens new window): permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.
// const array3=[...array1,'jeyou',...array2]

// console.log(array3);




//reduce (opens new window): El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

//tener encuenta el Flat() para aplanar los array.. flat(2//dependiendo la profundidad)
// const numeros = [1, 2, 3, 4, 5];

// const sumaTodos = numeros.reduce((accumulador, valorActual) => accumulador + valorActual);

// console.log(sumaTodos);



/////////join.. por si nos entregan base de daos en txt.. metodo recomentado
// const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const arrayMeses = cadenaMeses.split(",");
// const nuevot=arrayMeses.join('-');
// console.log(arrayMeses);
// console.log(nuevot);


///desde aqui empieza el carrito de compra

// ///esto se hizo con array y se modificaron varias cosas
// const carrito=document.querySelector('#carrito');
// const template=document.querySelector('#template');
// const fragment=document.createDocumentFragment();
// const footer=document.querySelector('#footer');
// const templateFooter=document.querySelector('#templateFooter');

// document.addEventListener('click',e =>{
//    // console.log(e.target.matches('.card .btn-outline-primary'));
//     if(e.target.matches('.card .btn-outline-primary')){
//       //  console.log('ejecutar a');
//         aggregarAlCarrito(e)
//     }

//     //console.log(e.target.matches('.btn-danger'))
//     if(e.target.matches('.btn-danger')){
//         btnquitar(e)
//     }
//     if(e.target.matches('.btn-success')){
//         btnaumentar(e)
//     }
// })
// //const btn=document.querySelectorAll('.btn');se hace cambio poque se modificoo

// let carrobj=[];

// const aggregarAlCarrito=(e) =>{
//    // console.log(e.target.dataset.fruta);
//     const producto={
//         titulo:e.target.dataset.fruta,
//         id:e.target.dataset.fruta,
//         cantidad:1,
//         precio:parseInt(e.target.dataset.precio),
        
//     };

//     //se hizo con objeto
//     // if(carrobj.hasOwnProperty(producto.titulo)){
//     //     producto.cantidad=carrobj[producto.titulo].cantidad+1
//     // }

//     const indice=carrobj.findIndex((fruta)=>fruta.id===producto.id);
    

//     if(indice===-1){
//         carrobj.push(producto);
//     }else{
//         carrobj[indice].cantidad++;
//        // carrobj[indice].precio=carrobj[indice].cantidad * producto.precio;
//     }
   
//    // console.log(carrobj)
 


//     //carrobj[producto.titulo]=producto;
//    display()
//    // console.log(carrobj)
// }

// const pintarFooter=() =>{
//    // console.log('pintar footer')
//     footer.textContent='';

//     const total=carrobj.reduce((acc,total)=>acc+total.cantidad*total.precio,0);
//     const clone=templateFooter.content.cloneNode(true);
//     clone.querySelector('span').textContent=total;
//     if(total==0)return
//     footer.appendChild(clone);
   
//     console.log(total)

// }

// const display=() =>{
//     //console.log(carrobj)

//     carrito.textContent="";
//     carrobj.forEach(e=>{
//         const clone=template.content.cloneNode(true);///*firstElementChild. no se usa porque hay dos li*/
//         clone.querySelector('.text-white .lead').textContent=e.titulo;
//         clone.querySelector('.badge').textContent=e.cantidad;

//         clone.querySelector('div span').textContent=e.precio*e.cantidad;

//         clone.querySelector('.btn-danger').dataset.id=e.id;
//         clone.querySelector('.btn-success').dataset.id=e.id;

//         fragment.appendChild(clone).textContent=e.precio;
//     })

//     carrito.appendChild(fragment);
//     pintarFooter();
// }


// const btnaumentar=(e)=>{
//    // console.log('me diste que inguenso',e.target.dataset.id);
//     carrobj=carrobj.map((fruta)=>{
//         if (fruta.id===e.target.dataset.id){
//             fruta.cantidad++;
//         }
//         return fruta;
//     })
//     display()
// };

// const btnquitar=(e)=>{
//    carrobj=carrobj.filter((item)=>{
//     if(e.target.dataset.id===item.id){
//             if(item.cantidad>0){
//                 item.cantidad--;
//                 if(item.cantidad===0) return ;
//                 return item;
                
//             }
//     }else{return item}
//    })
//     display()
// };

///aqui termina el codigo de del carrito de compra

// btn.forEach(fruta=>{// se reemplaza por en global bubbling
//     fruta.addEventListener('click',aggregarAlCarrito)
// })


// const caja=document.querySelectorAll('.border');


// caja.forEach(caja=>{
//     caja.addEventListener('click',(e)=>{
//         e.stopPropagation();
//         console.log('me diste click')
//     })
// })


// const btn=document.querySelector('form');

// btn.addEventListener('submit',(e)=>{
//    e.preventDefault();
//     console.log('clic')
// });


//////delegacion de eventos
//La delegación de eventos es básicamente un patrón para manejar eventos de manera eficiente.

//En lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo en particular utilizando la propiedad .target del objeto de evento.
//Así evitamos la propagación 👌

///dataset-nombre puesto
//matches(aqui ponemos la etiqueta)
//e.target. calse o id
//https://bluuweb.github.io/desarrollo-web-bluuweb/11-07-js-delegacion/#delegacion-de-eventos

// const container = document.querySelector('.container');

// container.addEventListener('click',(e)=>{
//     console.log(e.target.matches('.hijo'))

//     if(e.target.matches('.hijo')){
//         console.log('soy hijo');
//     }
// });//
////////de aqui empieza validar formularios con regex
// const reg=/[uo]/i;

// //const regEx= new reg("carlos","i");

// console.log(reg.test("carlos"));


// const regExpLiteral = /calos|carlos/gi;
// const str = "clos";
// console.log(regExpLiteral.test(str));

const formulario=document.querySelector('#formulario');

const userName=document.querySelector('#userName');
const userEmail=document.querySelector('#userEmail');

const alertsuccess=document.querySelector('#alertsuccess');

const alert1=document.querySelector('#alert1');
const alert2=document.querySelector('#alert2');

const pintarmensaje=()=>{
    alertsuccess.classList.remove('d-none');
    alertsuccess.textContent='Mensjae enviado con exito'
}


const pintarmensajerror=(error)=>{
        error.forEach(item => {
            item.tipo.classList.remove('d-none');
            item.tipo.textContent=item.msg;
            
        });

    
};

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    alertsuccess.classList.add('d-none');

    const errores =[]

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add('is-invalid')
        errores.push({
            tipo: alert1,
            msg: 'formato no valido en el cmpo nombre, solo letras'
        })
      
    }else{
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid')
        alert1.classList.add('d-none')
    }
    
    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add('is-invalid');
        errores.push({
            tipo: alert2,
            msg: 'escriba un correo valido'
        })
     
    }else{
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        alert2.classList.add('d-none');
    }

if(errores.length!==0){
    pintarmensajerror(errores);
    
    // return
}

    pintarmensaje();
    
    
})