const express = require("express")
const router = express.Router()

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SchemaUser = new Schema({
    dni:String,
    name:String,
    lastName:String,
    sex:String,
    phone:String,
    userId:String
})

const ModelUser = mongoose.model("users", SchemaUser)
module.exports = router

// /api/user/test   ruta de prueba
// router.get("/test", (req, res) => {
//     res.end("Saludo carga desde route test")
// })

// Add User
router.post("/create-user", (req, res) => {
    const newUser = new ModelUser({
        dni:req.body.dni,
        name:req.body.name,
        lastName:req.body.lastName,
        sex:req.body.sex,
        phone:req.body.phone,
        userId: req.body.userId
    })
    newUser.save((err) => {
        if(!err){
            res.send("Usuario agregado correctamente")
        }else {
            res.send(err)
        }
    })
})

// Get users
router.get("/get-users", (req, res) => {
    ModelUser.find({}, (docs, err) => {
        if(!err){
            res.send(docs)
        }else {
            res.send(err)
        }
    })
})

// Get user
router.post("/get-user", (req, res) => {
    ModelUser.find({userId:req.body.userId}, (docs, err) => {
        if(!err){
            res.send(docs)
        }else {
            res.send(err)
        }
    })
})

// Update user
router.post("/edit-user", (req, res) => {
  ModelUser.findOneAndUpdate({userId:req.body.userId}, {
        dni:req.body.dni,
        name:req.body.name,
        lastName:req.body.lastName,
        sex:req.body.sex,
        phone:req.body.phone,
        userId: req.body.userId
  }, (err) => {
        if(!err){
        res.send("Usuario actualizado correcatmente")
        }else {
        res.send(err)
     }
  })
})
// Delete User
router.post("/delete-user", (req, res) => {
    ModelUser.findOneAndDelete({userId:req.body.userId}, (err) => {
        if(!err){
            res.send("Usuario eliminado correcatmente")
            }else {
            res.send(err)
         }
     
    })
  })