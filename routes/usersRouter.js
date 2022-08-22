import { Router } from 'express'
import UserModel from '../models/users.js'

const usersRouter = Router()

/*****************  un utilisateur *****************/

usersRouter.get('/users', async (req, res) => {
    try {
        let users = await UserModel.find({}, { _id: 0, password: 0, __v: 0 })
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

/***************** Chercher un utilisateur par son ID *****************/

usersRouter.get('/user/:id', async (req, res) => {
    try {
        let user = await UserModel.findOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.send(error)
    }

})

/***************** Ajouter un utilisateur *****************/

usersRouter.post('/user', async (req, res) => {
    try {
        let userByMail = await UserModel.findOne({ mail: req.body.mail })
        if (!userByMail) {
            let user = new UserModel(req.body)
            user.save()
            res.json(user)
        }else{
            throw 'Mail deja utilisé'
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
   
})

/***************** Suprimer un utilisateur *****************/

usersRouter.delete('/user/:id', async (req, res) => {
    try {
        let user = await UserModel.deleteOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.send(error)
    }
})

/***************** Modiffier un utilisateur *****************/

usersRouter.put('/user/:id', async (req, res) => {
    try {
        let user = await UserModel.updateOne({ _id: req.params.id }, req.body)
        res.json(user)
    } catch (error) {
        res.json(error)
    }

})

usersRouter.get('/user/findById/:id', async (req, res) => {
    try {
        let user = await UserModel.findOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.json(error)
    }

})

/***************** Chercher un utilisateur par filtre Mail *****************/

usersRouter.get('/user/findByMail/:mail', async (req, res) => {
    try {
        let user = await UserModel.findOne({ mail: req.params.mail })
        res.json(user)
    } catch (error) {
        res.json(error)
    }

})




usersRouter
export default usersRouter
