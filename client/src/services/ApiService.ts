
import { Product } from '../redux/features/products/types'
import serverApi from '../utils/axios'

export class ApiService {
    public static getProducts = async () => {
        try {
            const response = await serverApi.get<Array<Product>>('/products')
            return response.data
        } catch (e) {
            throw e;
        }
    }

    public static registerUser = async (username: string, password: string) => {
        try {
            const { data } = await serverApi.post('/auth/register', {username, password})
            window.location.href = '/'
            return data
        } catch (e) {
            throw e;
        }
    }
}