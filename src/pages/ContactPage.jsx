import { useState } from 'react'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import Field from '@/components/form/Field'
import Select from '@/components/form/Select'
import Textarea from '@/components/form/Textarea'
import siteData from '@content/site.json'

const SUBJECT_OPTIONS = [
  { value: 'donating', label: 'Donating to EHCO' },
  { value: 'joining', label: 'Joining a programme / Membership' },
  { value: 'partnering', label: 'School or NGO Partnership' },
  { value: 'shop', label: 'Eco Shop Product Inquiry' },
  { value: 'media', label: 'Media & Interview Enquiry' },
  { value: 'other', label: 'Other General Inquiry' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', _honey: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: null }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) errs.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Please enter a message.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form._honey) return
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            subject: form.subject,
            message: form.message,
          }),
        })
      }
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '', _honey: '' })
      setErrors({})
    } catch {
      setStatus('failed')
    }
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Instant Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Priority Card */}
            <div className="bg-[#064D3B] text-white rounded-2xl p-5 border border-[#0B6B52] shadow-sm space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9F15B]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9F15B]">
                  Fastest Response
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Message EHCO on WhatsApp
                </h3>
                <p className="text-xs text-[#D0DFD7] leading-relaxed mt-1">
                  For workshop inquiries, school bookings, or youth membership:
                </p>
                <div className="pt-3">
                  <Button
                    href={siteData.contact.whatsappLink}
                    variant="lime"
                    withArrow
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!font-bold w-full justify-center !py-2 !text-xs"
                  >
                    Open WhatsApp ({siteData.contact.whatsapp})
                  </Button>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#F5F6F1] rounded-2xl p-4 border border-[#E5EAE4] space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#738078]">
                Official Email
              </span>
              <p className="text-sm font-bold text-[#064D3B]">
                <a href={`mailto:${siteData.contact.email}`} className="hover:underline">
                  {siteData.contact.email}
                </a>
              </p>
              <p className="text-xs text-[#738078]">
                We review institutional proposals and queries within standard working hours.
              </p>
            </div>

            {/* Social Media Links Card */}
            <div className="bg-[#F5F6F1] rounded-2xl p-4 border border-[#E5EAE4] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#738078]">
                Social & Digital Channels
              </span>
              <div className="space-y-1.5 text-xs">
                <a
                  href={siteData.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#E7EDE5] text-[#064D3B] font-semibold transition-colors border border-[#E5EAE4]"
                >
                  <span>Instagram</span>
                  <span className="text-xs text-[#738078]">{siteData.socials.instagram.handle}</span>
                </a>
                <a
                  href={siteData.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#E7EDE5] text-[#064D3B] font-semibold transition-colors border border-[#E5EAE4]"
                >
                  <span>YouTube</span>
                  <span className="text-xs text-[#738078]">{siteData.socials.youtube.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F5F6F1] rounded-2xl p-6 sm:p-7 border border-[#E5EAE4]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#064D3B] mb-1">
              Send us a message
            </h2>
            <p className="text-xs text-[#738078] mb-6">
              Fill out the form below and our team will route your inquiry to the relevant coordinator.
            </p>

            {/* Accessible Status Announcements */}
            <div aria-live="polite">
              {status === 'success' && (
                <div className="mb-6 bg-[#E7EDE5] border border-[#064D3B]/20 rounded-2xl p-4 text-[#064D3B] text-sm font-semibold flex items-center gap-2" role="status">
                  <span className="w-2 h-2 rounded-full bg-[#064D3B]" />
                  Message sent successfully! Our team will reply shortly.
                </div>
              )}
              {status === 'failed' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-800 text-sm font-medium" role="alert">
                  The message could not be sent. Your input is preserved — please try again or message us on WhatsApp.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-800 text-sm font-medium" role="alert">
                  Please complete the required fields marked below and submit again.
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_honey">Do not fill this</label>
                <input
                  id="_honey"
                  name="_honey"
                  type="text"
                  value={form._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field
                  label="Full name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field
                  label="Phone number (optional)"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                />
                <Select
                  label="Inquiry subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  options={SUBJECT_OPTIONS}
                />
              </div>

              <Textarea
                label="Message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  withArrow
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto"
                >
                  {status === 'sending' ? 'Sending message…' : 'Submit message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
