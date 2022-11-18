


// localStorage.setItem('platano',"🧡")

// console.log(localStorage.getItem("platano"))

// const frutas = [
//     {
//         nombre: "🍌",
//         color: "amarillo",
//     },
//     {
//         nombre: "🍒",
//         color: "rojo",
//     },
//     {
//         nombre: "🍏",
//         color: "verde",
//     },
// ];

// localStorage.setItem("frutas",JSON.stringify(frutas))
// if (localStorage.getItem("frutas")) {
//     const frutas = JSON.parse(localStorage.getItem("frutas"));
//     console.log(frutas);
//     console.log(JSON.stringify(frutas))
// }




//////practica haciendo un ToDo


const formulario=document.getElementById('formulario');
const pintarTodo=document.getElementById('todo');
const templateid=document.getElementById('templateid').content;
const alert=document.querySelector('.peligro')
const input=document.querySelector('.form-control')
const tareaLista=document.querySelector('.opcion')



let todoList =[];



const agregarTodo=todo=>{
    const objetoTodo={
        nombre:todo,
        id:`${Date.now()}`,
        uid:
        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        
       }

    }
   console.log(objetoTodo.id)
    todoList.push(objetoTodo)
    
}

const pintar=()=>{
    localStorage.setItem('todos',JSON.stringify(todoList));
    pintarTodo.textContent='';
    const fragment=document.createDocumentFragment();
    todoList.reverse()
    todoList.forEach(item=>{
      
        const clone=templateid.cloneNode(true);
        clone.querySelector('p').textContent=item.nombre;
        clone.querySelector('.eliminar').dataset.id=item.id
        clone.querySelector('.lista').dataset.uid=item.uid
        console.log(item.idu)
        fragment.appendChild(clone);
        
        
    })
    pintarTodo.appendChild(fragment);
    
}

document.addEventListener('click',(e)=>{
    if(e.target.matches('.eliminar')){
       todoList= todoList.filter(lista=>lista.id!==e.target.dataset.id)
      
       pintar()
    };
    if(e.target.matches('.lista')){
 
        const clone=templateid.cloneNode(true);
        if(todoList.filter(lista=>lista.idu!==e.target.dataset.idu)){

            pintarTodo.querySelector('.opcion').className='alert alert-success opcion d-flex col-12 col-m-3 justify-content-between ' 
           pintarTodo.querySelector('.btn-success').disabled=false
           clone.querySelector('.btn-success').disabled=false
        
        }
            
        
      
      
    }
     
});

formulario.addEventListener('submit',e=>{
    e.preventDefault();
    alert.classList.add('d-none');
    
    
    const data=new FormData(formulario);
    const [todo]=[...data.values()];
    if(!todo.trim()){
        alert.classList.remove('d-none')
        
        return;
    }
    input.value=''
    
    agregarTodo(todo);
   
    
    pintar();
   
});

document.addEventListener('DOMContentLoaded',()=>{
    
    if( localStorage.getItem('todos')){
        todoList= JSON.parse(localStorage.getItem('todos'))
        pintar();
    }
})















//agrear purbea