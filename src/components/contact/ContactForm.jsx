import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        message: ''
    });

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleValidation = () => {
        let errors = {};
        let isValid = true;

        if (!formData.email) {
            errors.email = 'This field is required';
            isValid = false;
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'This field must contain a valid email';
            isValid = false;
        }

        if (!formData.message) {
            errors.message = 'This field is required';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };
    
    /* Using EmailJS Service to send mail */
    const emailjs_serviceId = 'service_0wkd274';
	const emailjs_templateId = 'template_3c0qcur';
	const emailjs_publicKey = 'NEznchN9YJ9QuU-nr';

    let emailjs_templateParams = {
		sender_name: formData.fullName,
		sender_email: formData.email,
		subject: formData.subject,
		message: formData.message
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            // All checks passed, proceed with sending message
            console.log('Sending message:', formData);

            emailjs.send(emailjs_serviceId, emailjs_templateId, emailjs_templateParams, emailjs_publicKey)
                .then((response) => {
                    console.log('Email sent successfully:', response);

                    setFormData({
                        fullName: '',
                        email: '',
                        subject: '',
                        message: ''
                    });

                    alert("Message sent successfully!");
                })
                .catch((error) => {
                    console.error('Error sending email:', error);

                    alert("Unable to send your message. Please try again, or you can email me directly.");
                });
        } else {
            console.log('Form has errors, cannot send message');
        }
    };

    return (
        <div className='w-full lg:w-1/2'>
            <div className='leading-loose'>
            <form 
                onSubmit={handleSubmit}
                className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
            >
                <div className="font-general-regular mb-4">
                    <label 
                        className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                        htmlFor='name'
                    >
                        Full Name
                    </label>
                    <input 
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        type="text"
                        id ="name"
                        name="name"
                        aria-label="Name"
                        value={formData.fullName} 
                        onChange={(e) => handleInputChange('fullName', e.target.value)} 
                    />
                </div>
                <div className="font-general-regular mb-4">
                    <label 
                        className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                        htmlFor='email'
                    >
                        Email *
                    </label>
                    <input 
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        type="text"
                        id ="email"
                        name="email"
                        aria-label="Email"
                        value={formData.email} 
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {formErrors.email && <span className="text-sm text-primary-dark dark:text-primary-light mb-1">{formErrors.email}</span>}
                </div>
                <div className="font-general-regular mb-4">
                    <label 
                        className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                        htmlFor='subject'
                    >
                        Subject
                    </label>
                    <input 
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        type="text"
                        id="subject"
                        name="subject"
                        aria-label="Subject"
                        value={formData.subject} 
                        onChange={(e) => handleInputChange('subject', e.target.value)} 
                    />
                </div>
                <div className="mt-6">
                    <label 
                        className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                        htmlFor="message"
                    >
                        Message *
                    </label>
                    <textarea
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        id="message"
                        name="message"
                        cols="14"
                        rows="6"
                        aria-label="Message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                    ></textarea>
                    {formErrors.message && <span className="text-sm text-primary-dark dark:text-primary-light mb-1">{formErrors.message}</span>}
                </div>

                <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                    <button
                        title="Send Message"
                        type="submit"
                        aria-label="Send Message"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default ContactForm;
