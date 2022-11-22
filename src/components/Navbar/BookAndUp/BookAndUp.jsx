import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUp } from 'react-icons/bs';
import styles from './BookAndUp.module.css'

export default function BookAndUp({scrollActive}) {
  const handleUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className={scrollActive ? styles.book : `${styles.book} ${styles.bookHidden}`}>
      <Link  to={'/'} className={styles.bookLink}>
        예매하기
      </Link>
      <button type='button' onClick={handleUp} className={styles.up}>
      <BsArrowUp  className={styles.icon}/>
      </button>
    </div>
  )
}
