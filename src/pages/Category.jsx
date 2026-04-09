import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchCategories() {
        try {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            setCategories(res.data.categories)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-600 border-t-transparent"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 w-full">
            <div className="w-full text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                    Explore <span className="text-orange-600">Categories</span>
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto">Find the perfect meal by browsing through our diverse range of food categories.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 w-full">
                {categories.map((cat) => (
                    <Link 
                        to={`/?category=${cat.strCategory}`} 
                        key={cat.idCategory}
                        className="group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
                    >
                        <div className="w-32 h-32 mx-auto mb-6 bg-orange-50 rounded-full flex items-center justify-center overflow-hidden">
                            <img 
                                src={cat.strCategoryThumb} 
                                alt={cat.strCategory} 
                                className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                            {cat.strCategory}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 px-4">
                            {cat.strCategoryDescription}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Category
