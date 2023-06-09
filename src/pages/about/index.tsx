import React, { useContext } from 'react'
import { ApiContext } from '../_app';


const About = () => {
  const apidata = useContext(ApiContext);
  console.log("data through api")
  console.log("data through api", apidata)
  return (
    <div>
        
    </div>
  )
}
                       
export default About