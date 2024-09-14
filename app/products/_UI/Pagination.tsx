import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Pagination = ({ className, pages, active, setActive }: { className?: string, pages: number, active: number, setActive: any }) => {
    let items = []
    for (let index = 0; index < pages; index++) {
        items.push(index + 1)
    }
    return (
        <div className={`lg:w-[436px] w-full h-[55px] bg-white rounded-lg items-center justify-between flex px-4 ${className}`}>
            <button disabled={pages === 1} className='disabled:text-gray-400'>
                <ChevronLeftIcon />
            </button>
            <div className="flex items-center gap-x-4 text-sm text-gray-500">
                {
                    items.map((item, index) => (
                        <button key={index} className={`h-[25px] w-[25px] flex justify-center  ${active === item && "bg-primary text-white"}  rounded-full items-center`}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </button>
                    ))
                }

            </div>
            <button disabled={pages === 1} className='disabled:text-gray-400'>
                <ChevronRightIcon />
            </button>

        </div>
    );
};

export default Pagination;