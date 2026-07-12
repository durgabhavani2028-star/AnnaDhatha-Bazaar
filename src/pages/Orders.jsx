 
import { useEffect, useState } from "react";
import { getOrders } from "../services/api";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  return (
    <div>
      <h2>Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <h4>Order #{order.id}</h4>

            <p>
              Customer:
              {" "}
              {order.customer}
            </p>

            <p>
              Total:
              {" "}
              ₹{order.total}
            </p>

            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Order;