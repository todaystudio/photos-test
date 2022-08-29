import React from 'react'
import s from './header.module.scss'
import headerBg from '../../assets/images/headerBg.png'
import avatar from '../../assets/images/avatar.png'
import { Button } from '../../ui/Button/Button'
import { GlobalSVGGenerator } from '../../assets/GlobalSVGGenerator/GlobalSVGGenerator'

const Header = () => {
	return (
		<div className={s.header} style={{ backgroundImage: `url(${headerBg})` }}>
			<div className={s.container}>
				<div className={s.user}>
					<div className={s.avatar}>
						<img src={avatar} alt='avatar' />
					</div>
					<div className={s.userName}>Ricardo Cooper</div>
				</div>
				<div className={s.btnsGroup}>
					<Button>
						<GlobalSVGGenerator icon={'message'} />
						Message
					</Button>
					<Button>
						<GlobalSVGGenerator icon={'call'} />
						Call
					</Button>
				</div>
			</div>
		</div>
	)
}

export { Header }
