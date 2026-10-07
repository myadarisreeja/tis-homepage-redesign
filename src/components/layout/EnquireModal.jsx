import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Mail, MapPin, Phone, X } from 'lucide-react'
import { CLASSES, SITE, STATES } from '../../data/content'
import Button from '../ui/Button'
import SafeImage from '../ui/SafeImage'
import styles from './EnquireModal.module.css'

const EMPTY = { name: '', email: '', phone: '', otp: '', className: '', state: '', consent: false }
const PHONE_RE = /^[6-9]\d{9}$/

function validate(v, verified) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter the parent or guardian name.'
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!PHONE_RE.test(v.phone)) e.phone = 'Enter a valid 10-digit mobile number.'
  else if (!verified) e.otp = 'Verify your mobile number with the OTP.'
  if (!v.className) e.className = 'Select a class.'
  if (!v.state) e.state = 'Select a state.'
  if (!v.consent) e.consent = 'Please agree to be contacted.'
  return e
}

export default function EnquireModal({ open, onClose }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [otpState, setOtpState] = useState('idle') // idle | sent | verified
  const [sent, setSent] = useState(false)
  const opener = useRef(null)

  // Esc to close, lock scroll, and give focus back to the button that opened the dialog.
  useEffect(() => {
    if (!open) return undefined
    opener.current = document.activeElement
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
      opener.current?.focus?.()
    }
  }, [open, onClose])

  const update = (field) => (e) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    if (field === 'phone' || field === 'otp') value = value.replace(/\D/g, '').slice(0, field === 'phone' ? 10 : 6)
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }))
    if (field === 'phone' && otpState !== 'idle') setOtpState('idle')
  }

  // UI-only OTP flow: wire sendOtp / verifyOtp to your SMS provider.
  const sendOtp = () => setOtpState('sent')
  const verifyOtp = () => {
    if (values.otp.length >= 4) setOtpState('verified')
    else setErrors((p) => ({ ...p, otp: 'Enter the OTP you received.' }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values, otpState === 'verified')
    setErrors(found)
    if (Object.keys(found).length === 0) setSent(true)
  }

  const close = () => {
    onClose()
    window.setTimeout(() => { setValues(EMPTY); setErrors({}); setOtpState('idle'); setSent(false) }, 300)
  }

  const err = (id) => errors[id] && <p id={`${id}-error`} className={styles.error} role="alert">{errors[id]}</p>
  const aria = (id) => ({ 'aria-invalid': Boolean(errors[id]), 'aria-describedby': errors[id] ? `${id}-error` : undefined })

  return (
    <AnimatePresence>
      {open && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ '--campus': `url(${SITE.campusPhoto})` }}>
          <button type="button" className={styles.scrim} onClick={close} aria-label="Close enquiry form" tabIndex={-1} />
          <motion.div
            className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="enquire-title"
            initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button type="button" className={styles.close} onClick={close} aria-label="Close" autoFocus><X size={20} aria-hidden="true" /></button>

            <aside className={styles.contact}>
              <h3>Contact Us</h3>
              <address>
                <p><Phone size={16} aria-hidden="true" /><a href={SITE.helplineHref}>Admission Helpline No. {SITE.helpline}</a></p>
                <p><Mail size={16} aria-hidden="true" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                <p><MapPin size={16} aria-hidden="true" /><a href={SITE.mapUrl} target="_blank" rel="noreferrer">{SITE.address}</a></p>
                <p><Phone size={16} aria-hidden="true" /><span>Landline No. {SITE.landlines.map((l) => l.label).join(', ')}</span></p>
              </address>
              <SafeImage src={SITE.logo} alt={SITE.name} fallback="TIS" className={styles.logo} />
            </aside>

            <div className={styles.formPane}>
              <h2 id="enquire-title">Enquire Now!</h2>
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.div key="done" className={styles.done} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <span className={styles.check}><Check size={32} aria-hidden="true" /></span>
                    <h3>Thank you, {values.name.trim().split(' ')[0]}!</h3>
                    <p>Your enquiry for {values.className} is in. We will contact you on +91 {values.phone}.</p>
                    <Button variant="dark" onClick={close}>Close</Button>
                  </motion.div>
                ) : (
                  <motion.form key="form" className={styles.form} onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="enq-name">Name</label>
                        <input id="enq-name" type="text" autoComplete="name" value={values.name} onChange={update('name')} {...aria('name')} />
                        {err('name')}
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="enq-email">Email (optional)</label>
                        <input id="enq-email" type="email" autoComplete="email" value={values.email} onChange={update('email')} {...aria('email')} />
                        {err('email')}
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="enq-phone">Mobile number</label>
                      <div className={styles.inline}>
                        <span className={styles.code} aria-hidden="true">+91</span>
                        <input id="enq-phone" type="tel" inputMode="numeric" autoComplete="tel-national" value={values.phone} onChange={update('phone')} {...aria('phone')} />
                        <Button variant="dark" className={styles.small} onClick={sendOtp} disabled={!PHONE_RE.test(values.phone) || otpState === 'verified'}>
                          {otpState === 'sent' ? 'Resend OTP' : 'Send OTP'}
                        </Button>
                      </div>
                      {err('phone')}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="enq-otp">OTP</label>
                      <div className={styles.inline}>
                        <input id="enq-otp" type="text" inputMode="numeric" autoComplete="one-time-code" value={values.otp} onChange={update('otp')} disabled={otpState === 'idle'} {...aria('otp')} />
                        <Button variant="dark" className={styles.small} onClick={verifyOtp} disabled={otpState !== 'sent'}>
                          {otpState === 'verified' ? 'Verified ✓' : 'Verify OTP'}
                        </Button>
                      </div>
                      {err('otp')}
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="enq-class">Class</label>
                        <select id="enq-class" value={values.className} onChange={update('className')} {...aria('className')}>
                          <option value="">Select Class</option>
                          {CLASSES.map((c) => <option key={c}>{c}</option>)}
                        </select>
                        {err('className')}
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="enq-state">State</label>
                        <select id="enq-state" value={values.state} onChange={update('state')} autoComplete="address-level1" {...aria('state')}>
                          <option value="">Select State</option>
                          {STATES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                        {err('state')}
                      </div>
                    </div>

                    <div className={styles.consent}>
                      <label>
                        <input type="checkbox" checked={values.consent} onChange={update('consent')} {...aria('consent')} />
                        <span>I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun</span>
                      </label>
                      {err('consent')}
                    </div>

                    <Button type="submit" variant="dark" className={styles.submit}>Enquire Now</Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
