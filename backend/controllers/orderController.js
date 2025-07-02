import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

//placing order by COD method
const cod = async(req,res)=>{
    try {
        const {userId, items, amount, address} =req.body;

        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"cod",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order placed"})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//placing order by stripe
const stripe = async(req,res)=>{

}

//placing order by razorpay
const razorpay = async(req,res)=>{

}

// All orders data for Admin panel
const allOrders = async(req,res)=>{
    try {
        const orders= await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// User order data for frontend
const userOrders =async(req,res)=>{
    try {
        const {userId} = req.body

        const orders =await orderModel.find({userId})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//update order status from Admin panel
const updateStatus = async(req,res)=>{
    try {
        const {orderId,status} = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:'Status Updated'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export {cod,stripe,razorpay,allOrders,userOrders,updateStatus}