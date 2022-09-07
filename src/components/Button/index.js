import React, { Children } from 'react'
import style from './style.module.css'


export default function Button({children}){
    return <button className={style.btn}>{children}</button>
};