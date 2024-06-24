import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function Services() {
  return (
<div>

    <div className='ser-nav'>

      
       <select>
               <option> yearly</option>
               <option> Monthly</option>
               <option> Daily</option>
             

       </select>

   <input type='search' placeholder='Search' />


  
    </div>

<div className='ser-titles'>

  <div className='subtitle1'>

    <h3> Earnings</h3>
    <h5>62%</h5>

  </div>

  <div className='subtitle1'>

<h3> Spend This Month</h3>
<h5>12%</h5>

</div>

<div className='subtitle1'>

<h3> Sales</h3>
<h5>40%</h5>

</div>

</div>

<div className='ser-graph'>


<BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={990}
      height={450}
    />

</div>

<div>

<div className='servmain1'>

<div className='sernav'>
  <h1>Projects</h1>
  <input type='search' placeholder='Search' /> 
  </div>
  <hr/>
<div className='title01'>
  <p> Project Breeze <br/>  started 12/05/23</p>
 
  <p> 124 hours</p>

  <p  className='prog'>In progress </p>
 
</div>
<hr/>


<div className='title01'>
  <p> Commond Project <br/>  started 12/05/23</p>
 
  <p> 241 hours</p>

  <p  className='hold'>On Hold </p>
 
</div>
<hr/>


<div className='title01'>
  <p> Project Zen <br/>  started 12/05/23</p>
 
  <p> 510 hours</p>

  <p  className='prog'>In progress </p>
 
</div>
<hr/>


<div className='title01'>
  <p> Project Mecha <br/>  started 12/05/23</p>
 
  <p> 96 hours</p>

  <p className='prog'>In progress </p>
 
</div>
<hr/>


</div>
</div>




 </div>
  )
}

export default Services
