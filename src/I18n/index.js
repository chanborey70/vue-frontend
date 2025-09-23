import { createI18n } from 'vue-i18n'
import en from './local/en'
import km from './local/km'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'km',
    messages: {
        en: en,
        // {

        //         login: 'Login',
        //         register: 'Register',
        //         switch_language: 'Switch Language',
            
        // },
        km: km,
        // {
            
        //         login: 'ចូលក្នុង',
        //         register: 'ចុះឈ្មោះ',
        //         switch_language: 'ប្ដូរភាសា',
        
        // },
    }
})

export default i18n
