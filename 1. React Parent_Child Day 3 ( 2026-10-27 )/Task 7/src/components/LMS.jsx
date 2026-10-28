import React from 'react'
import { Header } from './Header'
import { Dashboard } from './comps/Dashboard'
import { MyCourse } from './comps/MyCourse'
import { Assignment } from './comps/Assignment'
import { Footer } from './Footer'

function LMS() {
  return (
    <>
      <Dashboard />
      <MyCourse />
      <Assignment />
    </>
  )
}

export default LMS