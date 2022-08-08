import React from 'react'

export default function CheckBox({ elm, btnCheckBox }) {
  return (
    <div>
      <input type={'checkbox'} onClick={() => btnCheckBox(elm.id-1)} />
    </div>
  )
}
