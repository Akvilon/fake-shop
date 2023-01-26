import mongoose, {Schema, Document} from "mongoose";

export interface IProduct {
    id: number,
    displayName: string,
    price: string
}

export interface ICategory {
    displayName: string,
    products: Array<IProduct>
}

export interface ICategories {
    categories: Array<ICategory>
}

export interface ICategoriesModel extends ICategories, Document {}

const CategorySchema = new Schema(
    {
        displayName: {
            type: String,
            required: true
        },
        products: [
            {
                //type: Schema.Types.ObjectId,
                //ref: 'Product'
            }
        ]
    },
)

const CategoriesSchema = new Schema({
    categories: {
        type: [CategorySchema],
        default: undefined
    }
}, {collection: 'categories'})

export default mongoose.model<ICategories>('Categories', CategoriesSchema)