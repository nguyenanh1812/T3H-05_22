import React from "react";

export function TotalMoney({ data }) {
  return (
    <div class="col-md-6 d-flex py-5 px-5 justify-content-between">
      {data.map((item, index) => (
        <div key={index}>
          <div class="col-md-5">
            <p>$ {item.price}/month</p>
            <span>({item.percentDiscount} %)</span>
            <br />
            <span>$ {item.priceDiscount}/month</span>
          </div>
          <div class="col-md-5">
            <p>- $ {item.price - item.priceDiscount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
