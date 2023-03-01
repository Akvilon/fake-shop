import {Request, Response} from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (obj: any) => {
    const token = jwt.sign(
        {
            id: obj._id
        },
        process.env.JWT_SECRET!,
        {expiresIn: '30d'}
    )
    return token
}

const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({username})

        if(user) {
            res.json({
                message: 'Username already exists'
            })
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPass = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hashedPass
        })
        const token = createToken(newUser)

        await newUser.save()

        res.status(200).json({
            newUser, token, message: 'Your account has been successfully created'
        })

    } catch (e) {
        res.status(401).json({
            message: 'Error during account creation'
        })
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})

        if(!user) {
            res.json({
                message: 'Username already exists'
            })
        } else {
            const isPassCorrect = await bcrypt.compare(password, user.password)

            if(!isPassCorrect) {
                res.json({
                    message: 'Wrong password'
                })
            }

            const token = createToken(user)

            res.json({
                token, user, message: 'Welcome on FakeShop!'
            })
        }

    } catch (e) {
        res.json({
            message: 'Authorization error'
        })
    }
}

const getMe = async (req: Request, res: Response) => {
    try {

    } catch (e) {

    }
}

export default {register, login, getMe}