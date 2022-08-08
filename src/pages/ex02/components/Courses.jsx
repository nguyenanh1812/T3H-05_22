import React, { useState } from "react";
import { data } from "../../../constants";
import ItemCourse from "./ItemCourse";

const listCourse = data.map((el, index) => ({
  ...el,
  id: index + 1,
  checkPay: false,
}));

export default function Courses({ setListCourse }) {
  const [courses, setCourses] = useState([...listCourse]);

  // const [arrValueCheck, setArrValueCheck] = useState(
  //   listCourse.map((elm) => {
  //     return { value: elm.opt[0].value, checkPay: false };
  //   })
  // );

  const btnCheckBox = (index, checked) => {
    courses[index] = {
      ...courses[index],
      checkPay: checked,
    };
    setListCourse(courses.filter((i) => i.checkPay));

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

      {courses.map((el) => (
        <ItemCourse key={el.id} inforCourse={el} btnCheckBox={btnCheckBox} />
      ))}
    </div>
  );
}
