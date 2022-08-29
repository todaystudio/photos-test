import React from 'react'
import s from './button.module.scss'

const Button = ({ children }) => {
	return <button className={s.btn}>{children}</button>
}

export { Button }
