import React from 'react'
import Advantages from './advantages/Advantages'
import Analysis from './analysis/Analysis'
import Banner from './banner/Banner'
import Firms from './firms/Firms'
import Hero from './Hero/Hero'
import Products from './products/Products'
import Works from './works/Works'

function Home() {
    return (
        <div>
            <Hero/>
            <Banner/>
            <Works/>
            <Firms/>
            <Advantages/>
            <Analysis/>
            <Products/>
        </div>
    )
}

export default Home
