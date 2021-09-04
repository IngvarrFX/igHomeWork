import React from 'react'
import {PATH} from './Routes'
import {NavLink} from 'react-router-dom';
import styles from './HW5.module.css'

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.breadcrumbs}>
                <span>  <NavLink to={PATH.PRE_JUNIOR} className={styles.link}
                                 activeClassName={styles.active}> pre-junior </NavLink>  </span>
                <span>  <NavLink to={PATH.JUNIOR} className={styles.link}
                                 activeClassName={styles.active}> junior </NavLink>  </span>
                <span>  <NavLink to={PATH.JUNIOR_PLUS} className={styles.link}
                                 activeClassName={styles.active}> junior-plus </NavLink>  </span>
                <span className={styles.square}></span>
            </div>
        </div>
    )
}

export default Header
