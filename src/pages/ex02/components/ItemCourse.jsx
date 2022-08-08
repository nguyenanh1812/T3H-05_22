import React from "react";
import { Dropdown } from "./Dropdown";

export default function ItemCourse({ key, inforCourse, setPrice }) {
  return (
    <div>
      <Dropdown inforCourse={inforCourse} setPrice={setPrice} />
    </div>
  );
}
