import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-neo-cyan border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center">
              <Mail size={32} className="text-neo-cyan" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">CONTACT US</h1>
              <div className="h-1 w-32 bg-black mt-2"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-mono max-w-3xl">
            Get in touch with the School of Economics and Management
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">SEND US A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono font-bold mb-2">NAME *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black font-mono focus:outline-none focus:border-neo-pink"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block font-mono font-bold mb-2">EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black font-mono focus:outline-none focus:border-neo-pink"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block font-mono font-bold mb-2">SUBJECT *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black font-mono focus:outline-none focus:border-neo-pink"
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="programmes">Programme Information</option>
                  <option value="research">Research Collaboration</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-mono font-bold mb-2">MESSAGE *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-4 border-black font-mono focus:outline-none focus:border-neo-pink resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-neo-pink text-white font-bold border-4 border-black hover-lift inline-flex items-center justify-center space-x-2"
              >
                <span>SEND MESSAGE</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-4 border-black p-8">
              <h3 className="text-2xl font-bold mb-6">VISIT US</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neo-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">ADDRESS</h4>
                    <p className="font-mono text-sm">
                      School of Economics and Management<br />
                      Xiamen University Malaysia<br />
                      Jalan Sunsuria, Bandar Sunsuria<br />
                      43900 Sepang, Selangor<br />
                      Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neo-green border-3 border-black flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">PHONE</h4>
                    <p className="font-mono text-sm">+60 3-8705 8605</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neo-cyan border-3 border-black flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">EMAIL</h4>
                    <p className="font-mono text-sm">sem@xmu.edu.my</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neo-pink border-3 border-black flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">OFFICE HOURS</h4>
                    <p className="font-mono text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5234567890123!2d101.7234567890123!3d2.7234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNDMnMjQuNCJOIDEwMcKwNDMnMjQuNCJF!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XMUM Location"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white border-t-4 border-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-xl font-mono mb-8 max-w-2xl mx-auto">
            Find answers to common questions about admissions, programmes, and campus life
          </p>
          <button className="px-8 py-4 bg-neo-yellow text-black font-bold border-3 border-white hover-lift">
            VIEW FAQ
          </button>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
