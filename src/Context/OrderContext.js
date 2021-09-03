import { getOrders } from "api/Order";
import * as React from "react";

const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = React.useState([]);
  const [pendingOrders, setPendingOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchCustomerOrders() {
      try {
        const res = await getOrders();
        const pendingOrdersRes = filterPendingOrders(res?.data?.data);
        setPendingOrders(pendingOrdersRes);
        setOrders(res?.data?.data);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchCustomerOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        pendingOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  const context = React.useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrderContext can only be used inside UserProvider");
  }
  return context;
}

function filterPendingOrders(orders) {
  let orderList = [];
  for (const order of orders) {
    if (
      order?.status === "pending" ||
      order?.status === "accepted" ||
      order?.status === "assigned" ||
      order?.status === "pickedUp" ||
      order?.status === "requested"
    ) {
      orderList.push(order);
    }
  }
  return orderList;
}
