import React from 'react'
import styles from './Container.module.css'
export default function Content({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
