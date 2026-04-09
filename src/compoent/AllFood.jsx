import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllFood() {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    async function fetchCategories() {
        try {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            setCategories(res.data.categories)
        } catch (err) {
            console.error(err)
        }
    }

    async function fetchData(query = '', category = 'All') {
        setLoading(true)
        try {
            let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
            if (category !== 'All' && query === '') {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            }
            const res = await axios.get(url)
            setFood(res.data.meals || [])
            setLoading(false)
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
        fetchData()
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        fetchData(value, selectedCategory);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchTerm(''); // Clear search when category changes
        fetchData('', category);
    }

    return (
        <div className="min-h-screen bg-[#fafafa] pb-24 px-6 md:px-12 w-full pt-10">
            {/* Section Header */}
            <div className="w-full mb-16 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-10 animate-fade-in">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-0.5 w-12 bg-orange-600 rounded-full"></div>
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">Signature Collection</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                        Top Choice <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Recipes.</span>
                    </h2>
                </div>
                
                {/* Modern Search Glass Bar */}
                <div className="relative group w-full md:w-96">
                    <div className="absolute inset-0 bg-orange-100/50 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>
                    <input 
                        type="text" 
                        placeholder="Search for your next meal..." 
                        value={searchTerm}
                        onChange={handleSearch}
                        className="relative w-full pl-14 pr-6 py-5 rounded-2xl glass border border-slate-200 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/5 transition-all text-slate-700 font-bold placeholder:text-slate-400"
                    />
                    <svg className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Category Navigation - Pill Style */}
            <div className="w-full max-w-[1600px] mx-auto mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                    <button 
                        onClick={() => handleCategoryChange('All')}
                        className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap shadow-sm border ${selectedCategory === 'All' ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-400 border-slate-100 hover:border-orange-200 hover:text-orange-600'}`}
                    >
                        All Recipes
                    </button>
                    {categories.map((cat) => (
                        <button 
                            key={cat.idCategory}
                            onClick={() => handleCategoryChange(cat.strCategory)}
                            className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap shadow-sm border ${selectedCategory === cat.strCategory ? 'bg-orange-600 text-white border-orange-600 shadow-xl' : 'bg-white text-slate-400 border-slate-100 hover:border-orange-200 hover:text-orange-600'}`}
                        >
                            {cat.strCategory}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="flex h-96 items-center justify-center w-full">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-orange-100 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    {food && food.length > 0 ? food.map((item) => (
                        <Link 
                            to={`/food/${item.idMeal}`}
                            key={item.idMeal} 
                            className="group relative bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 flex flex-col p-4 pb-10"
                        > 
                            {/* Image Container with specialized shape */}
                            <div className="relative h-72 rounded-[2.5rem] overflow-hidden">
                                <img 
                                    src={item.strMealThumb} 
                                    alt={item.strMeal} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                
                                <div className="absolute top-5 left-5 glass px-4 py-2 rounded-2xl text-[9px] font-black text-slate-900 uppercase tracking-widest">
                                    {item.strCategory || "Recipe"}
                                </div>
                            </div>

                            <div className="px-6 pt-10 flex flex-col flex-1">
                                <h2 className="text-xl font-black text-slate-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
                                    {item.strMeal}
                                </h2>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="flex text-orange-500 text-[10px]">★★★★★</div>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">(4.8) View Full Recipe</span>
                                </div>
                                
                                <div className="mt-auto flex items-center justify-between pointer-events-none">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Complexity</span>
                                        <span className="text-xs font-black text-slate-900 uppercase italic">Intermediate</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[-45deg]">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h14"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )) : (
                        <div className="col-span-full text-center py-40 border-2 border-dashed border-slate-100 rounded-[4rem]">
                            <div className="text-6xl mb-6">🔍</div>
                            <h2 className="text-2xl font-black text-slate-400 uppercase tracking-widest">No Recipes Found</h2>
                            <p className="text-slate-300 font-medium mt-2">Try searching for something else or browse categories.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AllFood
