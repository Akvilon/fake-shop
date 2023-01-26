import express from 'express'
import controller from '../controllers/Categories.js'

const router = express.Router()

router.get('/categories', controller.getCategories)

export default router;