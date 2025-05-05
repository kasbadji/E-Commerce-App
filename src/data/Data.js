import Hoodie from '../assets/Hoodie.png'
import Shirt from '../assets/Shirt.png'
import Jacket from '../assets/Jacket.png'
import Pants from '../assets/Pants.png'
import Sneakers from '../assets/Sneakers.png'
import Hoodie2 from '../assets/Hoodie2.png'
import Jacket2 from '../assets/Jacket2.png'
import Cap from '../assets/Cap.png'

const products = [
    {
      id: 1,
      name: " Hoodie",
      image: Hoodie,
      price: 2000,
      views: 0,
      sold: 3,
      reviews: [{ rating: 4, comment: "Very warm and comfy!" }],
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      image: Shirt,
      price: 1000,
      views: 0,
      sold: 2,
      reviews: [{ rating: 3, comment: "Nice fit and color!" }],
    },
    {
      id: 3,
      name: "Winter Jacket",
      image: Jacket,
      price: 2200,
      views: 0,
      sold: 0,
      reviews: [{ rating: 5, comment: "Nice fit and color!" }],
    },
    {
      id: 4,
      name: "Sport Pants",
      image: Pants,
      price: 900,
      views: 0,
      sold: 0,
      reviews: [],
    },
    {
      id: 5,
      name: "Sneakers",
      image: Sneakers,
      price: 1300,
      views: 0,
      sold: 0,
      reviews: [{ rating: 4, comment: "Nice fit and color!" }],
    },
    {
      id: 6,
      name: "Classique jacket",
      image: Jacket2,
      price: 2500,
      views: 0,
      sold: 0,
      reviews: [{ rating: 4, comment: "Nice fit and color!" }],
    },
    {
      id: 7,
      name: "Hoodie",
      image: Hoodie2,
      price: 2000,
      views: 0,
      sold: 0,
      reviews: [{ rating: 4, comment: "Nice fit and color!" }],
    },
    {
      id: 8,
      name: "Black-Cap",
      image: Cap,
      price: 900,
      views: 0,
      sold: 0,
      reviews: [{ rating: 4, comment: "Nice fit and color!" }],
    }
  ];
  
  export default products;