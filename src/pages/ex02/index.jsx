import React from "react";
import { useState } from "react";
import Courses from "./components/Courses";
import TotalMoney from "./components/TotalMoney";
//bt 02
export default function CoursesContainer() {
  const [listCourse, setListCourse] = useState([]);
  console.log(listCourse);
  return (
    <div>
      <Courses setListCourse={setListCourse} />
      <TotalMoney />
    </div>
  );
}

//Có 2 component: Courses và TotalMoney
