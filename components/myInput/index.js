import React, { useState } from 'react'
import styles from './myInput.module.css'

export default function MyInputComponent() {

  const [error, setError] = useState(false)

  return (
    <div className={`${styles.myInput} ${error && styles}`}>
      salom dostlar
    </div>
  )
}
