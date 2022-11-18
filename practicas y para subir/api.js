




document.addEventListener('DOMContentLoaded',()=>{
   fetchApi();
  
});

const fetchApi= async ()=>{
    ///obteniendo datos de la api...
    
    try {
        loading(true);
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data= await res.json();
       pintarCard(data)
   
        
    } catch (error) {
        console.log(error);
    }finally{
      
        loading(false);
    }
}

const pintarCard=data=>{
   const fragment= document.createDocumentFragment();//para evitar el reflow
    const cards=document.querySelector('#card-dinamicas');
    const template=document.querySelector('#templateid').content;
    
  
    data.results.forEach(element => {
        const clone=template.cloneNode(true);
     
       
        clone.querySelector(".nombre").textContent=element.name;
        clone.querySelector(".specie").textContent=element.species;
        clone.querySelector(".generoe").textContent=element.gender;
        clone.querySelector("img").setAttribute("src",element.image);
        
       // Guardamos en el fragment para evitar el reflow

        fragment.appendChild(clone);
     
    });
    cards.appendChild(fragment);
}


const loading=(estado)=>{
    const load=document.querySelector('#load');
    if(estado){
        load.classList.remove('d-none');
    }else{
        load.classList.add('d-none');
    }
};


