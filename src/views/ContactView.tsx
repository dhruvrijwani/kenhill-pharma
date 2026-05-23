import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

interface ContactViewProps {
  navigate: (view: string, searchParams?: Record<string, string>) => void;
}

export default function ContactView({ navigate }: ContactViewProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    productOfInterest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API posting
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        productOfInterest: '',
        message: ''
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* PAGE HEADER */}
        <div className="border-b border-border-custom pb-8">
          <div className="flex items-center space-x-2 text-xs text-text-muted mb-3">
            <span className="cursor-pointer hover:text-primary" onClick={() => navigate('home')}>Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-dark font-medium">Contact & Sourcing</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Trading Desk Availability</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-dark">
              Connect with Ken Hill Pharma
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Our regulatory trade and commercial solutions desks are standing by to coordinate your bulk API needs, compile stable pricing models, or clarify export documentation.
            </p>
          </div>
        </div>

        {/* SECTION 1 — CONTACT FORM & INFO ROW */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-primary text-white rounded-2xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Trade Headquarters</span>
                <h3 className="text-xl font-bold">Ken Hill Pharma Limited</h3>
                <p className="text-2xs text-white/80">Corporate Identification, GST & Customs Authorized Trading Hub</p>
              </div>

              {/* Physical details list */}
              <ul className="space-y-6 text-xs text-white/90">
                <li className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    K10 Tower A, Floor No. 512, Grand Sarabhai Compound, Behind Genda Circle, Vadodara – 390007, Gujarat, India
                  </span>
                </li>
                <li className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">Client Relations & Inquiries:</span>
                    <a href="mailto:info@kenhillpharma.com" className="hover:underline text-accent">info@kenhillpharma.com</a>
                    <span className="block text-[10px] text-white/60 mt-0.5">Proxy desk contact: info@anidin.com</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">Direct Sourcing Desk:</span>
                    <a href="tel:+919924073338" className="hover:underline text-accent">+91 9924073338</a>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">Operational Sourcing Hours:</span>
                    <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                    <span className="block text-[10px] text-white/60">Sunday: Closed (Emergency Cargo Dispatch active)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Warning Info */}
            <div className="bg-bg border border-border-custom rounded-2xl p-6 flex items-start space-x-4 text-xs text-text-muted">
              <ShieldAlert className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-text-dark mb-1">Standard Sourcing Protocol</h4>
                <p className="leading-relaxed">Ken Hill Pharma Limited distributes solely to authorized licensed healthcare organizations, trading offices, and pharmaceutical distributors. We never supply direct retail consumers.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7 bg-surface border border-border-custom rounded-2xl p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-dark">Sourcing Inquiry Submitted</h3>
                  <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                    Thank you. Your corporate inquiry has been successfully transmitted. Our pharmaceutical trade desk will verify your details and respond with a formal quotation within 12 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-6 py-3 rounded-full transition-transform"
                >
                  Submit Alternative Sourcing Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-border-custom pb-3 mb-2">
                  <h3 className="text-md font-bold text-text-dark">Request Corporate Sourcing Quotation</h3>
                  <p className="text-2xs text-text-muted mt-0.5">Please provide exact pharmaceutical trade details to trigger rapid compliance verification.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-2xs uppercase tracking-wider text-text-muted font-bold">Contact Name *</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Raghav Patel"
                      className="w-full text-xs border border-border-custom rounded-lg p-3 bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="block text-2xs uppercase tracking-wider text-text-muted font-bold">Business Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. purchasing@hospitalchain.com"
                      className="w-full text-xs border border-border-custom rounded-lg p-3 bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="block text-2xs uppercase tracking-wider text-text-muted font-bold">Company / Institution Name *</label>
                    <input
                      required
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Health Systems Ltd"
                      className="w-full text-xs border border-border-custom rounded-lg p-3 bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-2xs uppercase tracking-wider text-text-muted font-bold">Phone Number *</label>
                    <input
                      required
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full text-xs border border-border-custom rounded-lg p-3 bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark"
                    />
                  </div>
                </div>

                {/* Product of Interest */}
                <div className="space-y-1.5">
                  <label className="block text-2xs uppercase tracking-wider text-text-muted font-bold">Product of Interest / CAS / Item Code *</label>
                  <input
                    required
                    type="text"
                    name="productOfInterest"
                    value={formData.productOfInterest}
                    onChange={handleInputChange}
                    placeholder="e.g. Alendronate Sodium USP - 50kg Bulk"
                    className="w-full text-xs border border-border-custom rounded-lg p-3 bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark"
                  />
                </div>

                {/* Inquiry message */}
                <div className="space-y-1.5">
                  <label className="block text-2xs uppercase tracking-wider text-text-muted font-bold">Detail Specifications / Targeted Quantities *</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specify target volume, destination port, required DMF status, and any customized packaging standard."
                    className="w-full text-xs border border-border-custom rounded-lg p-3 bg-bg focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text-dark resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white text-xs font-bold py-3.5 px-6 rounded-full shadow-lg shadow-primary/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span className="animate-pulse">Verifying Sourcing Parameters...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Send Trading Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* SECTION 2 — DYNAMIC LOCATION GEOMETRY (Interactive coordinates card instead of unrenderable iframe) */}
        <section className="bg-bg border border-border-custom rounded-3xl p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Geographic Coordination</span>
              <h3 className="text-xl font-bold text-text-dark leading-tight">Our Central Vadodara Trade Registry</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We are strategically positioned inside Gujarat's prime industrial chemical trade zone. Access to multiple highways and container consolidation ports streamlines continuous cargo transport logistics.
              </p>
              
              <div className="pt-2 space-y-2 text-2xs text-text-dark font-medium">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Vadodara Airport — 15 Mins distance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Port of Kandla Consolidation Hub — Integrated</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-surface rounded-2xl border border-border-custom p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border-custom pb-2">
                <span className="text-3xs uppercase tracking-wider text-text-muted font-bold">Visual Navigation Coordinates</span>
                <span className="text-3xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded">VADODARA HQ</span>
              </div>

              {/* Styled mock map representation with exact address overlay */}
              <div className="bg-bg rounded-xl p-8 text-center text-xs text-text-muted border border-border-custom/50 space-y-3 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1A3A6B_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>
                <MapPin className="w-10 h-10 text-accent mx-auto animate-bounce" />
                <div>
                  <h4 className="font-bold text-text-dark text-sm">Grand Sarabhai Circle Zone</h4>
                  <p className="text-3xs mt-1">Latitude: 22.3168° N, Longitude: 73.1709° E</p>
                </div>
                <p className="text-3xs max-w-sm mx-auto leading-relaxed">
                  K10 Tower A, Floor No. 512, Grand Sarabhai Compound, Behind Genda Circle, Vadodara – 390007, Gujarat, India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
