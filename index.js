// console.log('this is curd api');
// npm start  is to run the node projects 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product.model.js'); // Imported once here

// for using the import use type:module in package.json file 
mongoose.connect('mongodb+srv://abdullahsajjad111b:abdul0301@curdapidb.nhrao.mongodb.net/')
.then(() => {
    console.log("connection created");
    app.listen(3000, () => {
        console.log(`the server is started`);
    });
})
.catch(() => console.log("connection denied"));
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// routes 
app.use('/api/products',ProductsRoutes)
// app.get('/', (req, res) => {
//     res.send('the server is running');
// });

// app.get('/user', (req, res) => {
//     res.send('this is the second route');
// });
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({}); // Use Product instead of products
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });
// // fetching the single id 
// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id)
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // POST route for creating products
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body); // Use the already imported model
//         res.status(201).json(product);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// // update the api 
// app.put('/api/products/:id',async(req,res)=>{
//  try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body)
    

//     if(!product){
//         res.status(404).json({message:"the product not found"})
//     }

//     const UpdatedProduct = await Product.findById(id)
//     res.status(200).json(UpdatedProduct)
//  } catch (error) {
//     res.status(500).json({message:error.message})
//  }
// })
// // let us move on delete it items 
// app.delete('/api/products/:id',async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const DeleteProduct = await Product.findByIdAndDelete(id);
//         if(!Product){
//           return res.status(404).json({message:"product not found"})
//         }
//     } catch (error) {
//      res.status(500).json({message:error.message})
//     }

// })