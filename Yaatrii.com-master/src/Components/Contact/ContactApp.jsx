import React from 'react'
import './ContactForm.css'
import SupportSection from './SupportSection'
import FAQ from './FAQ'
import ContactForm from './ContactForm'
import SocialMediaArticles from './SocialMediaArticles'

const ContactApp = () => {
  return (
    <div>
      <SupportSection/>
      <FAQ/>
      <ContactForm/>
      <SocialMediaArticles/>
      <footer>
        <p>&copy; Yaatrii.Com</p>
      </footer>
    </div>
  )
}

export default ContactApp
