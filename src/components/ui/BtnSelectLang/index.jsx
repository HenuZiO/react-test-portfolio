import { useTranslation } from 'react-i18next'
import './BtnSelectLang.css'

const BtnSelectLang = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className='select-lang'>
			<button onClick={() => changeLanguage('en')}>EN</button>
			<button onClick={() => changeLanguage('ru')}>RU</button>
			<p>{t('text')}</p>
		</div>
	)
}

export default BtnSelectLang
