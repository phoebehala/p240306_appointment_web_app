import React from 'react'
import CategoryList from './_components/CategoryList'


function layout({children}) {
    return (
        <div className='grid grid-cols-4'>
            <div className=''>
                {/* Category */}
                <CategoryList />
            </div>

            <div className='col-span3'>
                { children }
            </div>
        </div>
    )
  }
  
export default layout