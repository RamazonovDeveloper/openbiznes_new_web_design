import React, { Children } from 'react'
import styles from './myCard.module.css'

export default function MyCardComponent({children}) {
  return (
    <div className={styles.my_card}>
        {children}
    </div>
  )
}
