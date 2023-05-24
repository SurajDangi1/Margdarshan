import React, { useState } from 'react'
import Image from 'next/image'
import Logout from '../logout'
import InputArea from '@/ui/inputs-area'
import Link from 'next/link'
import { Button } from '@/ui'
import UserSignupEdit from '@/ui/user-signup-edit'

const UserProfile = () => {
    const [isEditFormVisible, setEditFormVisible] = useState<boolean>(false);

    const handleEditFormToggle = () => {
        setEditFormVisible(!isEditFormVisible);
    };
    return (
        <div>
            <div className='pt-20 hidden lg:block' style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 50%, var(--color-white) 50%)' }}>
                <div className='flex justify-center items-center '>
                    <Image src='/Scholarship-dum-images/cover.jpg' width={1008} height={1008} className='rounded-t-large' alt='img-1' />
                </div>
            </div>
            <div className="bg-white pl-10 lg:pl-32 pr-10 lg:pr-32 pt-24 lg:pt-0 overflow-hidden rounded-lg mb-10">
                <div className="px-4 py-2 sm:px-6 border-t border-r border-l border-grey-300">
                    <h1 className="font-semibold">Tommy Herby</h1>
                </div>
                <div className="px-4 border border-grey-300 rounded-b-large ">
                    <div className='grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12  sm:divide-x lg:divide-x divide-grey-300'>
                        <div className='col-span-2'>
                            <div className='flex'>
                                <h1 className='px-4 py-2 font-medium'><Link href='/profile'>Account</Link></h1>
                            </div>
                            <h1 className='px-4 py-2 font-medium'><Logout /></h1>
                        </div>
                        <div className='col-span-10 sm:pl-10 lg:pl-10 sm:pr-10 lg:pr-10 pt-3 '>
                            <div className='flex justify-end items-end pb-5'>
                                {isEditFormVisible ? (<Button text='x' theme='secondary' onClick={handleEditFormToggle} />) : (<Button text='Edit' theme='secondary' onClick={handleEditFormToggle} />)}
                            </div>
                            {isEditFormVisible ? (<div><UserSignupEdit /></div>
                            ) : (
                                <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2  gap-5 mb-10'>
                                    <InputArea label='Full Name' value='Tommy' />
                                    <InputArea label='Email' value='Tommy@gmail.com' />
                                    <InputArea label='Gender' value='Male' />
                                    <InputArea label='Date Of Birth' value='31-2-2002' />
                                    <InputArea label='Country' value='India' />
                                    <InputArea label='State' value='Uttar Pardesh' />
                                    <InputArea label='Postal Code' value='313024' />
                                    <InputArea label='Education' value='Under Graduation' />
                                    <InputArea label='Course' value='B.tech.' />
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserProfile