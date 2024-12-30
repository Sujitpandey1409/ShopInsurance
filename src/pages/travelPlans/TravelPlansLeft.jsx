import React from 'react'
import LeftSectionCard from './LeftSectionCard'
import { SiTata } from "react-icons/si";
import './TravelPlansLeft.css'
import AddonsForm from './AddonsForm';
// import FilterAccordion from './FilterAccordion';

export default function VehiclePlansLeft() {
    return (
        <div className='vehicle-plan-left' style={{ overflowY:"auto", display:'grid', gap:'20px'}}>
            <LeftSectionCard IconImage={SiTata} title={'CH01CD7170'} text={'1210 BUS STR 48'} />
            <AddonsForm />
        </div>
    )
}
