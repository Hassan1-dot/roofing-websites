import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Home, Building2, Hammer, Mail, Phone, User, Zap } from 'lucide-react';
import { WizardStep, QuoteData } from '../types';

export default function QuoteWizard() {
  const [step, setStep] = useState<WizardStep>('zip');
  const [data, setData] = useState<QuoteData>({
    zipCode: '',
    roofType: '',
    fullName: '',
    email: '',
    phone: '',
  });

  const nextStep = (next: WizardStep) => setStep(next);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  };

  return (
    <section className="py-32 px-6 bg-slate-50" id="quote-wizard">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">CALCULATE YOUR PROTECTION.</h2>
          <p className="text-black/60 font-light">Get a precision estimate in under 60 seconds.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-black/5 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 'zip' && (
              <motion.div
                key="zip"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-black/40">Step 01: Location</label>
                  <h3 className="text-2xl font-bold font-display text-black">What is your project's ZIP code?</h3>
                </div>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="e.g. 33101"
                    className="flex-1 px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold border-none text-lg font-medium"
                    value={data.zipCode}
                    onChange={(e) => setData({...data, zipCode: e.target.value})}
                  />
                  <button 
                    disabled={data.zipCode.length < 5}
                    onClick={() => nextStep('type')}
                    className="px-8 py-4 bg-black text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-gold transition-all disabled:opacity-50 disabled:hover:bg-black"
                  >
                    Next <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'type' && (
              <motion.div
                key="type"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-black/40">Step 02: Project Type</label>
                  <h3 className="text-2xl font-bold font-display text-black">What type of project is this?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {[
                     { id: 'Res', label: 'Residential', icon: Home },
                     { id: 'Com', label: 'Commercial', icon: Building2 },
                     { id: 'Rep', label: 'Repair', icon: Hammer }
                   ].map((item) => (
                     <button
                       key={item.id}
                       onClick={() => {
                         setData({...data, roofType: item.label});
                         nextStep('contact');
                       }}
                       className="p-8 border-2 border-slate-100 rounded-3xl flex flex-col items-center gap-4 hover:border-brand-gold hover:bg-slate-50 transition-all group"
                     >
                       <item.icon size={32} className="text-black/20 group-hover:text-brand-gold transition-colors" />
                       <span className="font-bold text-black">{item.label}</span>
                     </button>
                   ))}
                </div>
              </motion.div>
            )}

            {step === 'contact' && (
              <motion.div
                key="contact"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-black/40">Step 03: Contact Details</label>
                  <h3 className="text-2xl font-bold font-display text-black">Where should we send your estimate?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={20} />
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full pl-12 pr-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold border-none"
                      value={data.fullName}
                      onChange={(e) => setData({...data, fullName: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={20} />
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full pl-12 pr-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold border-none"
                      value={data.phone}
                      onChange={(e) => setData({...data, phone: e.target.value})}
                    />
                  </div>
                  <div className="relative md:col-span-2">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={20} />
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full pl-12 pr-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold border-none"
                      value={data.email}
                      onChange={(e) => setData({...data, email: e.target.value})}
                    />
                  </div>
                </div>
                <button 
                  onClick={() => nextStep('success')}
                  disabled={!data.fullName || !data.email || !data.phone}
                  className="w-full py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-gold transition-all shadow-xl disabled:opacity-50"
                >
                  Generate My Estimate
                  <Zap size={20} fill="currentColor" />
                </button>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center space-y-6 py-8"
              >
                <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold font-display text-black tracking-tight">YOU'RE ALL SET, {data.fullName.split(' ')[0].toUpperCase()}!</h3>
                <p className="text-black/60 max-w-sm mx-auto font-light text-lg">
                  We've received your project details for ZIP <span className="font-bold text-black">{data.zipCode}</span>. One of our specialists will reach out shortly.
                </p>
                <div className="h-px w-24 bg-slate-200 mx-auto" />
                <p className="text-xs font-bold text-black/40 tracking-[0.2em] uppercase italic">Pride in every shingle.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
