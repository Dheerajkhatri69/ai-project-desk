'use client';


import { ChevronDown, PlayCircle, Star, Target, Users, Clock, Shield, Bolt, Building2, Search } from 'lucide-react';
import Link from 'next/link';

export default function LandingHero() {
  return (
    <div className="min-h-screen bg-[#f9fcff] flex flex-col">
      {/* Top Nav */}
      <header className="w-full flex justify-between items-center px-8 py-3 bg-white border-b border-blue-100 shadow-sm h-14">
        <div className="h-12 w-38 flex items-center justify-center overflow-hidden">
          <img src="/logo.png" alt="Logo" className="w-full object-contain" />
        </div>

        <div className="flex items-center space-x-10">
          <nav className="hidden md:flex space-x-8 font-semibold text-base text-[#232B38]">
            <a href="#" className="hover:text-[#0052CC] transition-colors">Solutions</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Why Choose Us?</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Support</a>
          </nav>

          <Link
            href={"/loginpage"}
            className="bg-gradient-to-r from-[#FF6A00] to-[#FFB700] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:opacity-90 w-full max-w-[80px] h-[30px] shadow-lg text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center"
            style={{ borderColor: 'rgb(248, 115, 7)', borderWidth: '1px' }}
          >
            Login
          </Link>

        </div>
      </header>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto px-2 md:px-8">
        {/* Badge with blue gradient background */}
        <div className="flex justify-center items-center mt-12 mb-4">
          <div className="bg-gradient-to-r from-[#e0f7ff] to-white border border-cyan-300 px-6 py-2 rounded-full inline-flex items-center space-x-2 text-base font-bold text-[#0074e8]">
            <Star size={18} className="text-[#0074e8]" />
            <span>Trusted by 10,000+ Construction Teams</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Your Platform for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FFB700] to-[#00B5E2]">
            Future of Construction
          </span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Revolutionize your construction management with AI-powered tools that streamline workflows, reduce costs,
          and deliver projects on time, every time.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center w-full max-w-2xl mx-auto">
          <a
            href="#get-started"
            className="bg-gradient-to-r from-[#FF6A00] to-[#FFB700] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold shadow hover:opacity-90 w-full max-w-[220px] h-[52px] text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
          >
            Get Started Free
          </a>


          <a
            href="#watch-demo"
            className="bg-gradient-to-r from-[#00B5E2] to-[#0052CC] text-white px-4 py-2 rounded-xl font-semibold shadow hover:opacity-90 w-full max-w-[220px] h-[52px] text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 border"
            style={{ borderColor: 'rgb(1, 80, 166)', borderWidth: '2px' }}
          >
            <PlayCircle size={20} /> Watch Demo
          </a>


        </div>

        <ChevronDown className="mt-10 text-blue-400 animate-bounce" size={28} />
      </main>

      {/* Professional Roles Section */}
      <section className="w-full bg-[#f4fcff] py-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-3xl font-extrabold text-[#181C23] text-center mb-3">Built for Every Construction Professional</h2>
        <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl">Tailored solutions that meet the unique needs of every role in your construction ecosystem</p>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-8">
          {/* Card 1 */}
          <div className="bg-white border border-cyan-100 rounded-2xl flex flex-col items-center p-8 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <img src="/GC.jpg" alt="General Contractors" className="w-36 h-36 object-cover rounded-xl mb-6" />
            <div className="text-xl font-extrabold text-[#181C23] mb-2 text-center">General Contractors</div>
            <div className="text-gray-500 text-center mb-4">Keep projects on track and within budget from the palm of your hand</div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#0090ff]">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /></svg>
              30% Cost Reduction
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-cyan-100 rounded-2xl flex flex-col items-center p-8 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <img src="/SC.jpeg" alt="Subcontractors" className="w-36 h-36 object-cover rounded-xl mb-6" />
            <div className="text-xl font-extrabold text-[#181C23] mb-2 text-center">Subcontractors</div>
            <div className="text-gray-500 text-center mb-4">Connect your teams from site to office in real time</div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#00bfae]">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2v8h8" /><path d="M21 21H3V3" /></svg>
              Real-time Sync
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-cyan-100 rounded-2xl flex flex-col items-center p-8 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <img src="/OC.jpg" alt="Owners" className="w-36 h-36 object-cover rounded-xl mb-6" />
            <div className="text-xl font-extrabold text-[#181C23] mb-2 text-center">Owners</div>
            <div className="text-gray-500 text-center mb-4">Maximise return with visibility into every step of the process</div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#ff9100]">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
              Complete Visibility
            </div>
          </div>
        </div>
      </section>

      {/* Complete Construction Solutions Section */}
      <section className="w-full bg-[#eaf7fc] py-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#181C23] text-center mb-3">Complete Construction Solutions</h2>
        <p className="text-base text-gray-600 text-center mb-10 max-w-2xl">
          From project planning to completion, our AI-powered platform covers every aspect of construction management
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Card 1 */}
          <div className="bg-white border border-cyan-100 rounded-xl flex flex-col items-start p-9 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#00b5e2] to-[#0074e8] rounded-xl p-3 mb-12 shadow-md">
              <Target size={32} className="text-white" />
            </div>
            <div className="text-lg font-extrabold text-[#181C23] mb-1">Project Planning</div>
            <div className="text-gray-500 text-sm">AI-driven scheduling and resource allocation for optimal project outcomes</div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-cyan-100 rounded-xl flex flex-col items-start p-9 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#ffb700] to-[#ff6a00] rounded-xl p-3 mb-12 shadow-md">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-lg font-extrabold text-[#181C23] mb-1">Team Collaboration</div>
            <div className="text-gray-500 text-sm">Real-time communication tools that keep everyone on the same page</div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-cyan-100 rounded-xl flex flex-col items-start p-9 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#00b5e2] to-[#0074e8] rounded-xl p-3 mb-12 shadow-md">
              <Clock size={32} className="text-white" />
            </div>
            <div className="text-lg font-extrabold text-[#181C23] mb-1">Time Tracking</div>
            <div className="text-gray-500 text-sm">Accurate time management with automated reporting and analytics</div>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-cyan-100 rounded-xl flex flex-col items-start p-9 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#ffb700] to-[#ff6a00] rounded-xl p-3 mb-12 shadow-md">
              <Shield size={32} className="text-white" />
            </div>
            <div className="text-lg font-extrabold text-[#181C23] mb-1">Safety Management</div>
            <div className="text-gray-500 text-sm">Comprehensive safety protocols and incident tracking systems</div>
          </div>
          {/* Card 5 */}
          <div className="bg-white border border-cyan-100 rounded-xl flex flex-col items-start p-9 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#ffb700] to-[#ff6a00] rounded-xl p-3 mb-12 shadow-md">
              <Bolt size={32} className="text-white" />
            </div>
            <div className="text-lg font-extrabold text-[#181C23] mb-1">Progress Monitoring</div>
            <div className="text-gray-500 text-sm">Real-time project updates with visual progress tracking</div>
          </div>
          {/* Card 6 */}
          <div className="bg-white border border-cyan-100 rounded-xl flex flex-col items-start p-9 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#00b5e2] to-[#0074e8] rounded-xl p-3 mb-12 shadow-md">
              <Building2 size={32} className="text-white" />
            </div>
            <div className="text-lg font-extrabold text-[#181C23] mb-1">Asset Management</div>
            <div className="text-gray-500 text-sm">Complete inventory and equipment tracking across all sites</div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Project Desk Section */}
      <section className="w-full bg-[#f7fbfd] pt-16 pb-16 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
          {/* Left: Text and Features */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#181C23] mb-2">Why Choose AI Project Desk?</h2>
            <ul className="space-y-3 mb-2">
              <li className="flex items-center gap-3 text-sm text-[#0074e8] font-medium"><span className="bg-[#00b5e2] rounded-full p-1.5"><svg width='14' height='14' fill='none' stroke='white' strokeWidth='3' viewBox='0 0 24 24'><path d='M5 13l4 4L19 7' /></svg></span>Reduce project costs by up to 30% with AI optimization</li>
              <li className="flex items-center gap-3 text-sm text-[#0074e8] font-medium"><span className="bg-[#00b5e2] rounded-full p-1.5"><svg width='14' height='14' fill='none' stroke='white' strokeWidth='3' viewBox='0 0 24 24'><path d='M5 13l4 4L19 7' /></svg></span>Complete projects 25% faster with automated workflows</li>
              <li className="flex items-center gap-3 text-sm text-[#0074e8] font-medium"><span className="bg-[#00b5e2] rounded-full p-1.5"><svg width='14' height='14' fill='none' stroke='white' strokeWidth='3' viewBox='0 0 24 24'><path d='M5 13l4 4L19 7' /></svg></span>99.9% uptime guarantee with enterprise-grade security</li>
              <li className="flex items-center gap-3 text-sm text-[#0074e8] font-medium"><span className="bg-[#00b5e2] rounded-full p-1.5"><svg width='14' height='14' fill='none' stroke='white' strokeWidth='3' viewBox='0 0 24 24'><path d='M5 13l4 4L19 7' /></svg></span>24/7 support from construction industry experts</li>
              <li className="flex items-center gap-3 text-sm text-[#0074e8] font-medium"><span className="bg-[#00b5e2] rounded-full p-1.5"><svg width='14' height='14' fill='none' stroke='white' strokeWidth='3' viewBox='0 0 24 24'><path d='M5 13l4 4L19 7' /></svg></span>Seamless integration with existing tools and systems</li>
            </ul>
            <button className="bg-gradient-to-r from-[#ffb700] to-[#ff6a00] text-white font-bold px-6 py-2 rounded-full shadow hover:opacity-90 w-fit">Learn More</button>
          </div>
          {/* Right: Image with Star and Blue Icon */}
          <div className="relative flex items-center justify-center">
            <img src="/WS.jpg" alt="Why Choose AI Project Desk" className="w-full h-64 object-cover rounded-lg" />
            {/* Star icon: half in/out top-right */}
            <span className="absolute -top-5 -right-5 bg-[#ffb700] rounded-full p-3 shadow-lg flex items-center justify-center z-10"
              style={{ boxShadow: '0 4px 16px 0 rgba(255, 186, 0, 0.15)' }}>
              <Star size={28} className="text-white" />
            </span>
            {/* Search icon: half in/out bottom-left */}
            <span className="absolute -bottom-5 -left-5 bg-[#00b5e2] rounded-full p-3 shadow-lg flex items-center justify-center z-10"
              style={{ boxShadow: '0 4px 16px 0 rgba(0, 181, 226, 0.15)' }}>
              <Search size={24} className="text-white" />
            </span>
          </div>
        </div>
      </section>

      <section
        className="w-full py-20 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #ffb700 0%, #ff6a00 40%, #00e0ff 100%)",
          position: "relative",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
          Ready to Transform Your
          <br className="hidden md:block" />
          Construction Business?
        </h2>
        <p className="text-lg text-white/90 text-center mb-10 max-w-2xl mx-auto">
          Join thousands of contractors who are already using AI Project Desk to build better, faster, and more efficiently.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <a
            href="#start-trial"
            className="bg-white text-[#0052CC] font-extrabold text-lg px-10 py-4 rounded-xl shadow hover:bg-blue-50 text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          >
            Start Free Trial <span className="ml-2">→</span>
          </a>
          <a
            href="#schedule-demo"
            className="border-2 border-white text-white font-extrabold text-lg px-10 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          >
            <PlayCircle size={24} className="text-white" /> Schedule Demo
          </a>
        </div>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 text-center mt-8">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">10,000+</div>
            <div className="text-white/90 text-lg">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">$2.5B+</div>
            <div className="text-white/90 text-lg">Projects Managed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">99.9%</div>
            <div className="text-white/90 text-lg">Uptime</div>
          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="w-full bg-[#f7fafd] py-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#181C23] text-center mb-3">Get the Support You Need</h2>
        <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl">Our dedicated support team is here to help you succeed with comprehensive training, documentation, and 24/7 assistance.</p>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-8">
          {/* Card 1 */}
          <div className="bg-white border border-yellow-100 rounded-2xl flex flex-col items-center p-10 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#0090ff] to-[#00e0ff] rounded-xl p-4 mb-8 shadow-md flex items-center justify-center">
              <Clock size={36} className="text-white" />
            </div>
            <div className="text-xl font-extrabold text-[#181C23] mb-2 text-center">24/7 Support</div>
            <div className="text-gray-500 text-center">Round-the-clock assistance whenever you need it</div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-yellow-100 rounded-2xl flex flex-col items-center p-10 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#ffb700] to-[#ff6a00] rounded-xl p-4 mb-8 shadow-md flex items-center justify-center">
              <Users size={36} className="text-white" />
            </div>
            <div className="text-xl font-extrabold text-[#181C23] mb-2 text-center">Training & Onboarding</div>
            <div className="text-gray-500 text-center">Comprehensive training to get your team up to speed</div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-yellow-100 rounded-2xl flex flex-col items-center p-10 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-[#0090ff] to-[#00e0ff] rounded-xl p-4 mb-8 shadow-md flex items-center justify-center">
              <Target size={36} className="text-white" />
            </div>
            <div className="text-xl font-extrabold text-[#181C23] mb-2 text-center">Implementation</div>
            <div className="text-gray-500 text-center">Expert guidance for seamless platform integration</div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#131a24] pt-14 pb-6 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
          {/* Logo and Description */}
          <div className="flex flex-col items-start col-span-1">
            <img src="/logo.png" alt="AI Project Desk" className="h-12 mb-4" />
            <p className="text-gray-300 text-base leading-relaxed">Transforming construction management with AI-powered solutions for the modern contractor.</p>
          </div>
          {/* Solutions */}
          <div>
            <div className="font-bold text-white mb-3">Solutions</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Project Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Team Collaboration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Progress Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Safety Management</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <div className="font-bold text-white mb-3">Company</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Partners</a></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <div className="font-bold text-white mb-3">Support</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">API Docs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-base">
          © 2025 AI Project Desk. All rights reserved.
        </div>
      </footer>
    </div>
  );
}