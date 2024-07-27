import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
    return (
        <div className={styles.cap}>
            <ul>
                <li><NavLink to={'/'}>Auth page</NavLink></li>
                <li><NavLink to={'/registration'}>Registration page</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;