import React from 'react'
import CheckBox from './CheckBox'

export default function ItemCourse({inforCourse,btnCheckBox}) {
  return (
    <CheckBox elm={inforCourse} btnCheckBox={btnCheckBox}/>
  )
}

