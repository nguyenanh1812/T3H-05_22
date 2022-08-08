import React from "react";

export const Dropdown = ({ inforCourse, setPrice }) => {
  return (
    <div className="">
      <select className="w-25 p-2" style={{ fontWeight: "700" }}>
        {inforCourse.opt.map((item) => {
          return (
            <option value={item.name} onClick={setPrice}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
