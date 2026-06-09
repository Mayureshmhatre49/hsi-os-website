'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, ArrowLeft, User, Mail, Phone, CheckCircle2, 
  Home, Shield, Zap, Sparkles, MapPin, Wallet, Clock, CheckSquare, MessageCircle
} from 'lucide-react'

// Step data & types
type ProjectType = 'Apartment' | 'Villa' | 'Farmhouse' | 'Commercial'
type LocationType = 'Mumbai' | 'Alibag' | 'Pune' | 'Goa' | 'Lonavala' | 'Other'
type BudgetType = '₹10L - ₹25L' | '₹25L - ₹50L' | '₹50L - ₹1Cr' | '₹1Cr - ₹3Cr' | '₹3Cr+'
type TimelineType = 'Immediately' | 'Within 3 Months' | '3–6 Months' | '6–12 Months' | 'Just Exploring'
type ServiceType = 'Interior Design' | 'Design + Execution' | 'Villa Design' | 'Smart Home' | 'HSI OS Digital Twin' | 'End-to-End Solution'

interface LeadData {
  name: string
  email: string
  phone: string
  projectType: ProjectType | ''
  location: LocationType | ''
  budget: BudgetType | ''
  timeline: TimelineType | ''
  serviceInterest: ServiceType[]
  source: string
}

const initialLeadData: LeadData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  timeline: '',
  serviceInterest: [],
  source: 'website',
}

// Left sidebar branding highlights from attached reference
const brandBulletPoints = [
  {
    title: 'SUSTAINABLE BY DESIGN',
    desc: 'Eco-conscious materials and low-waste execution for lasting health.',
    icon: Shield,
  },
  {
    title: 'LUXURY INTERIORS',
    desc: 'Considered, functional, and highly bespoke spaces designed around you.',
    icon: Sparkles,
  },
  {
    title: 'SMART VILLA INTEGRATION',
    desc: 'Powered by HSIOS™ for milestone-verified coordination and smart living.',
    icon: Zap,
  },
]

function EnquiryFunnel() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<LeadData>(initialLeadData)
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([])
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Validation states for step 2
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({})

  // Capture URL source parameter
  useEffect(() => {
    const sourceParam = searchParams.get('source')
    if (sourceParam) {
      setFormData(prev => ({ ...prev, source: sourceParam }))
    }
  }, [searchParams])

  // Handle single selection input
  const handleSingleSelect = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Auto-advance with micro-delay for smooth experience
    setTimeout(() => {
      setStep(prev => prev + 1)
    }, 350)
  }

  // Handle service check box toggling
  const handleServiceToggle = (service: ServiceType) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  // Contact details validation
  const validateStep2 = () => {
    const newErrors: typeof errors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (formData.name.trim() && formData.name.trim().length < 2) newErrors.name = 'Please enter your full name'
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleStep2Continue = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep2()) {
      setStep(3)
    }
  }

  // Submit all data to backend api
  const submitLead = async () => {
    setFormStatus('submitting')
    setErrorMessage('')

    const finalData = {
      ...formData,
      serviceInterest: selectedServices
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      })

      const data = await res.json()
      if (res.ok && data.ok) {
        setFormStatus('success')
        setStep(8)
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (err) {
      setFormStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Server communication failed. Please try again.')
    }
  }

  // Back button helper
  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1)
    }
  }

  // Progress Bar rendering details
  const getProgressDetails = () => {
    switch (step) {
      case 2:
        return { label: 'Step 1 of 3: Verification', bar: 'w-1/3 bg-sandstone-400', progressText: '████░░░░░░' }
      case 3:
        return { label: 'Step 2 of 3: Project Type', bar: 'w-[45%] bg-sandstone-500', progressText: '█████░░░░░' }
      case 4:
        return { label: 'Step 2 of 3: Location', bar: 'w-[60%] bg-sandstone-500', progressText: '██████░░░░' }
      case 5:
        return { label: 'Step 3 of 3: Budget Range', bar: 'w-[75%] bg-sandstone-600', progressText: '████████░░' }
      case 6:
        return { label: 'Step 3 of 3: Timeline', bar: 'w-[85%] bg-sandstone-600', progressText: '█████████░' }
      case 7:
        return { label: 'Step 3 of 3: Services', bar: 'w-[95%] bg-sandstone-600', progressText: '██████████' }
      default:
        return { label: '', bar: 'w-0', progressText: '' }
    }
  }

  const progress = getProgressDetails()

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
  }

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col lg:flex-row relative font-sans">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-image opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")` }} />

      {/* LEFT PANEL: Brand Messaging (Desktop Only) */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] bg-charcoal-800 text-white p-12 xl:p-18 flex-col justify-between relative overflow-hidden z-10">
        {/* Background visual cover */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <img 
            src="/projects-casa-frangipani-1.jpg" 
            alt="Luxury Villa Interior by Hestia Smart Interiors" 
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-800/80 to-charcoal-900/40 z-10" />

        <div className="relative z-20">
          {/* Elegant branding header */}
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full text-xs font-bold tracking-widest bg-sandstone-400 text-white">
              H
            </div>
            <div>
              <div className="font-serif font-bold text-lg leading-none tracking-tight">Hestia Smart Interiors</div>
              <div className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5 text-sandstone-300">Powered by HSIOS™</div>
            </div>
          </Link>
        </div>

        {/* Brand Value Propositions */}
        <div className="relative z-20 my-auto py-12 space-y-10">
          <div className="space-y-4">
            <span className="text-sandstone-400 text-xs font-bold tracking-[0.18em] uppercase">CONSCIOUS HOMES. EXCEPTIONAL LIVING.</span>
            <h2 className="font-serif text-[2.5rem] leading-[1.1] font-medium text-white max-w-sm">
              Let&apos;s plan a home built for <em className="not-italic text-sandstone-300 font-serif">precision</em>.
            </h2>
            <p className="text-warmgray-300 text-sm leading-relaxed max-w-sm">
              We close the gap between design and delivery. Every trade sequenced, every conflict checked, every detail milestone-verified.
            </p>
          </div>

          <div className="space-y-6 max-w-md">
            {brandBulletPoints.map((pt, i) => {
              const IconComp = pt.icon
              return (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-sandstone-400">
                    <IconComp size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-0.5">{pt.title}</h4>
                    <p className="text-xs text-warmgray-400 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-20 flex justify-between items-center text-xs text-warmgray-400 border-t border-white/10 pt-6">
          <span>Mumbai · Alibag · Pune · Goa</span>
          <span>© Hestia Smart Interiors</span>
        </div>
      </div>

      {/* RIGHT PANEL: Qualification Funnel Container */}
      <div className="flex-1 w-full flex flex-col justify-center items-center p-0 sm:p-8 md:p-12 lg:p-16 relative z-10 overflow-y-auto">
        <div className="w-full max-w-xl bg-white rounded-none sm:rounded-4xl border-0 sm:border border-ivory-300/60 shadow-none sm:shadow-luxury p-6 sm:p-10 md:p-12 relative min-h-screen sm:min-h-[560px] flex flex-col justify-between">
          
          {/* Progress & Navigation Header */}
          {step > 1 && step < 8 && (
            <div className="w-full pb-6">
              <div className="flex justify-between items-center mb-3">
                <button 
                  onClick={handleBack}
                  className="text-warmgray-500 hover:text-charcoal-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-warmgray-400">
                  <span className="hidden sm:inline">{progress.label}</span>
                  <span className="font-mono text-sandstone-600">{progress.progressText}</span>
                </div>
              </div>
              <div className="w-full h-1 bg-ivory-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${progress.bar}`} />
              </div>
            </div>
          )}

          {/* Step Contents */}
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step-welcome"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-6 flex flex-col items-center justify-center h-full"
                >
                  {/* Mobile Branding Header */}
                  <div className="lg:hidden mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full text-sm font-bold tracking-widest bg-sandstone-400 text-white mx-auto mb-3">
                      H
                    </div>
                    <div className="font-serif font-bold text-xl leading-none text-charcoal-800">Hestia Smart Interiors</div>
                    <div className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase mt-1 text-sandstone-600">Powered by HSIOS™</div>
                  </div>

                  {/* Icon details */}
                  <div className="w-14 h-14 rounded-full bg-sandstone-50 border border-sandstone-200 flex items-center justify-center mb-8 text-sandstone-600 shadow-card">
                    <Sparkles size={22} className="animate-float" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sandstone-600 mb-3 block">Luxury Sustainable Interiors</span>
                  <h1 className="font-serif text-3xl sm:text-[2.25rem] leading-[1.15] font-bold text-charcoal-800 mb-4 tracking-tight max-w-md mx-auto">
                    Conscious Homes.<br />Exceptional Living.
                  </h1>
                  
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-warmgray-500 mb-10 bg-ivory-150 py-1.5 px-4 rounded-full border border-ivory-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 animate-pulse" />
                    Mumbai · Alibag
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="btn btn-bronze text-base px-10 py-4.5 group shadow-bronze hover:shadow-bronze-lg transition-all"
                  >
                    Start Your Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-[10.5px] text-warmgray-400 mt-6 max-w-xs leading-relaxed">
                    A Hestia Advisor will analyze your responses to customize your design blueprint. Takes 90 seconds.
                  </p>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step-details"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 py-2"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-800">Introduce Yourself</h3>
                    <p className="text-xs text-warmgray-500">Provide your contact details so we can lock in your priority consultation slot.</p>
                  </div>

                  <form onSubmit={handleStep2Continue} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={16} />
                        <input
                          id="name"
                          type="text"
                          placeholder="Please enter your full name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, name: e.target.value }))
                            if (errors.name) setErrors(prev => ({ ...prev, name: undefined }))
                          }}
                          className={`form-input pl-11 ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="form-label">Email Address (Optional)</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={16} />
                        <input
                          id="email"
                          type="email"
                          placeholder="We'll use this to send your proposal"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, email: e.target.value }))
                            if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
                          }}
                          className={`form-input pl-11 ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={16} />
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, phone: e.target.value }))
                            if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }))
                          }}
                          className={`form-input pl-11 ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-semibold">{errors.phone}</p>}
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <span className="text-[10px] text-warmgray-400 flex items-center gap-1">
                        <Shield size={12} className="text-sandstone-500" /> Privacy protected. Zero spam.
                      </span>
                      <button
                        type="submit"
                        className="btn btn-dark text-xs py-3 px-6 flex items-center gap-1.5"
                      >
                        Continue <ArrowRight size={14} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step-project"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 py-2"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-800">What are you planning?</h3>
                    <p className="text-xs text-warmgray-500">Select the option that best describes your property project.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'Apartment', label: 'Apartment', desc: 'Premium urban residence', icon: Home },
                      { id: 'Villa', label: 'Villa', desc: 'Luxury standalone estate', icon: Sparkles },
                      { id: 'Farmhouse', label: 'Farmhouse', desc: 'Eco-conscious country home', icon: MapPin },
                      { id: 'Commercial', label: 'Commercial', desc: 'Boutique office or hospitality', icon: Home }
                    ].map((item) => {
                      const Selected = formData.projectType === item.id
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSingleSelect('projectType', item.id)}
                          className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                            Selected 
                              ? 'border-sandstone-400 bg-sandstone-50/55 shadow-luxury-md ring-1 ring-sandstone-400/20' 
                              : 'border-ivory-300/80 bg-white hover:border-sandstone-300 hover:shadow-card'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            Selected ? 'bg-sandstone-400 text-white' : 'bg-ivory-100 text-warmgray-600'
                          }`}>
                            <item.icon size={16} />
                          </div>
                          <div>
                            <span className="font-serif font-bold text-sm block text-charcoal-800">{item.label}</span>
                            <span className="text-[11px] text-warmgray-400 mt-0.5 block">{item.desc}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step-location"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 py-2"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-800">Where is your project?</h3>
                    <p className="text-xs text-warmgray-500">Tell us where the site execution will take place.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'Mumbai', label: 'Mumbai' },
                      { id: 'Alibag', label: 'Alibag' },
                      { id: 'Pune', label: 'Pune' },
                      { id: 'Goa', label: 'Goa' },
                      { id: 'Lonavala', label: 'Lonavala' },
                      { id: 'Other', label: 'Other Location' }
                    ].map((item) => {
                      const Selected = formData.location === item.id
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSingleSelect('location', item.id)}
                          className={`py-4 px-5 rounded-xl border text-center transition-all duration-300 font-serif font-semibold text-sm ${
                            Selected 
                              ? 'border-sandstone-400 bg-sandstone-50/50 shadow-luxury ring-1 ring-sandstone-400/20 text-charcoal-800' 
                              : 'border-ivory-300/80 bg-white hover:border-sandstone-300 hover:shadow-card text-warmgray-600'
                          }`}
                        >
                          {item.label}
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div 
                  key="step-budget"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 py-2"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-800">Project Budget</h3>
                    <p className="text-xs text-warmgray-500">Provide an approximate investment range for interior execution.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: '₹10L - ₹25L', label: '₹10L - ₹25L', desc: 'Essential premium execution' },
                      { id: '₹25L - ₹50L', label: '₹25L - ₹50L', desc: 'Standard luxury configuration' },
                      { id: '₹50L - ₹1Cr', label: '₹50L - ₹1Cr', desc: 'Premium design + full execution' },
                      { id: '₹1Cr - ₹3Cr', label: '₹1Cr - ₹3Cr', desc: 'High-end custom villa build' },
                      { id: '₹3Cr+', label: '₹3Cr+', desc: 'Ultimate bespoke estate delivery' }
                    ].map((item) => {
                      const Selected = formData.budget === item.id
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSingleSelect('budget', item.id)}
                          className={`w-full p-4 px-6 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
                            Selected 
                              ? 'border-sandstone-400 bg-sandstone-50/50 shadow-luxury-md ring-1 ring-sandstone-400/20' 
                              : 'border-ivory-300/80 bg-white hover:border-sandstone-300 hover:shadow-card'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <Wallet className={`w-5 h-5 flex-shrink-0 ${Selected ? 'text-sandstone-500' : 'text-warmgray-400'}`} />
                            <div>
                              <span className="font-serif font-bold text-sm block text-charcoal-800">{item.label}</span>
                              <span className="text-[10px] text-warmgray-400 mt-0.5 block">{item.desc}</span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            Selected ? 'border-sandstone-400 bg-sandstone-400 text-white' : 'border-ivory-300'
                          }`}>
                            {Selected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div 
                  key="step-timeline"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 py-2"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-800">When do you plan to start?</h3>
                    <p className="text-xs text-warmgray-500">Help us understand your timeline requirements to check manager availability.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: 'Immediately', label: 'Immediately', desc: 'Site is ready or structure is nearing completion' },
                      { id: 'Within 3 Months', label: 'Within 3 Months', desc: 'Currently in layout planning or design stages' },
                      { id: '3–6 Months', label: '3–6 Months', desc: 'Pre-construction phase' },
                      { id: '6–12 Months', label: '6–12 Months', desc: 'Exploring early options' },
                      { id: 'Just Exploring', label: 'Just Exploring / Gathering Costings', desc: 'Comparing execution systems' }
                    ].map((item) => {
                      const Selected = formData.timeline === item.id
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSingleSelect('timeline', item.id)}
                          className={`w-full p-4 px-6 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
                            Selected 
                              ? 'border-sandstone-400 bg-sandstone-50/50 shadow-luxury-md ring-1 ring-sandstone-400/20' 
                              : 'border-ivory-300/80 bg-white hover:border-sandstone-300 hover:shadow-card'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <Clock className={`w-5 h-5 flex-shrink-0 ${Selected ? 'text-sandstone-500' : 'text-warmgray-400'}`} />
                            <div>
                              <span className="font-serif font-bold text-sm block text-charcoal-800">{item.label}</span>
                              <span className="text-[10px] text-warmgray-400 mt-0.5 block">{item.desc}</span>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            Selected ? 'border-sandstone-400 bg-sandstone-400 text-white' : 'border-ivory-300'
                          }`}>
                            {Selected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 7 && (
                <motion.div 
                  key="step-services"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 py-2"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-charcoal-800">What are you looking for?</h3>
                    <p className="text-xs text-warmgray-500">Select one or more services that match your project requirements.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Interior Design', label: 'Interior Design' },
                      { id: 'Design + Execution', label: 'Design + Execution' },
                      { id: 'Villa Design', label: 'Villa Design' },
                      { id: 'Smart Home', label: 'Smart Home Systems' },
                      { id: 'HSI OS Digital Twin', label: 'HSIOS™ Digital Twin' },
                      { id: 'End-to-End Solution', label: 'End-to-End Solution' }
                    ].map((item) => {
                      const Selected = selectedServices.includes(item.id as ServiceType)
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleServiceToggle(item.id as ServiceType)}
                          className={`py-3.5 px-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center gap-2 relative ${
                            Selected 
                              ? 'border-sandstone-400 bg-sandstone-50/50 shadow-luxury ring-1 ring-sandstone-400/20' 
                              : 'border-ivory-300/80 bg-white hover:border-sandstone-300 hover:shadow-card'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <CheckSquare className={`w-4 h-4 ${Selected ? 'text-sandstone-600' : 'text-warmgray-300'}`} />
                            <span className="font-serif font-bold text-xs text-charcoal-800">{item.label}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs text-center font-semibold">
                      {errorMessage || 'Submission failed. Please check your network connection.'}
                    </div>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={submitLead}
                      disabled={selectedServices.length === 0 || formStatus === 'submitting'}
                      className="btn btn-bronze text-xs py-3 px-8 shadow-bronze hover:shadow-bronze-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                    >
                      {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 8 && (
                <motion.div 
                  key="step-success"
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-6 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-sandstone-100 border border-sandstone-200 flex items-center justify-center mb-6 text-sandstone-600 shadow-card">
                    <CheckCircle2 size={30} strokeWidth={1.5} className="animate-float" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sandstone-600 mb-2 block">Request Received</span>
                  <h3 className="font-serif text-3xl font-bold text-charcoal-800 mb-4 tracking-tight">
                    Thank You.
                  </h3>
                  
                  <p className="text-sm text-warmgray-600 leading-relaxed max-w-sm mx-auto mb-10">
                    Your luxury consultation request has been logged. A Hestia Design Advisor will contact you shortly to lock in your brief.
                  </p>

                  <div className="w-full space-y-3">
                    <Link
                      href="/projects"
                      className="btn btn-dark w-full text-xs py-3 justify-center border border-charcoal-800 hover:bg-charcoal-800 transition-colors"
                    >
                      Explore HSI Projects
                    </Link>
                    
                    <Link
                      href="/hsi-os"
                      className="btn btn-outline-warm w-full text-xs py-3 justify-center hover:bg-sandstone-50 transition-colors"
                    >
                      How HSI OS™ Works
                    </Link>

                    <a
                      href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%20have%20just%20completed%20the%20funnel%20and%20would%20like%20to%20discuss%20my%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-bronze w-full text-xs py-3 justify-center shadow-bronze hover:shadow-bronze-lg transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle size={15} /> WhatsApp Us Directly
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Secure details tag */}
          {step < 8 && (
            <div className="text-center text-[10px] text-warmgray-400 mt-6 pt-4 border-t border-ivory-200 flex items-center justify-center gap-2">
              <Shield size={10} className="text-sandstone-400" />
              <span>Your project parameters are protected by HSIOS™ data encryption.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function EnquiryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ivory-100 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" />
      </div>
    }>
      <EnquiryFunnel />
    </Suspense>
  )
}
