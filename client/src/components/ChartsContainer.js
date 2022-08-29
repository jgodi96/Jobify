import React, {useState} from 'react'

import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'

const ChartsContainer = () =>{
    const {monthlyApplications:data} = useAppContext()

    return (
        <Wrapper>
            <BarChart data={data}/>
            <AreaChart data={data}/>

        </Wrapper>
    )
}

export default ChartsContainer;