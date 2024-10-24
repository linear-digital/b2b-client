import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Pagination as AntPagination } from 'antd';
const Pagination = ({ pages, active }: { className?: string, pages: number, active: number, }) => {

    const router = useRouter()
    const updatepages = (value: number) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', `${value}`)
        router.push(`?${searchParams}`)
    }
    return (
        <div >
            <AntPagination
                showSizeChanger={false}
                onChange={(e) => updatepages(e)}
                defaultCurrent={active}
                total={pages}
                pageSize={21}
            />
        </div>
    );
};

export default Pagination;