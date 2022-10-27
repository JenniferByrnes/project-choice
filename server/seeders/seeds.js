const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Clothes' },
    { name: 'Drinkware'},
    { name: 'Hats' },
    { name: 'Stickers' }
   ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Logo Sticker',
      description:
        'Take our fabulous logo with you everywhere!  Perfect for backpacks, computers, cars!',
      image: 'logo-sticker.png',
      category: categories[3]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'PomPom Hat',
      description:
        'A stunning, warm ivory chuncky knit hat with our fabulous logo.',
      image: 'pompom-hat.png',
      category: categories[2]._id,
      price: 10.99,
      quantity: 500
    },
    {
      name: 'T-shirt',
      category: categories[0]._id,
      description:
        'A cute taupe shirt with our fabulous logo',
      image: 't-shirt.jpg',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Hoodie',
      category: categories[0]._id,
      description:
        'A warm comforting hoodie with our fabulous logo on the front and back',
      image: 'hoodie.png',
      price: 33.99,
      quantity: 50
    },
    {
      name: 'Coffee Mug',
      category: categories[1]._id,
      description:
        'A coffee mug with in great neutral colors with our fabulous logo.',
      image: 'coffee-mug.png',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Water Bottle',
      category: categories[1]._id,
      description:
        'A tall white water bottle with our fabulous logo',
      image: 'waterbottlefront.png',
      price: 24.99,
      quantity: 100
    },
    {
      name: 'White T-shirt',
      category: categories[0]._id,
      description:
        'A soft white t-shirt with our logo proudly displayed across the back.',
      image: 'whitetshirtfront.png',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Pink T-shirt',
      category: categories[0]._id,
      description:
        'A soft pink t-shirt with our logo proudly displayed across the back.',
      image: 'pink-shirt.png',
      price: 19.99,
      quantity: 30
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'Tester',
    email: 'test1@test.com',
    password: 'password',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    username: 'Test2Tester',
    email: 'test2@test.com',
    password: 'password'
  });

  console.log('users seeded');

  process.exit();
});