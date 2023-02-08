import axios from '../utils/axios'
import { Product } from '../redux/features/products/types'

export class ApiService {
    public static getProducts = async () => {
        try {
            const response = await axios.get<Array<Product>>('/products')
            console.log(response)
            return response.data
        } catch (e) {
            throw e;
        }
    }
}