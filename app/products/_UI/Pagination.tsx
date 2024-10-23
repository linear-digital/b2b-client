import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Pagination as AntPagination } from 'antd';
const Pagination = ({ className, pages, active, setActive }: { className?: string, pages: number, active: number, setActive: any }) => {
   
    const router = useRouter()
    console.log(pages);
    const updatepages = (value: number) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', `${value}`)
        router.push(`?${searchParams}`)
    }
    return (
        <div >
            <AntPagination
            showSizeChanger
            onChange={(e) => updatepages(e)}
            onShowSizeChange={(e) => { console.log(e); }}
            defaultCurrent={active}
            defaultPageSize={21}
            total={pages}
        />
        </div>
    );
};

export default Pagination;