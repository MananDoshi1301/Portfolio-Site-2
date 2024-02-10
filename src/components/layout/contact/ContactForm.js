import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext';
import './ContactForm.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactForm = () => {

    const data = useContext(DataContext);
    const contact_data = data.contact_form;

    const personal_description = contact_data.personal_description;

    const linkRedirect = link => {
        window.open(link, '_blank');
    }

    return (
        <div className='container-fluid contact-form'>
            <div className="contact-form-email-title text-end text-wrap">
                <div className="row">
                    <div className="col-lg-12 contact-form-email-link">
                        <a href={`mailto:${contact_data.display_email}`} className='text-reset' target='_blank' rel='noreferrer'>
                            {contact_data.display_email.split("@")[0]}<br />@{contact_data.display_email.split("@")[1]}
                        </a>
                    </div>
                </div>
            </div>


            <div className="contact-form-content">
                <span className='contact-form-content-hi'>Say Hi!<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></span><br />
                {personal_description}
            </div>


            <div className="contact-form-divider d-flex justify-content-center"><div></div></div>


            <div className="row contact-form-row text-center">

                {
                    contact_data.social_links.map((item, key) => (
                        <div key={key} className={`col-lg-${12 / contact_data.social_links.length} connect-icon-wrap connect-icon-effect-7 connect-icon-effect-7b connect-icon-effect-${item.keyword}`}>
                            <span className='connect-icon' onClick={() => linkRedirect(item.link)}><i className={`${item.icon_name}`}></i></span>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ContactForm
