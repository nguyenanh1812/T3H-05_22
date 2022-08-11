import React, { useState } from "react";
import { data } from "../../../constants";
import ItemCourse from "./ItemCourse";

const listCourse = data.map((el, index) => ({
  ...el,
  id: index + 1,
  checkPay: false,
}));

export default function Courses({ setListCourse,listCourseSelect }) {
  const [courses, setCourses] = useState([...listCourse]);

  // const [arrValueCheck, setArrValueCheck] = useState(
  //   listCourse.map((elm) => {
  //     return { value: elm.opt[0].value, checkPay: false };
  //   })
  // );
  const selectValue = (e,index)=>{
    listCourseSelect[index].priceSelect  = (e.target.value).split(' ')[0];
    listCourseSelect[index].priceDiscountSelect  = (e.target.value).split(' ')[1];
    listCourseSelect[index].percenSelect  = (e.target.value).split(' ')[2];
    setListCourse(listCourseSelect.filter((i) => i.selectCheck));
    console.log(listCourseSelect)
  }

  const btnCheckBox = (index) => {
    listCourseSelect[index] = {
      ...listCourseSelect[index],
      selectCheck: !listCourseSelect[index].selectCheck,
    };
    setListCourse(listCourseSelect.filter((i) => i.selectCheck));
    console.log(listCourseSelect)

    // arrValueCheck[index].checkPay = !arrValueCheck[index].checkPay;
    // setArrValueCheck([...arrValueCheck]);
    // setListCourse((prev) => [
    //   ...prev,
    //   {
    //     index: index,
    //   },
    // ]);
  };
  return (
    <div>
      {/* {courses.map((el) => (
        <ItemCourse key={el.id} inforCourse={el} />
      ))} */}

      {courses.map((el,index) => (
        <ItemCourse key={el.id} inforCourse={el} btnCheckBox={btnCheckBox} selectValue={selectValue} id={index}/>
      ))}
    </div>
  );
}
