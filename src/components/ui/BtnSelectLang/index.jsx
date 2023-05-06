import { useContext } from 'react'
import { LangContext } from '../../../App'

import './BtnSelectLang.css'

const BtnSelectLang = () => {
	const { i18n, changeLanguage } = useContext(LangContext)

	const activeLangBtn = 'select-lang--active'

	return (
		<div className='select-lang'>
			<button
				className={i18n.language === 'en' ? activeLangBtn : ''}
				onClick={() => changeLanguage('en')}
			>
				EN
			</button>
			<button
				className={i18n.language === 'ru' ? activeLangBtn : ''}
				onClick={() => changeLanguage('ru')}
			>
				RU
			</button>
		</div>
	)
}

export default BtnSelectLang
