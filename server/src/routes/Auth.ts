import express from 'express'
import controller from '../controllers/Auth.js'

const router = express.Router()

// Registration
router.post('/register', controller.register)
// Register
router.post('/login', controller.login)
// Get Me
router.get('/me', controller.getMe)

export default router