'use client'

import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <span className="font-bold text-xl text-slate-900 tracking-tight">SparkleWash Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#areas" className="hover:text-sky-600 transition-colors">Service Areas</a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </div>
          <a href="tel:+17045551234" className="flex items-center gap-2 bg-sky-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-sky-700 transition-colors shadow-lg shadow-sky-600/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (704) 555-1234
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-100" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-[200px]">💧</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                Serving Matthews, Charlotte & Surrounding Areas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                Your Home Looks<br />
                <span className="text-sky-600">Brand New</span><br />
                Again
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Professional pressure washing and exterior cleaning for homeowners in Matthews, Charlotte, and the greater Lake Norman area. We restore your home's curb appeal — guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20 hover:shadow-sky-600/30 hover:-translate-y-0.5">
                  Get a Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="tel:+17045551234" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-slate-900">500+</div>
                  <div className="text-sm text-slate-500 font-medium">Homes Cleaned</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                  <div className="text-3xl font-black text-slate-900">4.9</div>
                  <div className="text-sm text-slate-500 font-medium">Google Rating</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                  <div className="text-3xl font-black text-slate-900">8+</div>
                  <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-3xl p-8 text-center">
                <div className="text-[120px] mb-4">🏠</div>
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-500">Before</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">Faded</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full mb-6" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-500">After</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">Like New</span>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="font-bold text-slate-900">Verified Customer</div>
                    <div className="text-sm text-slate-500">"Looks brand new!"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Pressure Washing Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From house exteriors to concrete driveways, we bring every surface back to life with professional-grade equipment and eco-friendly cleaning solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏠', title: 'House Washing', desc: 'Complete exterior cleaning for vinyl, brick, stucco, and more. Removes algae, mold, and grime buildup safely.', price: 'From $199' },
              { icon: '🚗', title: 'Driveway & Walkway', desc: 'Restore your concrete, pavers, and stone surfaces. Removes oil stains, moss, and years of weather damage.', price: 'From $149' },
              { icon: '🪵', title: 'Deck & Fence Restoration', desc: 'Bring your outdoor living spaces back to life. We clean and restore wood decks, composite decks, and fences.', price: 'From $249' },
              { icon: '🏗️', title: 'Roof Cleaning', desc: 'Soft-wash roof cleaning that removes black algae and lichen without damaging your shingles. Safe and effective.', price: 'From $299' },
              { icon: '🏢', title: 'Commercial Building Wash', desc: 'First impressions matter. Keep your business storefront and exterior clean and professional.', price: 'From $299' },
              { icon: '🛁', title: 'Pool Deck Cleaning', desc: 'Safe, thorough cleaning for pool decks and surrounding areas. Non-toxic to plants and pets.', price: 'From $179' },
            ].map((service, i) => (
              <div key={i} className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-600 font-bold">{service.price}</span>
                  <a href="#contact" className="text-sm font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">Get quote →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Three simple steps to a cleaner, more beautiful home.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Book Your Free Quote', desc: 'Fill out the form or call us. We come to your property, assess the job, and give you an honest, upfront price. No obligations.', icon: '📅' },
              { step: '02', title: 'We Do the Work', desc: 'Our trained technicians arrive on time, protect your landscaping, and clean every surface with professional-grade equipment.', icon: '🧹' },
              { step: '03', title: 'Love the Results', desc: 'Your home looks brand new. We follow up to make sure you are 100% satisfied. No payment until you are happy.', icon: '😍' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-sky-600 text-white rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg shadow-sky-600/30">{item.icon}</div>
                <div className="text-5xl font-black text-slate-200 mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Service Areas
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Proudly Serving the<br />
                <span className="text-sky-600">Greater Charlotte Area</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We provide professional pressure washing services to homeowners and businesses throughout the Charlotte metro area. If you are located in or near any of these communities, we can be at your door within 24-48 hours.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Matthews', 'Charlotte', 'Weddington', 'Waxhaw', 'Mint Hill', 'Indian Trail', 'Pineville', 'Fort Mill', 'Ballantyne', 'SouthPark', 'Lake Norman', 'Harrisburg'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-slate-900 mb-4">🏠 Free On-Site Estimate</h3>
                <p className="text-slate-500 text-sm mb-6">We come to your property, assess the job, and give you an exact price before any work begins. No surprises.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Same-day availability
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    No-obligation quote
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Fully insured
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Satisfaction guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-sky-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What Our Customers Say</h2>
            <p className="text-sky-100">Real reviews from real homeowners across the Charlotte area.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Jennifer M.', city: 'Matthews', review: 'Our house looked 10 years newer after SparkleWash came through. The crew was professional, on time, and left our yard spotless. Already booked them for next year.', rating: 5 },
              { name: 'David R.', city: 'Ballantyne', review: 'Had our driveway and pool deck done. They removed 3 years of moss and algae in under 2 hours. Price was fair, quality was exceptional. Highly recommend.', rating: 5 },
              { name: 'Sandra T.', city: 'Weddington', review: 'Called on a Tuesday, got a quote Wednesday, and the job was done Thursday. This kind of service is rare. Our neighbors already asked for their number.', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-1 text-sky-500 mb-3">{'★'.repeat(review.rating)}</div>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center font-bold text-sm">{review.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                    <div className="text-slate-400 text-xs">{review.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Get Started
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Ready for a<br />
                <span className="text-sky-600">Cleaner Home?</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Fill out the form and we will get back to you within 2 hours with a free, no-obligation quote. Or call us directly — we answer the phone.
              </p>
              <div className="space-y-4">
                <a href="tel:+17045551234" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-sky-50 transition-colors group">
                  <div className="w-12 h-12 bg-sky-100 group-hover:bg-sky-200 rounded-xl flex items-center justify-center text-sky-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium">Call Us Anytime</div>
                    <div className="font-bold text-slate-900">(704) 555-1234</div>
                  </div>
                </a>
                <a href="mailto:info@sparklewashpro.com" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-sky-50 transition-colors group">
                  <div className="w-12 h-12 bg-sky-100 group-hover:bg-sky-200 rounded-xl flex items-center justify-center text-sky-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium">Email Us</div>
                    <div className="font-bold text-slate-900">info@sparklewashpro.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium">Service Area</div>
                    <div className="font-bold text-slate-900">Matthews, Charlotte & Surrounding NC</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
                  <p className="text-green-700">We will get back to you within 2 hours with your free quote. Check your phone and email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your Free Quote</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                      <input required type="text" placeholder="John Smith" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                        <input required type="tel" placeholder="(704) 555-1234" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
                      <select required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900" value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select a service...</option>
                        <option>House Washing</option>
                        <option>Driveway & Walkway</option>
                        <option>Deck & Fence Restoration</option>
                        <option>Roof Cleaning</option>
                        <option>Commercial Building Wash</option>
                        <option>Pool Deck Cleaning</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell Us About Your Property</label>
                      <textarea rows={3} placeholder="Address, square footage, specific problem areas..." className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 resize-none" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    <button type="submit" className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 hover:shadow-sky-600/30">
                      Get My Free Quote →
                    </button>
                    <p className="text-xs text-slate-400 text-center">No obligation. We respond within 2 hours.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💧</span>
                <span className="font-bold text-xl">SparkleWash Pro</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Professional pressure washing services for homeowners and businesses in Matthews, Charlotte and the greater Lake Norman area.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>House Washing</div>
                <div>Driveway & Walkway Cleaning</div>
                <div>Deck & Fence Restoration</div>
                <div>Roof Cleaning</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>(704) 555-1234</div>
                <div>info@sparklewashpro.com</div>
                <div>Matthews, NC</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} SparkleWash Pro. All rights reserved. Fully insured.
          </div>
        </div>
      </footer>

    </div>
  )
}
