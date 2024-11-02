//if not use ES6
// const express = require("express");
// const colors = require("colors");

//if use ES6
import express from "express";
import colors  from  "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'


//config env
dotenv.config();

// database config
connectDB();

//Port
// const PORT = 8080
const PORT = process.env.PORT || 8080;

//rest object
const app = express()

//middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get('/', (req, res)=>{
    res.send({
        message:"Welcome to Home "
    });

});


// app run
app.listen(PORT, ()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgGreen.white)
});