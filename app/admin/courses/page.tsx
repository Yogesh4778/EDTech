'use client'

import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar"
import React from 'react'
import AllCourses from "../../components/Admin/course/AllCourses"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
    <AdminProtected>
      <Heading
        title="EduPulse - Admin"
        description="EduPulse is a platform for learning."
        keywords="WEBD, Programming, DSA"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <AllCourses />
        </div>
      </div>
    </AdminProtected>
  </div>
  )
}

export default page