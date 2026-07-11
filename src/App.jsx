import { useState } from 'react'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')

  // Products list - TESTED & WORKING LINKS
  const products = [
    { name: 'Tomato', price: '₹40 / kg', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' },
    { name: 'Onion', price: '₹30 / kg', img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Onion_on_White.JPG' },
    { name: 'Potato', price: '₹35 / kg', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/White_Potatoes.jpg' },
    { name: 'Brinjal', price: '₹25 / kg', img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Berber_Eggplant.jpg' },
    { name: 'Carrot', price: '₹50 / kg', img: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/CarrotDiversityLg.jpg' },
    { name: 'Banana', price: '₹60 / dozen', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg' },
  ]

  const handleOrder = (itemName) => {
    setSelectedItem(itemName)
    setShowForm(true)
  }

  const sendWhatsApp = () => {
    const message = `New Order from AnnaDhatha Bazaar%0A%0AItem: ${selectedItem}%0AName: ${customerName}%0APhone: ${customerPhone}%0AAddress: ${customerAddress}`
    window.open(`https://wa.me/917816083579?text=${message}`)
    setShowForm(false)
  }

  return (
    <div style={{ fontFamily: 'Arial', background: '#f5f5f5', minHeight: '100vh' }}>

      {/* HEADER */}
      <div style={{ background: 'green', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🌾 AnnaDhatha Bazaar</h2>
        <p style={{ margin: 0, fontSize: '16px' }}>📞 Call: 78160 83579</p>
      </div>

      {/* PRODUCTS GRID */}
      <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Fresh Vegetables Direct from Farmers</h1>
        <p style={{ textAlign: 'center', color: 'gray' }}>Raithula nundi direct ga, no middlemen</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {products.map((product) => (
            <div key={product.name} style={{ background: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
              <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
              <p style={{ color: 'green', fontWeight: 'bold', fontSize: '18px' }}>{product.price}</p>
              <button
                onClick={() => handleOrder(product.name)}
                style={{ padding: '10px 20px', background: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PHONE + ADDRESS FORM POPUP */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: 'white', padding: '25px', borderRadius: '10px', width: '350px' }}>
            <h3>Order: {selectedItem}</h3>
            <input
              type="text"
              placeholder="Mee Peru"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px' }} />
            <input
              type="text"
              placeholder="Phone Number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px' }} />
            <textarea
              placeholder="Delivery Address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              style={{ width: '100%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>

            <button
              onClick={sendWhatsApp}
              style={{ width: '100%', padding: '12px', background: 'green', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
              WhatsApp lo Order Pampu
            </button>
            <button
              onClick={() => setShowForm(false)}
              style={{ width: '100%', padding: '12px', background: 'red', color: 'white', border: 'none', borderRadius: '5px', marginTop: '5px', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
