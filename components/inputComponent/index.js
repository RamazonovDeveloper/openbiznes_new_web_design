import React, { useState } from 'react'
import styles from './myInput.module.css'

export default function InputComponent({children, error, placeholder}) {

  return (
    <input type='text' className={`${styles.myInput} ${error && styles.myInput_invalid}`} placeholder={placeholder}>
      {children}
    </input>
  )
}
