import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SingleFood() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(res.data.meals[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id]);

  if (loading) return <div className="flex h-screen items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-600 border-t-transparent"></div></div>;
  if (!meal) return <div className="text-center py-20">Meal not found</div>;

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <img src={meal.strMealThumb} className="w-full h-full object-cover blur-[120px] opacity-10 scale-125" alt="blur-bg"/>
      </div>

      {/* Top Navigation Bar */}
      <div className="w-full py-8 px-6 md:px-20 flex items-center justify-between relative z-50">
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-4 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 hover:bg-orange-600 hover:text-white transition-all duration-500"
          >
            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-white/20 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Back to Recipes</span>
          </button>

          <div className="hidden md:flex items-center gap-3 glass px-6 py-3 rounded-2xl border border-white">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Recipe Details Verified</span>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Fixed-Style Media */}
          <div className="lg:col-span-5 space-y-16 animate-fade-in lg:sticky lg:top-10">
             <div className="relative group p-4 bg-white rounded-[4rem] shadow-2xl border border-slate-50">
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden">
                    <img src={meal.strMealThumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" alt={meal.strMeal}/>
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-80">{meal.strArea} Cuisine</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4">{meal.strMeal}</h1>
                        <div className="flex gap-4">
                            <div className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-[9px] font-black uppercase tracking-widest text-white">
                                {meal.strCategory}
                            </div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Chef's Signature Quote */}
             <div className="relative p-12 bg-white rounded-[3rem] border border-slate-50 shadow-sm overflow-hidden group">
                <div className="absolute -top-10 -right-10 text-9xl text-slate-50 font-black opacity-10 group-hover:rotate-12 transition-transform">“</div>
                <p className="relative z-10 text-slate-500 text-lg font-medium leading-[1.8] italic">
                    "A great recipe is more than just instructions; it's a story of flavors, a journey of tradition, and an expression of pure culinary love."
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-600"></div>
                    <div>
                        <span className="block text-[10px] font-black uppercase text-slate-900">Chef de Cuisine</span>
                        <span className="block text-[9px] text-slate-400 font-bold uppercase">Executive Creator</span>
                    </div>
                </div>
             </div>

             {/* Nutrition Quick View */}
             <div className="flex gap-4 p-2 bg-slate-100/50 rounded-[2.5rem] w-fit">
                {['45m', 'Medium', '420 Kcal'].map((tag, i) => (
                    <div key={i} className="px-8 py-4 bg-white rounded-3xl text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">
                        {tag}
                    </div>
                ))}
             </div>
          </div>

          {/* Right Column: Roadmap & Details */}
          <div className="lg:col-span-7 space-y-24">
             
             {/* Ingredients Section */}
             <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-between mb-12">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">The Essentials</span>
                        <h2 className="text-4xl font-black tracking-tighter text-slate-900">Ingredients Pantry</h2>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl">🛒</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[...Array(20)].map((_, i) => {
                        const ing = meal[`strIngredient${i + 1}`];
                        const m = meal[`strMeasure${i + 1}`];
                        if (ing && ing.trim() !== "") {
                            return (
                                <div key={i} className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-[2.5rem] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="relative flex items-center justify-between p-7 bg-white rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:rotate-12 transition-all duration-500">
                                                🥣
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{m}</span>
                                                <span className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors">{ing}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
             </div>

             {/* Kitchen Equipment - Visual Filler */}
             <div className="p-10 bg-white rounded-[3rem] border border-slate-50 shadow-sm flex flex-wrap items-center justify-between gap-8 animate-fade-in">
                <div className="space-y-1">
                    <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest">Recommended Tools</h4>
                    <p className="text-sm font-black text-slate-900 uppercase italic">Pro Kitchen Setup</p>
                </div>
                <div className="flex gap-6">
                    {['🔪', '🍳', '⏲️', '🧤', '🧂'].map((emoji, i) => (
                        <div key={i} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl hover:scale-110 hover:bg-orange-50 transition-all cursor-default">
                            {emoji}
                        </div>
                    ))}
                </div>
             </div>

             {/* The Roadmap Flowchart Section */}
             <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center justify-between mb-20">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">Step-by-Step</span>
                        <h2 className="text-4xl font-black tracking-tighter text-slate-900">Cooking Roadmap</h2>
                    </div>
                    <div className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">
                        Est. Time: 45 Mins
                    </div>
                </div>

                <div className="relative space-y-16">
                    {/* The Connecting Progress Line */}
                    <div className="absolute left-[39px] top-10 bottom-10 w-1.5 bg-gradient-to-b from-orange-200 via-orange-100 to-slate-50 rounded-full"></div>
                    
                    {meal.strInstructions.split('\r\n').map((step, index, array) => {
                        if (step.trim() && step.length > 5) {
                            return (
                                <div key={index} className="relative flex gap-14 group">
                                    {/* Roadmap Node with Pulse Effect */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-white border-[6px] border-orange-50 flex items-center justify-center text-slate-900 font-black text-2xl group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-200 transition-all duration-500 shadow-2xl group-hover:scale-110">
                                            {index + 1}
                                        </div>
                                        <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    </div>

                                    {/* Roadmap Card - Ultra Stylish */}
                                    <div className="flex-1 p-12 bg-white rounded-[3.5rem] border border-slate-50 shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:border-orange-100 relative group-hover:-translate-y-2">
                                        <span className="absolute top-10 right-12 text-[10px] font-black text-slate-100 uppercase tracking-[0.6em] group-hover:text-orange-100/50 transition-colors">Milestone {index + 1}</span>
                                        
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-1.5 h-6 bg-orange-600 rounded-full"></div>
                                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest pt-1">Preparation Detail</h4>
                                        </div>

                                        <p className="text-slate-500 text-lg leading-[1.9] font-medium tracking-normal group-hover:text-slate-700 transition-colors italic">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFood