import React, { useState } from "react";
import { data } from "../../../constants";
import ItemCourse from "./ItemCourse";

const listCourse = data.map((el, index) => ({
  ...el,
  id: index + 1,
}));

export default function Courses() {
  const [courses, setCourses] = useState([...listCourse]);
  const [arrValueCheck, setArrValueCheck] = useState(
    listCourse.map((elm)=>{
      return {value:elm.opt[0].value, checkPay:false}
    }))
  
  const btnCheckBox = (index) =>{
    arrValueCheck[index].checkPay = !(arrValueCheck[index].checkPay)
    setArrValueCheck([...arrValueCheck])

  }
  return (
    <div>

      {/* {courses.map((el) => (
        <ItemCourse key={el.id} inforCourse={el} />
      ))} */}

      {courses.map((el) => (
        <ItemCourse key={el.id} inforCourse={el} btnCheckBox={btnCheckBox}/>
      ))}

    </div>
  );
}

