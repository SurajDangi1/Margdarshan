import Image from 'next/image'
import React from 'react'

export interface ScholarshipsProps {
    image: string
    deadlineDate: string
    scholarshipName: string
    scholarshipDescription: string
}


export const ScholarshipCard = ({ image, deadlineDate, scholarshipName, scholarshipDescription }: ScholarshipsProps) => {
    return (
        <div className='mb-4'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <Image className="w-full" src={image} alt="Sunset in the mountains" height={100} width={100} ></Image>
                <div className="px-6 py-4">
                <p className='text-gray-700 text-base mb-2'>Deadline Date : {deadlineDate}</p> 
                    <div className="font-bold text-xl mb-2">{scholarshipName}</div>
                    <p className="text-gray-700 text-base">
                     {scholarshipDescription}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-cherry-200 rounded-lg  ">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
