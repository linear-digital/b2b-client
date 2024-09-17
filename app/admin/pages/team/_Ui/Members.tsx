import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { Button, Image, Modal, Popconfirm } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import UpdateMember from './UpdateTeamMember';

const Members = ({ data, refetch }: { data: any, refetch: any }) => {
    const deleteMember = async (id: number) => {
        const newMembers = data?.others?.members?.filter((item: any, index: number) => index !== id)
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${data?._id}`,
                body: {
                    others: {
                        members: newMembers
                    }
                }
            })
            toast.success("Data Deleted successfully")
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    const [show, setShow] = React.useState(false);
    const [selected, setSelected] = React.useState<any>(null);
    return (
        <React.Fragment>
            {
                show && <Modal title="Basic Modal" open={show} onCancel={() => {
                    setShow(false)
                    setSelected(null)
                }}>
                    {
                       <UpdateMember
                            rootData={data}
                            refetch={refetch}
                            selectedMember={selected}
                        />
                    }
                </Modal>
            }
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                {
                    data?.others?.members?.map((item: any, index: number) => (
                        <div key={index} className=''>
                            <Image src={item?.image} alt="login" className={'h-full w-full'} />
                            <h2 className='text-[18px] font-medium mt-3'>
                                {item?.name}
                            </h2>
                            <h5 className='text-[14px] text-[#898989]'>{item?.position}</h5>
                            <div className="flex mt-5 gap-4">
                                <Button type='primary'
                                    onClick={() => {
                                        setSelected(index)
                                        setShow(true)
                                    }}
                                >
                                    Update
                                </Button>
                                <Popconfirm
                                    title="Delete the member?"
                                    description="Are you sure to delete member?"
                                    onConfirm={() => deleteMember(index)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button danger>Delete</Button>
                                </Popconfirm>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default Members;