import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Pagination = ({ className, pages }: { className?: string, pages: number }) => {
    let items = []

    for (let index = 0; index < pages; index++) {
        items.push(<button className='h-[25px] w-[25px] flex justify-center  bg-primary text-white rounded-full items-center'>
            {index + 1}
        </button>)
    }
    return (
        <div className={`lg:w-[436px] w-full h-[55px] bg-white rounded-lg items-center justify-between flex px-4 ${className}`}>
            <ChevronLeftIcon />
            <div className="flex items-center gap-x-4 text-sm text-gray-500">
                {items}
            </div>
            <ChevronRightIcon />
        </div>
    );
};

export default Pagination;