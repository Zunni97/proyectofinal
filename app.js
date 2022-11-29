
import { recipesSearch } from "./foodFetch.js";

async function mostrarReceta() {
    const recetas = document.getElementById('Recetas');
    recetas.innerHTML = ""
    recetas.style.display = "flex";
    recetas.style.flexDirection = "column";

    const busqueda = document.getElementById("busqueda").value
    const recipes = await callRecipes(busqueda);
    recipes.data.recipes.map(receta => {
    console.log(receta.title);

    const recipesName = document.createElement('p');
    recipesName.textContent = receta.title;

    const imgRecipes = document.createElement('img');
    imgRecipes.src = receta.image_url;
    imgRecipes.alt = receta.name;
    imgRecipes.style.width = "50px";
    

    const publisher = document.createElement('p');
    publisher.textContent = recipes.publisher;
    
    recetas.append(publisher);
    recetas.append(imgRecipes);
    recetas.append(recipesName);
})
}

async function callRecipes(data) {
    return await recipesSearch(data.toLowerCase());
}

const form = document.getElementById("form")
const buscar = document.createElement('input');
buscar.id = "busqueda";
buscar.style.width = "200px";
const boton = document.createElement('button');
boton.textContent = "Buscar Recetas";
boton.onclick = mostrarReceta;

form.append(buscar);
form.append(boton);


