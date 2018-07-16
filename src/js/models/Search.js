import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(query){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '5416b19751b009eba3c2409a2cb43845';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            // console.log(res);
            this.result = res.data.recipes;
            // console.log(this.result);
        }
        catch (error) {
            alert(error);
        }
    }
}
