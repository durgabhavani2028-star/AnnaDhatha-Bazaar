 import { useState } from "react";

function CustomerShop() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Rice",
      category: "Grains",
      price: 60,
      quantity: "50 Kg",
      farmer: "Ravi Farmer",
    },
    {
      id: 2,
      name: "Tomato",
      category: "Vegetables",
      price: 40,
      quantity: "30 Kg",
      farmer: "Suresh Farmer",
    },
    {
      id: 3,
      name: "Mango",
      category: "Fruits",
      price: 100,
      quantity: "20 Kg",
      farmer: "Ramesh Farmer",
    },
    {
      id: 4,
      name: "Wheat",
      category: "Grains",
      price: 55,
      quantity: "40 Kg",
      farmer: "Krishna Farmer",
    },
  ];


  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const categories = [
    "All",
    "Grains",
    "Vegetables",
    "Fruits",
  ];


  const filteredProducts = products.filter((item) => {
    return (
      (selectedCategory === "All" ||
        item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });


  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );


  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        background: "#eef7ee",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "green",
        }}
      >
        🛒 Customer Dashboard
      </h1>


      {/* Customer Profile */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "25px",
          boxShadow: "0 0 8px gray",
        }}
      >

        <h2>Customer Profile</h2>


        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e)=>setCustomerName(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"10px"
          }}
        />


        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"10px"
          }}
        />


        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          style={{
            width:"100%",
            padding:"10px"
          }}
        />


      </div>



      {/* Search and Filter */}


      <div
        style={{
          background:"white",
          padding:"20px",
          borderRadius:"10px",
          marginBottom:"25px"
        }}
      >

      <h2>Find Products</h2>


      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          width:"70%",
          padding:"10px",
          marginRight:"10px"
        }}
      />


      <select
        value={selectedCategory}
        onChange={(e)=>setSelectedCategory(e.target.value)}
        style={{
          padding:"10px"
        }}
      >

        {
          categories.map((cat)=>(
            <option key={cat}>
              {cat}
            </option>
          ))
        }

      </select>


      </div>




      {/* Product Cards */}


      <h2>Available Products</h2>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px"
        }}
      >


      {
        filteredProducts.length===0 ?

        <h3>No Products Found</h3>

        :

        filteredProducts.map((product)=>(

          <div
            key={product.id}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"10px",
              boxShadow:"0 0 8px gray"
            }}
          >

            <h2>{product.name}</h2>

            <p>
              <b>Category:</b> {product.category}
            </p>


            <p>
              <b>Price:</b> ₹{product.price}/Kg
            </p>


            <p>
              <b>Available:</b> {product.quantity}
            </p>


            <p>
              <b>Farmer:</b> {product.farmer}
            </p>


            <button
              onClick={()=>addToCart(product)}
              style={{
                background:"green",
                color:"white",
                border:"none",
                padding:"10px 20px",
                borderRadius:"5px",
                cursor:"pointer"
              }}
            >
              Buy Now
            </button>


          </div>

        ))

      }


      </div>




      {/* Order Summary */}


      <div
        style={{
          marginTop:"35px",
          background:"#dcedc8",
          padding:"20px",
          borderRadius:"10px"
        }}
      >

        <h2>
          Order Summary
        </h2>


        <p>
          <b>Customer:</b>{" "}
          {
            customerName || "Not Entered"
          }
        </p>


        <p>
          <b>Phone:</b>{" "}
          {
            phone || "Not Entered"
          }
        </p>


        <p>
          <b>Address:</b>{" "}
          {
            address || "Not Entered"
          }
        </p>



        <h3>
          Selected Products:
        </h3>


        {
          cart.length===0 ?

          <p>No Orders Yet</p>

          :

          cart.map((item,index)=>(

            <p key={index}>
              {index+1}. {item.name} - ₹{item.price}
            </p>

          ))

        }



        <h2>
          Total Amount: ₹{totalAmount}
        </h2>



      </div>



    </div>
  );
}


export default CustomerShop;