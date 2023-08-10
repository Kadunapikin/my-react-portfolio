import React from 'react'
import { VerticalTimeLine, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeLine linecolor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='20011-2013' 
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}>
          <h3 className='vertical-timline-element-title'>Nuhu Bamalli Polytechnic, Zaria KAduna State</h3>
          <p>Higher National Diploma in Agricultural Extension and Management</p>
        </VerticalTimelineElement>
      </VerticalTimeLine>
    </div>
  )
}

export default Experience