import React, { useState } from "react";
import OrderIdContext from "./OrderIdContext";  

const OrderIdContextProvider = ({children}) => {
  const [orderId,setOrderId] = useState(null)
  
  return(
    <OrderIdContext.Provider value={{orderId,setOrderId}}>
    {children}
    </OrderIdContext.Provider>
  )

}

export default OrderIdContextProvider