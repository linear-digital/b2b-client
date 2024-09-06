import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Pagination = ({ className }: { className?: string }) => {
    return (
        <div className={`w-[436px] h-[55px] bg-white rounded-lg items-center justify-between flex px-4 ${className}`}>
            <ChevronLeftIcon />
            <div className="flex items-center gap-x-4 text-sm text-gray-500">
                <button className='h-[25px] w-[25px] flex justify-center  bg-primary text-white rounded-full items-center'>
                    1
                </button>
                <button>
                    2
                </button>
                <button>
                    3
                </button>
                <button>
                    4
                </button>
                <button>
                    5
                </button>
                <button>
                    6
                </button>
                <button>
                    7
                </button>
                <button>
                    8
                </button>
                <button>
                    9
                </button>
                <button>
                    10
                </button>
            </div>
            <ChevronRightIcon />
        </div>
    );
};

export default Pagination;