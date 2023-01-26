import axios from "axios";
import axios2 from '../utils/axios'

const BASE_URL = 'https://sephora.p.rapidapi.com'

export class ApiService {

    public static getProductsByCategory = async (categoryId:string) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/list`, {
                params: {
                    categoryId: categoryId,
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

    public static testReq = async () => {
        try {
            const response = await axios2.get('/categories')
            console.log(response)
            return response.data
        } catch(e) {
            throw e;
        }
    }
}