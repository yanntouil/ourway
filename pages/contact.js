import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import emailjs from '@emailjs/browser'
import { contactSelector, translationSelector } from 'app/reducers'
import { useInterval, useTranslation } from 'app/hooks'
import config from 'app/config'
import { mailRegex } from 'app/helpers'
// Components
import Main from 'components/layout/Main'
import TextAnimated1 from 'components/ui/TextAnimated1'
import Section, {  SectionTitle } from 'components/ui/Section'
import Alert, { AlertContent, AlertContentIcon, AlertContentTitle } from 'components/ui/Alert'
import { Blockquote } from 'components/ui/Typography'
import { Button } from 'components/ui/Button'
// Images
import ContactSvg from 'assets/images/contact.svg'
import coverImg from 'assets/images/privacy-policy/cover.jpg'
// Icons
import CheckIcon from 'assets/images/icons/light/check.svg'
import WhistleIcon from 'assets/images/icons/light/whistle.svg'
import PaperPlaneIcon from 'assets/images/icons/light/paper-plane.svg'
import ExclamationTriangleIcon from 'assets/images/icons/light/exclamation-triangle.svg'
import StopwatchIcon from 'assets/images/icons/light/stopwatch.svg'

/**
 * Contact page
 */
export default function Contact() {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageContact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])
    const { contactMailLock } = useSelector(contactSelector)

    /** @type {Object} initial contact form */
    const initialContactForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    /** @state contact form */
    const [ contactForm, setContactForm ] = useState(initialContactForm)

    /** @state backup form */
    const [ backupForm, setBakupForm ] = useState({})

    /** @state modal display on error */
    const [ modalError, setModalError ] = useState(false)

    /** @state modal display on message sent */
    const [ modalSent, setModalSent ] = useState(false)

    /** @state modal display on validation error */
    const [ modalValidation, setModalValidation ] = useState(false)

    /** @state modal display on message lock by timer */
    const [ modalMessageLock, setModalMessageLock ] = useState(false)

    /** @state messageLocktimer */
    const [ messageLocktimer, setMessageLocktimer] = useState(0)

    /** @setInterval Update message lock timer */
    useInterval(() => {
        const timer = contactMailLock ? ((new Date()).getTime() - contactMailLock.getTime()) / 1000 : false
        if (timer && timer < config.contact.timeBeforeNewMessage) setMessageLocktimer(Math.floor(config.contact.timeBeforeNewMessage - timer))
    }, 1000)

    /** @useEffect EmailJS init */
    useEffect(() => config.emailJS.init(), [])

    /**
     * Handle contact form submit
     * @param {SyntheticBaseEvent} e
     */
    const sendEmail = (e) => {
        e.preventDefault()
        // Form validation (valid email, name > 2, message > 2)
        const errors = 0
        if (!contactForm.email.trim().match(mailRegex)) errors++
        if (contactForm.name.trim().length < 2) errors++
        if (contactForm.message.trim().length < 2) errors++
        if (errors > 0) return setModalValidation(true)
        // Message lock
        if (messageLocktimer) return setModalMessageLock(true)
        // Send mail
        setBakupForm(contactForm)
        emailjs.send(config.emailJS.serviceId, config.emailJS.templateId, {
            senderName: contactForm.name.trim(),
            senderEmail: contactForm.email.trim(),
            senderPhone: contactForm.phone.trim(),
            senderMessage: contactForm.message.trim(),
        })
        .then(
            () => {// Mail done
                setModalSent(true)
                setContactForm(initialContactForm)
                dispatch({type: 'contact/lockMail'})
            },
            () => setModalError(true)// Mail error
        )
    }

    /**
     * Render
     */
    return (
        <>
            <NextSeo
                openGraph={{
                    title: `${config.sitename} | ${__('page-title')}`,
                    description: __('page-description'),
                    images: [{url: `${config.siteurl}/images/portfolio/opengraph.jpg`, width: 1200, height: 630, alt: __('page-title') }]
                }}
            />
            <Main className="overflow-hidden" noPaddingX>
                <section id="contact">
                    {/* <div className="relative h-80">
                        <Image 
                                src={coverImg} 
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                                alt={__('title')} 
                            />
                    </div> */}
                    <div className="flex flex-col justify-center w-full max-w-7xl px-4 sm:px-8 lg:px-16 pt-16 mx-auto">
                        {/* Header */}
                        <SectionTitle heading={1}>{__('title')} <TextAnimated1 sentences={[__('highlight-1'), __('highlight-2'), __('highlight-3')]} /></SectionTitle>
                        {/* Content */}
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact form */}
                            <form className="order-2 lg:order-1 flex flex-col gap-4" onSubmit={sendEmail}>
                                <h2 className="text-2xl ">{__('contact-form.title')}</h2>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="contactName" className="font-medium">{__('contact-form.name')}</label>
                                    <input type="text" name="fullname" id="contactName" className="px-4 py-2 rounded border border-secondary-600 text-secondary-800 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-500" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="contactName" className="font-medium">{__('contact-form.email')}</label>
                                    <input type="email" name="email" id="contactName" className="px-4 py-2 rounded border border-secondary-600 text-secondary-800 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-500" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="contactName" className="font-medium">{__('contact-form.phone')}</label>
                                    <input type="tel" name="phone" id="contactName" className="px-4 py-2 rounded border border-secondary-600 text-secondary-800 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-500" value={contactForm.phone} onChange={(e) => setContactForm({...contactForm, phone: e.target.value})} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="contactName" className="font-medium">{__('contact-form.message')}</label>
                                    <textarea name="message" id="contactName" rows="3" className="px-4 py-2 rounded border border-secondary-600 text-secondary-800 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-500 resize-none"  value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} />
                                </div>
                                <div>
                                    <Button type="submit" className="w-full">{__('contact-form.submit')}</Button>
                                </div>
                            </form>
                            {/* Contact image */}
                            <div  className="order-1 lg:order-2 flex items-center justify-center">
                                <ContactSvg />
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
            {/* Modal sent */}
            <Alert show={modalSent} setShow={setModalSent}>
                <AlertContent>
                    <AlertContentIcon>
                        <PaperPlaneIcon className="w-16 h-16 -ml-1 mr-1 fill-current" />
                    </AlertContentIcon>
                    <AlertContentTitle>{__('modal-sent.title')}</AlertContentTitle>
                    <p>{__('modal-sent.content')}</p>
                    <Blockquote>
                        <ul>
                            <li><span className="font-medium text-black dark:text-white">{__('contact-form.name')} :</span> {backupForm.name}</li>
                            <li><span className="font-medium text-black dark:text-white">{__('contact-form.email')} :</span> {backupForm.email}</li>
                            <li><span className="font-medium text-black dark:text-white">{__('contact-form.phone')} :</span> {backupForm.phone}</li>
                            <li><span className="font-medium text-black dark:text-white">{__('contact-form.message')} :</span><br/>{backupForm.message}</li>
                        </ul>
                    </Blockquote>
                    <div className="flex flex-row-reverse pb-4">
                        <Button type="button" onClick={() => setModalSent(false)}>{__('modal-sent.button-close')}</Button>
                    </div>
                </AlertContent>
            </Alert>
            {/* Modal sent error */}
            <Alert show={modalError} setShow={setModalError}>
                <AlertContent>
                    <AlertContentIcon color="red">
                        <ExclamationTriangleIcon className="w-16 h-16 -mt-1 mb-1 fill-current" />
                    </AlertContentIcon>
                    <AlertContentTitle>{__('modal-sent-error.title')}</AlertContentTitle>
                    <p>{__('modal-sent-error.content')} <a href={`mailto:${config.author.email}`} className='font-medium underline'>{config.author.email}</a>.</p>
                    <div className="flex flex-row-reverse pb-4">
                        <Button type="button" onClick={() => setModalError(false)}>{__('modal-sent-error.button-close')}</Button>
                    </div>
                </AlertContent>
            </Alert>
            {/* Modal validation */}
            <Alert show={modalValidation} setShow={setModalValidation}>
                <AlertContent>
                    <AlertContentIcon color="orange">
                        <WhistleIcon className="w-16 h-16 fill-current" />
                    </AlertContentIcon>
                    <AlertContentTitle>{__('modal-validation.title')}</AlertContentTitle>
                    <p>{__('modal-validation.content')}</p>
                    <div className="flex flex-row-reverse pb-4">
                        <Button type="button" onClick={() => setModalValidation(false)}>{__('modal-validation.button-close')}</Button>
                    </div>
                </AlertContent>
            </Alert>
            {/* Modal validation */}
            <Alert show={modalMessageLock} setShow={setModalMessageLock}>
                <AlertContent>
                    <AlertContentIcon color={messageLocktimer ? 'orange' : 'lime'}>
                        {messageLocktimer ? 
                            (<StopwatchIcon className="w-16 h-16 fill-current" />) : 
                            (<CheckIcon className="w-16 h-16 fill-current" />)
                        }
                    </AlertContentIcon>
                    <AlertContentTitle>
                        {messageLocktimer ? 
                            __('modal-message-lock.title') : 
                            __('modal-message-lock.title-unlock')
                        }
                    </AlertContentTitle>
                    <p>
                        {messageLocktimer ? 
                            `${__('modal-message-lock.content')} ${messageLocktimer > 60 ? 
                                `${Math.floor(messageLocktimer / 60)} min` : 
                                `${messageLocktimer} s` }` : 
                            __('modal-message-lock.content-unlock')
                        }
                    </p>
                    <div className="flex flex-row-reverse pb-4">
                        <Button type="button" onClick={() => setModalMessageLock(false)}>{__('modal-message-lock.button-close')}</Button>
                    </div>
                </AlertContent>
            </Alert>
        </>
    )
}














