import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import HomeCards from '../components/HomeCards'
import ViewAlljobs from '../components/ViewAlljobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAlljobs />
    </>
  )
}

export default HomePage