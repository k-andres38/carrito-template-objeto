

/////programacion orientada a objeto

// function Persona(nombre) {
//     this.nombre = nombre;
//     this.saludar = function() {
//         return `${this.nombre} dice hola!`;
//     };
// }

// const personaUno = new Persona("Ignacio");
// const personaDos = new Persona("Nacho");

// console.log(personaUno); // devuelve un objeto 😲
// console.log(personaDos); // devuelve un objeto 😲

// console.log(personaUno.nombre);
// console.log(personaUno.saludar());
///usando las clases
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar() {
//         return `${this.nombre} está saludando`;
//     }

//     static probarSaludo(nombre) {
//         return `${nombre} está saludando`;
//     }
// }

//utilizando geter y setter y las clasess
// class Estudiante extends Persona {
//     constructor(nombre, edad, notas = []) {
//         super(nombre, edad);
//         this.notas = notas;
//     }

//     set setNotas(nota) {
//         this.notas.push(nota);
//     }

//     get getNotas() {
//         return this.notas;
//     }

//     saludar() {
//         return `${this.nombre} es un estudiante saludando`;
//     }//esta funcion ya hace parte de los protopios de javascript pueden ser llamado si hacen parte de la clase
// }

// const juanito = new Estudiante("juanito", 55);

// juanito.setNotas = 3;
// juanito.setNotas = 5;
// juanito.setNotas = 7;

// console.log(juanito.getNotas);



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/// PRACTICA DE TODO LO APRENDIDO//

const formulario=document.querySelector('#formulario');
const cardestudiante=document.querySelector('#cardestudiante');
const cardprofesor=document.querySelector('#cardprofesor');
const templatestudiantes=document.querySelector('#estudiantes').content;//es importante tener presente agregarle el content a las plantillas
const templateprofesores=document.querySelector('#profesores').content;
const alert=document.querySelector('.alert');

const estudiantes=[];
const profes=[];
document.addEventListener('click',e=>{
    if(e.target.matches('.btn-success')){
        
            estudiantes.map(i=>{
                if(i.uid===e.target.dataset.uid){
                    i.setestado=true
                };
                
                return i;
            })
           
    }
    if(e.target.matches('.btn-danger')){
        
        estudiantes.map(i=>{
            if(i.uid===e.target.dataset.uid){
                i.setestado=false
            };
            
            return i;
        })
        
    }
   
    Persona.pintarUI(estudiantes,"estudiante")
})


//////recibir los datos del formulario
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();//evitar ue actue por defecto
    alert.classList.add('d-none')
    const datos= new FormData(formulario)///recibo todos los datos del formulario con el FormData
    const [nombre,edad,opcion]=[...datos.values()];//destructuracion de los datos del FormData  e importante en la manera de como extrae la informacion

if(!nombre.trim() || !edad.trim() || !opcion.trim()){
    alert.classList.remove('d-none')
    return
    
}

if(opcion==='profesor'){
   const profesor=new Profesores(nombre,edad)
   profes.push(profesor)
   Persona.pintarUI(profes,opcion)


}else{

    const estudiante= new Estudiante(nombre,edad);
    estudiantes.push(estudiante);
    Persona.pintarUI(estudiantes,opcion)
}
   
    

})


/////////obejto principal..objeto padre
class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.uid=`${Date.now()}`;
       

    }

    ///esto es estatico no se puede modificar para poder pintarlo al html
    static pintarUI(persona, tipo){


        if(tipo==='estudiante'){
           cardestudiante.textContent='';
            const fragment=document.createDocumentFragment();
            persona.forEach(item=>{
                fragment.appendChild(item.agregarNuevoEstudiante())
                
            })
            cardestudiante.appendChild(fragment)
        }
        if(tipo==='profesor'){
            cardprofesor.textContent="";
             const fragment=document.createDocumentFragment();
             persona.forEach(item=>{
                 fragment.appendChild(item.agregarNuevoProfesor())
                 
             })
             cardprofesor.appendChild(fragment)
         }
    }

}

///la clase estudiente se extiende e la clase Persona
class Estudiante extends Persona{
    #estado=false
    #estudiante='estudiante'

    set setestado(estado){//set siempre recibe algo como argumento
        this.#estado=estado
    }

    get getestudiante(){//es es estatico tambien se pudo haber puesto en e html y este get siempre devuelve algo
        return this.#estudiante
    }

    ///agrar usuarios o estudiante damicp
    agregarNuevoEstudiante(){
        //importante clonar las plantillas ytener presente lo del content
        const clone=templatestudiantes.cloneNode(true)
        clone.querySelector('h5 .text-primary').textContent=this.nombre
        clone.querySelector('h6').textContent=this.getestudiante;
        clone.querySelector('.lead').textContent=`Edad: ${this.edad}`;
        
        if(this.#estado){
            clone.querySelector('.badge').className='badge bg-success';
            clone.querySelector('.badge').textContent="Aprobado"
            clone.querySelector('.btn-success').disabled=false
            clone.querySelector('.btn-success').disabled=true
        }else{
            clone.querySelector('.badge').className='badge bg-danger';
            clone.querySelector('.badge').textContent="Reprobado"
            clone.querySelector('.btn-danger').disabled=false
            clone.querySelector('.btn-danger').disabled=true
        }


        //para darle un id a los botones de manera dinamica utilizando el dataset
        clone.querySelector('.btn-success').dataset.uid=this.uid;
        clone.querySelector('.btn-danger').dataset.uid=this.uid;
        return clone// siempre hay que devolver algo
        }
}


///la clase Profesores se extiende de la clase profesores
class Profesores extends Persona{
    #profe='profesor'
    agregarNuevoProfesor() {
        const clone=templateprofesores.cloneNode(true);
        clone.querySelector('h5').textContent=this.nombre;
        clone.querySelector('h6').textContent=this.#profe;
        clone.querySelector('.lead').textContent=this.edad;
        return clone
     }
    }































