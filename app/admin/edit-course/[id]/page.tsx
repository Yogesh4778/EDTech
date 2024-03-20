"use client";

import React from 'react'
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar"
import Heading from '../../../../app/utils/Heading';
import DashboardHeader from '../../../../app/components/Admin/DashboardHeader';
import EditCourse from "../../../components/Admin/course/EditCourse"


type Props = {}

const page = ({params}:any) => {
    const id = params?.id;

  return (
    <div>
        <Heading
          title="EduPulse - Admin"
          description="EduPulse is a platform for learning."
          keywords="WEBD, Programming, DSA"
        />
        <div className="flex">
            <div className='1500px:w-[16%] w-1/5'>
                <AdminSidebar />
            </div>
            <div className='w-[85%]'>
                <DashboardHeader />
                {/* <CreateCourse /> */}
                <EditCourse id={id}/>
            </div>
        </div>
    </div>
  )
}

export default page