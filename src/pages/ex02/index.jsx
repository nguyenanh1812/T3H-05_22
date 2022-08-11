import React from "react";
import { useState } from "react";
import { data } from "../../constants";
import Courses from "./components/Courses";
import TotalMoney from "./components/TotalMoney";
//bt 02
export default function CoursesContainer() {
  const [listCourse, setListCourse] = useState([]);
  const [listCourseSelect, setListCourseSelect] = useState(
    data.map((elm) => {
      return {
        priceSelect: elm.opt[0].price,
        priceDiscoutSelect: elm.opt[0].priceDiscount,
        percenSeclect: elm.opt[0].percentDiscount,
        selectCheck: false
      }
    })
  );
  return (
    <div>
      <Courses setListCourse={setListCourse} listCourseSelect={listCourseSelect}/>
      <TotalMoney listCourseSelect={listCourseSelect}/>
    </div>
  );
}

//Có 2 component: Courses và TotalMoney
