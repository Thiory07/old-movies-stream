import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LanguagePicker from '../LanguagePicker/LanguagePicker';

export default function Header() {
 const { t, i18n } = useTranslation();
 return ( 
 <header>

  <h1>{t('my_header')} </h1>
  
  <LanguagePicker></LanguagePicker>
 </header>)
}