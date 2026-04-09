import React from 'react'

function About() {
    return (
        <div className="min-h-screen bg-white">
            <div className="w-full py-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                        About Our <span className="text-orange-600">FoodApp</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        Welcome to FoodApp, your ultimate destination for discovering delicious recipes from around the world. 
                        Our mission is to make cooking accessible, fun, and inspiring for everyone, 
                        from beginner cooks to seasoned chefs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left mt-20">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">1000+ Recipes</h3>
                            <p className="text-gray-500">A vast collection of meals from various international cuisines.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Instructions</h3>
                            <p className="text-gray-500">Step-by-step guidance to ensure your dishes turn out perfectly.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Healthy Choice</h3>
                            <p className="text-gray-500">Browse through nutritious options tailored for a healthy lifestyle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
