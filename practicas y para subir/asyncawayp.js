
///callaback/// promesas
const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

//clave publica= e55e3afc4bfc01ed0aaff2e977616649
//clave privada =3805803585b5def6f35c1a45213c0b82521c7cc7


///callback

// const findPostById = (id, callaback) =>{

//         const post=posts.find(item=> item.id===id);

//         if(post){
//             callaback(null, post);
//         }else{
//             //error cuando no encontro el post
//             callaback('no se encontro el post con id');
            
//         }

        
        
// }


// findPostById(4,(err,post)=>{

//     if(err){
//        return console.log(err);
//     }


//     console.log(post);
// })

// const findPostById = (id)=>{
// const post=posts.find(item=>item.id===id);
//     return new Promise((resolv,reject)=>{
// setTimeout(()=>{
//     if(post){
//         resolv(post);
//     }else{
//         reject('no se encontro el post con id  '+ id);
//     }
// },2000);

// })

        
// }

// findPostById(6)
// .then(post=>console.log(post))

// .catch(err=>console.log(err))


// const buscar = async(id)=>{
    
//     try {
//         const resPost=await Promise.all([
//             findPostById(1),
//         findPostById(3)])
//       //  const post=await findPostById(id)//consumir una promesa 
//         console.log(resPost)
//     } catch (error) {
//         console.log('no se encontro el id')
//     }finally{
//         console.log('se ejecuta si o si');
//     }

// };
// buscar(1)


// console.log('fin del codigo');
// document.addEventListener("DOMContentLoaded", () => {
//     fetchapi();
// });


const marvel={
    render:()=>{
        const urlApi='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e55e3afc4bfc01ed0aaff2e977616649&hash=83f59ab8ab8a52d2f3248ffaf6558467';
        const container = document.getElementById('marvel');
        let contentHTML='';
        
         
        fetch(urlApi)
        .then(res =>res.json())
       
        .then(json =>{
            for (const heroe of json.data.results){
                //console.log(heroe)
                let urlHeroe=heroe.urls[0].url;
                
                contentHTML+=`
                <div class="col-md-4 col-lg-3">
                <div class="d-flex">
                    <a href="${urlHeroe}" target="" >
                        <img src="${heroe.thumbnail.path}.${heroe.thumbnail.extension}" alt="${heroe.name}" class="img-thumbnail">
                    </a>
                </div>
                <h3 class="title">${heroe.name}</h3>
            </div>
                `
            }
            container.innerHTML=contentHTML;
          

        });

    }
}
marvel.render();

