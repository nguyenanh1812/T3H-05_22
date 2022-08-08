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

import React from 'react';
import "../../../App.css";
import { data } from "../../../constants";

function TotalMoney({data}) {
  
  return (

    <div className='total-containt'>
      <div className="top">
        <div className="sub-total">Sub Total</div>
        <div className='price'>$ 2.654</div>
        <div className="priceDiscout">-$2.233</div>
      </div>
      <div className="bottom">
        <div className="total-amount">TOTAL AMOUNT</div>
        <div className="resuilt-total">$2.654</div>
      </div>
    </div>

    <div></div>

  )

}
export default TotalMoney;
