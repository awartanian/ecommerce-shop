import React from "react";
import ShippingData from "./ShippingData";

function ShippingTable() {
  const renderDelivery = ShippingData.map((delivery) => {
    const { Country, Delivery, id } = delivery;

    return (
      <tbody key={id}>
      <tr >
        <th>{Country}</th>
        <th>{Delivery}</th>
      </tr>
      </tbody>
    );
  });
  return <>{renderDelivery}</>;
}

export default ShippingTable;
