// src/components/App.jsx

import Product from "./Product";

export default function App() {
  return (
    <div>
      <h1 style={{
        margin: 8,
        padding: "12px 16px",
        borderRadius: 4,
        backgroundColor: "gray",
        color: "white",
      }}>Best selling</h1>

      <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}

