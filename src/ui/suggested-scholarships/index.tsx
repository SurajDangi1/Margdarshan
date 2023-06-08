import React, { useContext } from 'react'
import backgroundImage from "@/images/background-home.jpg";
import { Container, ScholarshipCard, ImagesArray } from "@/ui";
import { ApiContext } from '../../pages/_app';

const SuggestedScholarships = () => {
    const apidata = useContext(ApiContext);
 
    return (
        <div>
            <section>        
             <h2 className="text-title-2 lg:text-title-1 text-center">
              Suggested Scholarships
            </h2>
                <div className="container pt-10 pb-10">
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {apidata.map((e, idx) => (
                            <div key={idx}>
                                <ScholarshipCard
                                    deadlineDate={e.endDate.slice(0,10)}
                                    female={e.isFemaleOnly}
                                    image={ImagesArray[Math.floor(Math.random() * ImagesArray.length)]}
                                    scholarshipDescription={e.scholarshipDescription}
                                    scholarshipName={e.title}
                                    slug={`/suggested-scholarship/${e.slug}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </section>

        </div >
    )
}



export default SuggestedScholarships