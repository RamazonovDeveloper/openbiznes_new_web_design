import React, { useState } from 'react'
import styles from './myInput.module.css'

export default function InputComponent({children, error}) {

  return (
    <div className={`${styles.myInput} ${error && styles.myInput_invalid}`}>
      {children}
    </div>
  )
}
