import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://sephora.p.rapidapi.com/products/list',
    params: {categoryId: 'cat140006', pageSize: '60', currentPage: '1'},
    headers: {
        'X-RapidAPI-Key': 'd4705c533cmsh3f6c47d3915c391p123170jsnb5089fb38745',
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    }
};

export class ApiService {

    public static getProductsByCategory = async () => {
        try {
            const response = await axios.get('https://sephora.p.rapidapi.com/products/list', {
                params: {
                    categoryId: 'cat140006',
                    pageSize: '30',
                    currentPage: '1'
                },
                headers: {
                    'X-RapidAPI-Key': 'd4705c533cmsh3f6c47d3915c391p123170jsnb5089fb38745',
                    'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
                }
            });
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }
}