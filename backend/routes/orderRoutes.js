import express from 'express'
import {cod,stripe,razorpay,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter=express.Router()

//For Admin
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment Features
orderRouter.post('/cod',authUser,cod)
orderRouter.post('/stripe',authUser,stripe)
orderRouter.post('/razorpay',authUser,razorpay)

//User Features
orderRouter.post('/userorders',authUser,userOrders)


export default orderRouter