import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logout from '../logout'
import InputArea from '@/ui/inputs-area'
import Link from 'next/link'
import { Button } from '@/ui'
import UserSignupEdit from '@/ui/user-signup-edit'
import OnboardModal from '@/ui/onboard-model'
import axios from 'axios'

interface UserDataProps {
    _id: string;
    fullName: string;
    email: string;
    gender: string;
    city: string;
    state: string;
    pin?: number | string ;
    createdAt: string;
    field_of_study: string;
    level_of_study: string;
    __v?: number;
    twelve_percentage?: number;
    father_yearly_income?: number
    category?: string
}

const UserProfile: React.FC<UserDataProps> = ({
    _id,
    fullName,
    email,
    gender,
    city,
    state,
    pin,
    createdAt,
    field_of_study,
    level_of_study,
    __v,
    twelve_percentage,
    father_yearly_income,
    category

}) => {
    const [isEditFormVisible, setEditFormVisible] = useState<boolean>(false);

    const handleEditFormToggle = () => {
        setEditFormVisible(!isEditFormVisible);
    };

    const [userData, setUserData] = useState<UserDataProps | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const accessToken = sessionStorage.getItem('token');
            // console.log("token", accessToken)
            const response = await axios.get('http://localhost:9000/user', {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            setUserData(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchUserData();
    }, []);

  
    if (!userData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className='pt-20 hidden lg:block' style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 50%, var(--color-white) 50%)' }}>
                <div className='flex justify-center items-center '>
                    <Image src='/Scholarship-dum-images/cover.jpg' width={1008} height={1008} className='rounded-t-large ' alt='img-1' />
                </div>
            </div>
            <div key={_id} className="bg-white pl-10 lg:pl-32 pr-10 lg:pr-32 pt-24 lg:pt-0 overflow-hidden rounded-lg mb-10">
                <div className="px-4 py-2 sm:px-6 border-t border-r border-l border-grey-300">
                    <h1 className="font-semibold">{userData.fullName}</h1>
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
                                    <InputArea label="Full Name" value={userData.fullName} />
                                    <InputArea label="Email" value={userData.email} />
                                    <InputArea label="Gender" value={userData.gender} />
                                    <InputArea label="Date Of Birth" value={userData.createdAt.slice(0,10)} />
                                    <InputArea label="Country" value="India" />
                                    <InputArea label="State" value={userData.state} />
                                    <InputArea label="Postal Code" value={userData.pin} />
                                    <InputArea label="Education" value={userData.level_of_study} />
                                    <InputArea label="Course" value={userData.field_of_study} />
                                    <InputArea label="12th Percentage" value={userData.twelve_percentage} />
                                    <InputArea label="Family Income Yearly(in lakhs)" value={userData.father_yearly_income} />
                                    <InputArea label="category" value={userData.category} />
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <OnboardModal />
            </div>
        </div>

    )
}

export default UserProfile