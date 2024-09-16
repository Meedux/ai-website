"use client";
import Info from '@/components/about/Info';
import Photos from '@/components/about/Photos';
import Volunteer from '@/components/about/Volunteer';
import HeroOne from '@/components/Landing/HeroOne'
import React from 'react'

const About = () => {
  return (
    <>
        {/* Videos */}
        <HeroOne />
        {/* 3 Text */}
        <Info />
        {/* Image Header */}
        {/* Photo */}
        <Photos />
        {/* Volunteer */}
        <Volunteer />
    </>
  )
}

export default About