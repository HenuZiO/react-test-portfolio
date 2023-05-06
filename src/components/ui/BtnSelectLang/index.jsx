import { useContext } from 'react'
import { LangContext } from '../../../App'

import './BtnSelectLang.css'

const BtnSelectLang = () => {
	const { changeLanguage } = useContext(LangContext)
	return (
		<div className='select-lang'>
			<button onClick={() => changeLanguage('en')}>EN</button>
			<button onClick={() => changeLanguage('ru')}>RU</button>
		</div>
	)
}

export default BtnSelectLang
