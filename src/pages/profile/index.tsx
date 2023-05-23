import React from 'react';
import Image from 'next/image';

const UserProfile = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-secondary mb-52 w-3/4">
                <div className="flex justify-center items-center">
                    <Image src="/Scholarship-dum-images/resize.jpg" width={900} height={900} alt="img-1" />
                </div>
            </div>
        </div>
    );

    
};

export default UserProfile;
