import React from "react";
import { useState } from "react";
import Img from "./Img";
// import Input from "./Input";
import CheckBox from "./CheckBox";
import { data } from "../../../constants";
import { Dropdown } from "./Dropdown";

const listCourse = data.map((el, index) => ({
  ...el,
  id: index + 1,
}));

export default function ItemCourse({
  inforCourse,
  setListCourse,
  btnCheckBox
}) {
  // const [isChecked, setIsChecked] = useState(false);
  const [courses, setCourses] = useState([...listCourse]);
  const [index, setIndex] = useState(0);
  const [option, setOption]  =useState({})

  const [arrValueCheck, setArrValueCheck] = useState(
    listCourse.map((elm) => {
      return { value: elm.opt[0].value, checkPay: false };
    })
  );

  const handleCheckbox = (index, e) => {
    btnCheckBox(index, e.target.checked);
    // arrValueCheck[index].checkPay = !arrValueCheck[index].checkPay;
    // setArrValueCheck([...arrValueCheck]);
  };

  const { name, img, opt } = inforCourse;
  const crrItem = opt[index];

  // const { name2, value, price, priceDiscount, percentDiscount } = opt[indexOpt];
  // const setIndexOption = (e) => {
  //   e.stopPropagation();
  //   setIndexOpt(e.target.value);
  //   setIsChecked(!true);
  // };

  // const handleUnchecked = () => {
  //   setIsChecked(!isChecked);
  // };
  const handleOptChange= (e)=> {
    console.log(e.target.value);
    const value =inforCourse.opt.find(opt => opt.value == e.target.value)
    console.log(value);
    setOption(
      value
    )
  }

  return (
    <div className='container my-3 border border-3 rounded p-2'>
      <div
        className='row d-flex align-items-center'
        style={{ cursor: "pointer" }}
      >
        <div className='col-6 d-flex align-items-center row'>
          <div className='col-2'>
            <CheckBox elm={inforCourse} handleCheckbox={handleCheckbox} />
          </div>
          <div className='col-5'>
            <Img src={img} />
          </div>
          <div className='col-5 d-flex flex-column justify-content-start'>
            <div className='text-start'>{name}</div>
            <div className='text-start'>{option.name || crrItem.name}</div>
            <div className='text-start w-100'>
              <Dropdown inforCourse={inforCourse}  handleOptChange={handleOptChange}/>
            </div>
          </div>
        </div>
        <div className='col-6 row d-flex align-items-center'>
          <div className='col-6'>
            <div className='fs-4'>${option.priceDiscount || crrItem.priceDiscount} /month</div>
            <div className='text-success'>( %{option.percenDiscount || crrItem.percenDiscount} off)</div>
            <div className='text-decoration-line-through'>
              $ {option.price || crrItem.price}/month
            </div>
          </div>
          <div className='col-6 fs-5 text-success'>
            - $ {(option.price - option.priceDiscount) || crrItem.price - crrItem.priceDiscount}
          </div>
        </div>
      </div>
    </div>
  );
}
