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
  )
}
export default TotalMoney;
