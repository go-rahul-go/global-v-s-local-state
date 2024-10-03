import React, { useState } from 'react'

const LocalCounter = () => {
    const [lcount, setLcount] = useState(0);

    return (
        <div className='w-[95%] min-h-[30vh] bg-indigo-950 mx-auto rounded-2xl flex flex-col justify-center items-center gap-4 my-4'>
            <p className='text-3xl text-slate-300 font-semibold'>count: {lcount}</p>
            <div className='flex justify-center items-center gap-4'>

                <button className='px-4 py-2 bg-yellow-400 text-black text-xl font-bold capitalize rounded'
                    onClick={() => {setLcount(lcount + 1);  }}>increase</button>
                <button className='px-4 py-2 bg-yellow-400 text-black text-xl font-bold  capitalize rounded'
                    onClick={() =>{lcount>0?setLcount(lcount-1):"";}}>decrease</button>
            </div>

        </div>
    )
}

export default LocalCounter