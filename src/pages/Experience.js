import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline linecolor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='20011-2013' 
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
          <h3 className='vertical-timline-element-title'>Nuhu Bamalli Polytechnic, Zaria KAduna State</h3>
          <p>Higher National Diploma in Agricultural Extension and Management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2021' 
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
          <h3 className='vertical-timline-element-title'>Washington University, USA</h3>
          <p>Project Management in Global Health (Remote)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2022-2023' 
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
          <h3 className='vertical-timline-element-title'>TOP Developers, Nigeria</h3>
          <p>Front End Web Development (Remote)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2015-2019' 
        iconStyle={{ background: '#9d35b', color: '#fff' }}
        icon={<WorkIcon />}>
          <h3 className='vertical-timline-element-title'>Lift Above Poverty Organization (LAPO) Micro Finance Bank Nigeria Limited.</h3>
          <p>Agricultural Client Support Officer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='20019-2022' 
        iconStyle={{ background: '#9d35b', color: '#fff' }}
        icon={<WorkIcon />}>
          <h3 className='vertical-timline-element-title'>Letshego MFB, Abuja.</h3>
          <p>Agricultural Team Lead.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2022-Till Date' 
        iconStyle={{ background: '#9d35b', color: '#fff' }}
        icon={<WorkIcon />}>
          <h3 className='vertical-timline-element-title'>TOP Software Developers,  Nigeria.</h3>
          <p>Volunteer Mentorship (Remote)</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience