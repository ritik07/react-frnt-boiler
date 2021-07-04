import React from 'react'
import DoctorCategory from './DoctorCategory'
import GetSecondConsultation from './GetSecondConsultation'
import HowDoesSCWorks from './HowDoesSCWorks'
import SpecialDoctors from './SpecialDoctors'
import Testimonials from './Testimonials'
import WhyChooseSecondConsultation from './WhyChooseSecondConsultation'
import WhySecondConsultation from './WhySecondConsultation'

const WebHome = () => {
    return (
        <div>
            <GetSecondConsultation/>
            <DoctorCategory/>
            <WhySecondConsultation/>
            <WhyChooseSecondConsultation/>
            <HowDoesSCWorks/>
            <SpecialDoctors/>
            <Testimonials/>
        </div>
    )
}

export default WebHome
