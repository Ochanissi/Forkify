import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = '1bc7e064113fa0d2bc31d818aa829891';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.getResults = res.data.recipes;
            // console.log(this.getResults);
        } catch (error) {
            alert(error);
        }
    
    
    }
}


