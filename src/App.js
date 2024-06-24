import React from 'react'
import Nav from './component/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
function App() {
  return (
    <div>
         <Row>
               <Router>
                        <Col sm={2} className='col1'> <Nav/> </Col>


                        <Col sm={10}> 
                        
                        <Routes>
                           <Route path='/' exact Component={Home}/>
                           <Route path='/about' exact Component={About}/>
                           <Route path='/services' exact Component={Services}/>
                           <Route path='/contact' exact Component={Contact}/>

                          
                            
                          
                        </Routes>
                        
                        
                        
                        
                        </Col>

               </Router>
          
          </Row>     


    </div>
  )
}

export default App

