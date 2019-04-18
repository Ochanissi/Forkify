import axios from 'axios';

async function getResults(query) {
    const key = '1bc7e064113fa0d2bc31d818aa829891';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes
        console.log(recipes);
    } catch (error) {
        alert(error);
    }


}

getResults('tomato pasta');
