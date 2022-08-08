import CheckBox from './CheckBox'
import React from "react";
import { Dropdown } from "./Dropdown";

export default function ItemCourse({ key, inforCourse, setPrice, inforCourse , btnCheckBox }) {
  return (
    <div>
      <CheckBox elm={inforCourse} btnCheckBox={btnCheckBox}/>
      <Dropdown inforCourse={inforCourse} setPrice={setPrice} />
    </div>
  );

