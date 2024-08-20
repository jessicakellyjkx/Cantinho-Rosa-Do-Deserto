const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productsDB')
   .then(() => console.log('MongoDB connected'))
   .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
   name: String,
   price: Number
});

const Product = mongoose.model('Product', productSchema);

const desertRoseNames = [
   'Rosa do Deserto Branca', 'Rosa do Deserto Rosa', 'Rosa do Deserto Vermelha',
   'Rosa do Deserto Amarela', 'Rosa do Deserto Lilás', 'Rosa do Deserto Coral',
   'Rosa do Deserto Roxa', 'Rosa do Deserto Dourada', 'Rosa do Deserto Laranja',
   'Rosa do Deserto Mesclada'
];

const getRandomName = () => desertRoseNames[Math.floor(Math.random() * desertRoseNames.length)];

const products = Array.from({ length: 10 }, () => ({
   name: getRandomName(),
   price: (Math.random() * 100).toFixed(2)
}));

const seedDB = async () => {
   try {
      await Product.deleteMany({});
      await Product.insertMany(products);
      console.log('Database seeded!');
   } catch (error) {
      console.error('Error seeding database', error);
   } finally {
      mongoose.connection.close();
   }
};

seedDB();
