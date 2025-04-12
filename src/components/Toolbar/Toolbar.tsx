import './Toolbar.sass';

import CustomButton from '@components/CustomButton';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const availableLanguages = [
    { code: "fr", label: "🇫🇷 French" },
    { code: "ua", label: "🇺🇦 Ukrainian" },
    { code: "es", label: "🇪🇸 Spanish" },
  ];

const Toolbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(availableLanguages[0].code);

    return (
        <nav className='toolbar'>
            <div className='langSwitcher'>
                <label>Learning:</label>
                <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    {availableLanguages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className='toolbarOptions'>
                <Link to="/words">
                    <CustomButton variant="primary" size="lg">Words Book</CustomButton>
                </Link>
                <Link to="/progress">
                    <CustomButton variant="primary" size="lg">Progress</CustomButton>
                </Link>
                <Link to="/guides">
                    <CustomButton variant="primary" size="lg">Guides</CustomButton>
                </Link>
            </div>
        </nav>
    )
}

export default Toolbar;