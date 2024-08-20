const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productsDB')
   .then(() => console.log('MongoDB connected'))
   .catch((err) => console.log(err));

// Define product schema
const productSchema = new mongoose.Schema({
   name: String,
   price: Number,
});

const Product = mongoose.model('Product', productSchema);

// Route to fetch all products
app.get('/products', async (req, res) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
   }
});

// Route to fetch a single product by ID
app.get('/products/:id', async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);
      if (!product) {
         return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
   } catch (error) {
      res.status(500).json({ message: 'Error fetching product' });
   }
});

const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
