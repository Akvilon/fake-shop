import axios from "axios";

export class ApiService {

    public static getSmartphones = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/category/smartphones');
            return await response.data;
        }
        catch (e) {
            throw e;
        }
    }
}