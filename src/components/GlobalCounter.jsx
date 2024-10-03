import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../store/countSlice'
const GlobalCounter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    console.log(counter)
    return (
        <div className='w-[95%] min-h-[30vh] bg-indigo-950 mx-auto rounded-2xl flex flex-col justify-center items-center gap-4 my-4'>
            <p className='text-3xl text-slate-300 font-semibold'>count: {counter}</p>
            <div className='flex justify-center items-center gap-4'>

                <button className='px-4 py-2 bg-yellow-400 text-black text-xl font-bold capitalize rounded'
                    onClick={() => dispatch(increase())}>increase</button>
                <button className='px-4 py-2 bg-yellow-400 text-black text-xl font-bold  capitalize rounded'
                    onClick={() => dispatch(decrease())}>decrease</button>
            </div>

        </div>
    )
}

export default GlobalCounter