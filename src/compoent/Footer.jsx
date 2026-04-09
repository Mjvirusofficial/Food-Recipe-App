import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full bg-slate-900 pt-24 pb-12 px-6 md:px-20 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-10">
             <Link to="/" className="flex items-center gap-3 group">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-orange-900/20 group-hover:rotate-12 transition-all duration-500">F</div>
                <span className="text-3xl font-black text-white tracking-widest uppercase">Food<span className="text-orange-600">App</span>.</span>
             </Link>
             <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
                Join our global community of food lovers. Discover recipes that bring joy to your kitchen and flavor to your life.
             </p>
             <div className="flex gap-6">
                {['Twitter', 'Instagram', 'Pinterest', 'Facebook'].map((social) => (
                    <a key={social} href="#" className="text-slate-500 hover:text-orange-600 font-black uppercase text-[10px] tracking-widest transition-colors">{social}</a>
                ))}
             </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-10">
             <div className="space-y-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest">Platform</h4>
                <div className="flex flex-col gap-4">
                    {['Home', 'Recipes', 'Chefs', 'Categories'].map(link => (
                        <Link key={link} to="/" className="text-slate-500 hover:text-white text-sm font-bold transition-colors">{link}</Link>
                    ))}
                </div>
             </div>
             <div className="space-y-6">
                <h4 className="text-white font-black uppercase text-xs tracking-widest">Company</h4>
                <div className="flex flex-col gap-4">
                    {['About Us', 'Contact', 'Feedback', 'Support'].map(link => (
                        <Link key={link} to="/" className="text-slate-500 hover:text-white text-sm font-bold transition-colors">{link}</Link>
                    ))}
                </div>
             </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8 p-10 bg-slate-800/50 rounded-[3rem] border border-slate-700/50">
             <h4 className="text-white font-black text-xl tracking-tight">Stay Updated</h4>
             <p className="text-slate-400 text-sm font-medium">Get the latest Chef recipes and kitchen secrets delivered to your inbox.</p>
             <div className="relative group">
                <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-orange-600 transition-all font-bold placeholder:text-slate-600"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-orange-600 hover:bg-white hover:text-orange-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest transition-all">Join</button>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-slate-500 text-[11px] font-black uppercase tracking-widest">© 2026 FoodApp Studio. All Rights Reserved.</span>
            <div className="flex gap-10">
                <Link to="/" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
                <Link to="/" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
