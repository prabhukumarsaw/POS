import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem ({name, href, backgroundColor, color}) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor:color
    }
    return(
        <div>
            <Link to={href} className='rounded-md'>
            <div className=' uppercase px-4 py-2 text-center rounded-md' style={style}>{name}</div>
            </Link>
            
        </div>
    )
}

function CategoryList () {
    return (
        <div className='flex flex-wrap items-center justify-center gap-2'>
            <CategoryItem name="All" href="/categories/entrees" backgroundColor="#f0f5c4" color="#59871f" />
            <CategoryItem name="Atta & Rice" href="/categories/entrees" backgroundColor="#f0f5c4" color="#59871f" />
            <CategoryItem name="Dals" href="/categories/entrees" backgroundColor="#dd3439" color="#002050" />
            <CategoryItem name="Oils" href="/categories/entrees" backgroundColor="#f0f5c4" color="#59871f" />
            <CategoryItem name="spices" href="/categories/entrees" backgroundColor="#a7b75a" color="#59871f" />
            <CategoryItem name="dry fruit" href="/categories/entrees" backgroundColor="#a7b75a" color="#59871f" />
            <CategoryItem name="Vegetables" href="/categories/entrees" backgroundColor="#b056bb" color="#59871f" />
            <CategoryItem name="Shoap" href="/categories/entrees" backgroundColor="#f0f5c4" color="#59871f" />
            <CategoryItem name="Beverage" href="/categories/entrees" backgroundColor="#a7b75a" color="#59871f" />
            <CategoryItem name="Snacks" href="/categories/entrees" backgroundColor="#a7b75a" color="#59871f" />
        </div>
    )
}


const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList/>
    </div>
  )
}

export default CategoryWrapper