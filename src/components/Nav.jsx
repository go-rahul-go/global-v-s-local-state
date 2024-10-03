import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='w-[100%] bg-gray-900 h-[50px] flex justify-between items-center px-4'>
            <h1 className='text-yellow-500 font-bold uppercase text-2xl'>global v/s local state</h1>
            <div className='w-[30%] h-[100%]  flex justify-center items-center gap-2  md:w-[20%] links-bar'>
                <NavLink className="text-slate-200 text-xl font-bold capitalize" to="/">global</NavLink>
                <NavLink className="text-slate-200 text-xl  font-bold capitalize" to="/local">local</NavLink>
            </div>

        </nav>
    )
}

export default Nav