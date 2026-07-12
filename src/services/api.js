const API_URL = "http://localhost:5000";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
}

export async function addProduct(product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response.json();
}

export async function getOrders() {
  const response = await fetch(`${API_URL}/orders`);
  return response.json();
}

export async function createOrder(order) {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  return response.json();
}

export async function updateStock(id, stock) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock }),
  });

  return response.json();
}