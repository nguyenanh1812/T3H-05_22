import React from "react";

export default function CheckBox({ elm, handleCheckbox }) {
  return (
    <div>
      <input
        type={"checkbox"}
        onClick={(event) => handleCheckbox(elm.id - 1, event)}
      />
    </div>
  );
}
