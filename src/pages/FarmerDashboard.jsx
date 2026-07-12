 import { useState } from "react";

function FarmerDashboard() {
  const [farmerName, setFarmerName] = useState("");
  const [village, setVillage] = useState("");
  const [phone, setPhone] = useState("");

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (
      productName === "" ||
      category === "" ||
      price === "" ||
      quantity === ""
    ) {
      alert("Please fill all product details");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      category,
      price,
      quantity,
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setCategory("");
    setPrice("");
    setQuantity("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        background: "#f5f5f5",
      }}
    >
      <h1 style={{ color: "green", textAlign: "center" }}>
        🌾 Farmer Dashboard
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "25px",
          boxShadow: "0 0 8px gray",
        }}
      >
        <h2>Farmer Profile</h2>

        <input
          type="text"
          placeholder="Farmer Name"
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
          }}
        />
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 8px gray",
        }}
      >
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={addProduct}
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </div>

      <h2 style={{ marginTop: "35px" }}>My Products</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead style={{ background: "#4CAF50", color: "white" }}>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" align="center">
                No Products Added
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>

                <td>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "30px",
          background: "#dcedc8",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Dashboard Summary</h2>

        <p>
          <b>Farmer :</b>{" "}
          {farmerName === "" ? "Not Entered" : farmerName}
        </p>

        <p>
          <b>Village :</b>{" "}
          {village === "" ? "Not Entered" : village}
        </p>

        <p>
          <b>Phone :</b>{" "}
          {phone === "" ? "Not Entered" : phone}
        </p>

        <h3>Total Products : {products.length}</h3>
      </div>
    </div>
  );
}

export default FarmerDashboard;