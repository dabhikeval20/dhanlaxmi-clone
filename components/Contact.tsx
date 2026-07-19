"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle,
  Calendar,
  Clock,
  Briefcase
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Contact info sub-component
function ContactInfoItem({ icon: IconComp, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-xl bg-[var(--primary)]/10 grid place-items-center shrink-0">
        <IconComp className="h-5 w-5 text-[var(--primary)]" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-semibold text-[var(--navy)] dark:text-slate-100">{value}</div>
      </div>
    </div>
  );
}

// Form input label wrapper
function FormField({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block text-xs font-semibold text-[var(--navy)]/70 dark:text-slate-300 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {children}
      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
      
      {/* Scope CSS for form input styling matching reference site */}
      <style jsx global>{`
        .input-field {
          width: 100%;
          border: 1px solid var(--border);
          background: white;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: var(--navy);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .dark .input-field {
          background: #0f172a;
          border-color: #334155;
          color: #e2e8f0;
        }
        .input-field:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in oklch, var(--primary) 15%, transparent);
        }
      `}</style>
    </div>
  );
}

export default function Contact() {
  // Enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({ name: "", phone: "", email: "", city: "", service: "Mutual Funds", message: "" });
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquirySending, setEnquirySending] = useState(false);

  // Appointment form state
  const [appointmentForm, setAppointmentForm] = useState({ name: "", phone: "", date: "", time: "", service: "Mutual Funds" });
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [appointmentSending, setAppointmentSending] = useState(false);

  // Handlers
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySending(true);
    
    // Simulate CRM capture
    setTimeout(() => {
      console.log("CRM_ENQUIRY_READY", enquiryForm);
      setEnquirySuccess(true);
      setEnquirySending(false);
      setEnquiryForm({ name: "", phone: "", email: "", city: "", service: "Mutual Funds", message: "" });
      
      // Auto-dismiss success alert
      setTimeout(() => setEnquirySuccess(false), 4000);
    }, 1000);
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSending(true);

    // Simulate Appointment capture
    setTimeout(() => {
      console.log("CRM_APPOINTMENT_READY", appointmentForm);
      setAppointmentSuccess(true);
      setAppointmentSending(false);
      setAppointmentForm({ name: "", phone: "", date: "", time: "", service: "Mutual Funds" });

      // Auto-dismiss success alert
      setTimeout(() => setAppointmentSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 select-none bg-[var(--background)]">
      
      {/* 1. Contact Enquiry Section */}
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[0.95fr_1.05fr] gap-10">
        
        {/* Left Side: Contact details card */}
        <div className="rounded-3xl bg-[var(--navy)] p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-[var(--shadow-glow)]">
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[var(--primary)]/20 blur-3xl" />
          
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
              Contact
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">
              Let’s start your financial journey.
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed max-w-md">
              Share a few details and a certified advisor will reach out within 24 hours. Your first consultation is completely free.
            </p>
          </div>

          <div className="mt-12 space-y-6 relative z-10">
            <ContactInfoItem icon={Phone} label="Phone Number" value="+91 98765 43210" />
            <ContactInfoItem icon={Mail} label="Email Address" value="hello@dhanlaxmifs.com" />
            <ContactInfoItem icon={MapPin} label="Office Address" value="Andheri West, Mumbai — 400058" />
          </div>
        </div>

        {/* Right Side: Request form card */}
        <form 
          onSubmit={handleEnquirySubmit} 
          className="rounded-3xl border border-border/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 md:p-10 shadow-[var(--shadow-soft)] grid sm:grid-cols-2 gap-5"
        >
          <FormField label="Full Name">
            <input 
              required 
              type="text"
              value={enquiryForm.name}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
              className="input-field" 
              placeholder="Your full name" 
            />
          </FormField>
          
          <FormField label="Phone Number">
            <input 
              required 
              type="tel"
              value={enquiryForm.phone}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
              className="input-field" 
              placeholder="Your phone" 
            />
          </FormField>
          
          <FormField label="Email">
            <input 
              required 
              type="email"
              value={enquiryForm.email}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
              className="input-field" 
              placeholder="you@example.com" 
            />
          </FormField>
          
          <FormField label="City">
            <input 
              type="text"
              value={enquiryForm.city}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
              className="input-field" 
              placeholder="Your city" 
            />
          </FormField>
          
          <FormField label="Service Interested In" full>
            <select 
              value={enquiryForm.service}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, service: e.target.value })}
              className="input-field"
            >
              <option value="Mutual Funds">Mutual Funds</option>
              <option value="Motilal Oswal Services">Motilal Oswal Services</option>
              <option value="Insurance Services">Insurance Services</option>
              <option value="Financial Planning">Financial Planning</option>
            </select>
          </FormField>
          
          <FormField label="Message" full>
            <textarea 
              value={enquiryForm.message}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
              className="input-field min-h-[120px] resize-y" 
              placeholder="Tell us briefly about your goals (optional)" 
            />
          </FormField>
          
          <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap mt-2">
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to be contacted about our services.
            </p>
            <button 
              type="submit" 
              disabled={enquirySending}
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-[var(--gradient-hero)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform disabled:opacity-70 cursor-pointer"
            >
              {enquirySending ? "Sending..." : "Request Consultation"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {enquirySuccess && (
            <div className="sm:col-span-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-300 px-4 py-3 text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Thank you! Your enquiry has been captured and shared with our team.
            </div>
          )}
        </form>

      </div>

      {/* 2. Book Appointment Scheduler Widget */}
      <div id="appointment" className="mx-auto max-w-7xl px-5 mt-24">
        <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 shadow-[var(--shadow-soft)] border border-border/60 dark:border-slate-800">
          
          {/* Appointment Left Side (Gradient Details) */}
          <div className="bg-[var(--gradient-hero)] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[var(--gold)]/20 blur-3xl" />
            
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
                Book appointment
              </span>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
                Meet an advisor at your convenience
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed max-w-sm">
                Choose a date and time — in-person at our Mumbai office or over a secure video call. First session is on us.
              </p>
            </div>

            <ul className="mt-8 space-y-2.5 text-sm">
              {[
                "No cost, no obligation",
                "45-minute personalized session",
                "Written summary after the call"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Appointment Right Side (Booking Form) */}
          <form 
            onSubmit={handleAppointmentSubmit}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 grid sm:grid-cols-2 gap-5"
          >
            <FormField label="Name">
              <input 
                required 
                type="text" 
                value={appointmentForm.name}
                onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                className="input-field" 
                placeholder="Your name" 
              />
            </FormField>

            <FormField label="Phone">
              <input 
                required 
                type="tel" 
                value={appointmentForm.phone}
                onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                className="input-field" 
                placeholder="+91 ..." 
              />
            </FormField>

            <FormField label="Preferred Date">
              <input 
                required 
                type="date" 
                value={appointmentForm.date}
                onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                className="input-field" 
              />
            </FormField>

            <FormField label="Preferred Time">
              <input 
                required 
                type="time" 
                value={appointmentForm.time}
                onChange={(e) => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
                className="input-field" 
              />
            </FormField>

            <FormField label="Service" full>
              <select 
                required 
                value={appointmentForm.service}
                onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                className="input-field"
              >
                <option value="Mutual Funds">Mutual Funds</option>
                <option value="Motilal Oswal Services">Motilal Oswal Services</option>
                <option value="Insurance Services">Insurance Services</option>
                <option value="Financial Planning">Financial Planning</option>
              </select>
            </FormField>

            <div className="sm:col-span-2">
              <button 
                type="submit" 
                disabled={appointmentSending}
                className="btn-shine w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[var(--navy)]/90 transition cursor-pointer"
              >
                {appointmentSending ? "Confirming..." : "Confirm Appointment"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {appointmentSuccess && (
              <div className="sm:col-span-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-300 px-4 py-3 text-sm flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Appointment request received. We'll confirm on WhatsApp shortly.
              </div>
            )}
          </form>

        </div>
      </div>

    </section>
  );
}
