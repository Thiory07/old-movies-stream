import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function LanguagePicker() {
 return ( 
    <aside>
        <button onClick={() => i18next.changeLanguage('en-US')}>en-US</button>
        <button onClick={() => i18next.changeLanguage('pt-BR')}>pt-BR</button>
    </aside>
 )
}