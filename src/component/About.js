import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';


function About() {

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

 
  return (
    
    <div className='abtmain'>

  <span className='overvie'> OverView</span>

<div className='childmain'>
          <div className='subabt'>

            <p> From LastMonth</p>
            <h4> < MonetizationOnSharpIcon/> 825,256</h4>
            <h5>Total Revenue</h5>

          </div>


          
          <div className='subabt1'>

            <p> From LastMonth</p>
            <h4> < MonetizationOnSharpIcon/> 825,256</h4>
            <h5>Total Revenue</h5>

          </div>   


          
          <div className='subabt2'>

            <p> From LastMonth</p>
            <h4> < MonetizationOnSharpIcon/> 825,256</h4>
            <h5>Total Revenue</h5>

          </div>



          
          <div className='subabt3'>

            <p> From LastMonth</p>
            <h4> < MonetizationOnSharpIcon/> 825,256</h4>
            <h5>Total Revenue</h5>

          </div>
          
          </div>


<div className='salechart'>

<span className='salehead'> Sales Performance </span>

<div className='subsale1'>
<LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv'  },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
</div>

<div className='subsale2'>

<PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
      width={350}
    />
</div>
</div>


    </div>

    




  )
}

export default About
