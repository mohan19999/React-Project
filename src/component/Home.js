import React from 'react'
import { PieChart } from 'recharts';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Pie } from 'recharts';
import { BarChart } from 'recharts';
import { CartesianGrid } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';
import { Bar } from 'recharts';
import { LineChart } from '@mui/x-charts/LineChart';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import InterestsSharpIcon from '@mui/icons-material/InterestsSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import AddAlertSharpIcon from '@mui/icons-material/AddAlertSharp';
import{Link} from'react-router-dom';

import '../App.css';

function Home() {

    

    const data = [
        { 
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]



    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }

      ];

      
          
  return (
 
    
  
    <div className='homemain'>

      <h1> DashBoard </h1>
     
     <Row>
     
        <Col sm={4}>
       
        <div className='subhome'>

<PieChart width={325} height={250} className='pichat1' >
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#ae52aa" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#005de8" label />
</PieChart>
    
</div>
        </Col>




        <Col sm={8}>
        <div className='subhome1'>
                            
        <BarChart width={650} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#ae52aa" />
  <Bar dataKey="uv" fill="#005de8" />
</BarChart>
</div>
        </Col>
        
     </Row>
     


<div className= 'cards'>
<Link to='/about'>
<div className='childcard'>

<GridViewSharpIcon className='icons'/>
  <h1> PRODUCTS </h1>
  <p>260</p>
 
 </div>
 </Link>

 <div className='childcard1'>
 <InterestsSharpIcon className='icons' />
<h1> CATEGORIES </h1>
<p>58</p>
     
</div>


<div className='childcard2'>
< GroupSharpIcon className='icons' />
  <h1> CUSTMORES </h1>
  <p>48</p>
       
 </div>



 <div className='childcard3'>
< AddAlertSharpIcon className='icons' /> 
  <h1> ALERTS </h1>
  <p>56</p>
       
 </div>
     
    </div>


<div className='graphs'>

  <div className='subgraph'>

  <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        },
        {
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={300}
      margin={{ top: 10, bottom: 20 }}
    />

  </div>



</div>

    </div>


  )
}

export default Home
