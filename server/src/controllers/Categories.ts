import {Request, Response} from 'express'
import Categories from "../models/Categories.js";

const getCategories = async (req: Request, res: Response) => {
    return await Categories.find({})
        .then((categories) => res.status(200).json({categories}))
        .catch((error) => res.status(500).json({ error }))
}

export default { getCategories }