import React from 'react'

function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden pt-10">
      {/* Background Text Overlay - Very Subtle */}
      <div className="absolute top-20 left-10 text-[15rem] font-black text-slate-50 opacity-[0.03] select-none pointer-events-none uppercase">
        Recipe
      </div>

      {/* Soft Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-orange-50/50 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Area */}
        <div className="space-y-12 animate-fade-in text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100">
             <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
             <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">
                Authentic Culinary Art
             </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter">
            Cook With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Passion</span> <br />
            Eat With Joy.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
             Experience the art of cooking with recipes designed for every skill level. From street food to five-star gourmet.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 pt-6">
             <button 
                onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-14 py-6 overflow-hidden rounded-full transition-all duration-500 hover:scale-105"
             >
                <div className="absolute inset-0 bg-orange-600 transition-all duration-500 group-hover:bg-slate-900"></div>
                <span className="relative z-10 text-white font-black uppercase text-xs tracking-[0.2em]">Explore All Recipes</span>
             </button>
             
             <button className="flex items-center gap-4 group">
                <div className="relative w-16 h-16 rounded-full glass border border-white flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-xl overflow-hidden">
                    <div className="absolute inset-[-100%] bg-white/20 -rotate-45 group-hover:left-[100%] transition-all duration-700"></div>
                    <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
                <div className="text-left">
                    <span className="block font-black text-slate-900 text-[10px] uppercase tracking-widest">Recipe Guide</span>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase border-b border-orange-200">Watch Tutorial</span>
                </div>
             </button>
          </div>

          <div className="pt-10 flex items-center justify-center lg:justify-start gap-12">
             <div className="text-center group cursor-pointer">
                <span className="block text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">12k+</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Recipes</span>
             </div>
             <div className="w-px h-10 bg-slate-100"></div>
             <div className="text-center group cursor-pointer">
                <span className="block text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">95+</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Chefs</span>
             </div>
             <div className="w-px h-10 bg-slate-100"></div>
             <div className="text-center group cursor-pointer">
                <span className="block text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">1M</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Users</span>
             </div>
          </div>
        </div>

        {/* Visual Area: Rotating Plate */}
        <div className="relative flex justify-center items-center h-full animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full max-w-[650px] aspect-square rounded-full flex items-center justify-center">
                
                {/* Decorative Elements */}
                <div className="absolute w-full h-full border border-slate-100 rounded-full scale-110"></div>
                <div className="absolute w-full h-full border border-slate-50 rounded-full scale-125"></div>

                {/* Animated Spice Particles */}
                <div className="absolute -top-10 left-1/4 w-4 h-4 bg-orange-200 rounded-full blur-sm animate-bounce"></div>
                <div className="absolute top-1/2 -right-10 w-3 h-3 bg-yellow-200 rounded-full blur-sm animate-pulse"></div>

                {/* The Plate Overlay - Glass Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/5 to-transparent z-0"></div>
                
                {/* The Plate */}
                <div className="w-[82%] h-[82%] rounded-full shadow-[0_80px_120px_-30px_rgba(0,0,0,0.3)] overflow-hidden border-[18px] border-white z-10 transform scale-100 hover:scale-105 transition-all duration-1000">
                    <img 
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Signature Dish" 
                        className="w-full h-full object-cover animate-spin-slow"
                    />
                </div>

                {/* Floating Recipe Badge */}
                <div className="absolute bottom-20 right-[-30px] glass p-6 rounded-[2.5rem] shadow-2xl z-20 border border-white/50 animate-bounce" style={{animationDuration: '5s'}}>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-xl">🥗</div>
                        <div>
                            <h4 className="font-black text-slate-900 leading-none text-xs">Healthy</h4>
                            <p className="text-[10px] font-bold text-slate-400 mt-1">Superfood Bowl</p>
                        </div>
                    </div>
                </div>

                {/* Floating Chef Badge */}
                <div className="absolute top-10 left-[-10px] bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                    <img src="https://i.pravatar.cc/100?u=chef" className="w-10 h-10 rounded-full border-2 border-orange-100" alt="chef"/>
                    <span className="text-[10px] font-black text-slate-900 uppercase">Chef's Choice</span>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-1 h-12 bg-slate-900 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-orange-600 animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
