src/
├── assets/    
├── components/    
│   ├── Footer.jsx
│   ├── ItemCard.jsx
│   ├── NavBar.jsx
│   └── Welcome.jsx
├── data/
│   └── Data.js       
├── pages/              
│   ├── Cart.jsx
│   ├── DetailProduct.jsx
│   └── Home.jsx
├── App.jsx            
├── index.css        
└── main.jsx           

data folder have Data.js , Data.js contain all product {name , image , id , price , view , sold , review}

pages folderccontain all pages : 
 - Cart have all products the user add it when he click at the butoon add
 - DetailProduct when he click at the button "detail" user will se all detail about this product
 - home , the pages where it display all products using .map()

components it's all what we see in the product :
 - nav bar it's the top bar that have the search bar , home link , cart link using path
 - footer it's in the bottom it's display all about information about the web , i did it more for designe so all link dont work
 - itemCard to display all product image price and the two button "add" and "detail"
 - welcome : it's just a welcome page it's better then seeing product derectly

index.css contain all the css style , and i used some MUI for icons and button

App.jsx have all the routes and Links and some function like "add to cart" , "remove from cart" etc....


             