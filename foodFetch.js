'use strict'

export const recipesSearch = async (recipesName) => {
    const response = await fetch ('https://forkify-api.herokuapp.com/api/v2/recipes?search='+recipesName);
    const data = await response.json();
    return data;
}