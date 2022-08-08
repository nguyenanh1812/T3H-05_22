import React from "react";

export function TotalMoney({ data }) {
  return (
    <div class="col-md-6 d-flex py-5 px-5 justify-content-between">
      {data.map((item, index) => (
        <div key={index}>
          <div class="col-md-5">
            <p>$ {item.opt.price}/month</p>
            <span>({item.opt.percentDiscount} %)</span>
            <br />
            <span>$ {item.opt.priceDiscount}/month</span>
          </div>
          <div class="col-md-5">
            <p>- $ {item.opt.price - item.opt.priceDiscount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
