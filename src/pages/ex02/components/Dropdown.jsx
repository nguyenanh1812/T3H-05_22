import React from "react";

export const Dropdown = ({ inforCourse, selectValue,index }) => {
  return (
    <div className=''>
      <select className='w-75 p-2 form-control' style={{ fontWeight: "700" }} onChange={(e)=>selectValue(e,index)}>
        {inforCourse.opt.map((item,index) => {
          return (
            <option key={index} value={`${item.price} ${item.priceDiscount} ${item.percentDiscount}`}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
