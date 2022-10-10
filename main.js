
let materia = document.getElementById('campo');
let nombre=document.getElementById('nombre')
let precio=document.getElementById('precio');

let boton = document.getElementById('boton');

let calcular=document.getElementById('calcular')
let muestra = document.getElementById('muestra');
let mostrarp = document.getElementById('valor');
let mostrarsuma=document.getElementById('suma');
const materias=[];
const valorm=[];
const nombres=[];


boton.addEventListener("click", ()=>{
  
    let stringh2='';
    let stringprecio='';
    materias.push(materia.value);
    valorm.push(precio.value)
    nombres.push(nombre.value)

    const materiass=[materias,valorm]


    for(let i=0;i<materiass.length;i++){
        console.log(materiass[i])
    }



    for(const listas of materias ){
        let fila = `<h2>`
        fila += listas;
        fila += `</h2> <hr>`;
        stringh2+=fila;
        muestra.innerHTML=stringh2;    
    }


    for(const listas of valorm){
        let fila=`<h2>`
        fila+=listas;
        fila+=`</h2> <hr>`;
        stringprecio+=fila;
        mostrarp.innerHTML=stringprecio;
    }

});



calcular.addEventListener("click",()=>{
let stringtotal='';
    let suma =0;
    let ensumos=28000;
    let descuento=0;
    let total=0;


    
    for(let i=0;i<valorm.length;i++){
       suma=suma+parseInt(valorm[i])
       

       let stringtotal='';
       
    


       descuento=suma*0.20;
       console.log(descuento)
   total=parseInt(suma)+parseInt(ensumos);
   total=total-descuento;
let listas = total; 
   let fila=`<center><h2>`+nombres[0]+` EL VALOR TOTAL DE LAS MATERIAS ES DE: `
   fila+=listas;
   fila+=`</h2></center>`;
   stringtotal+=fila;
   
   mostrartotal.innerHTML=stringtotal;

    } 
});




