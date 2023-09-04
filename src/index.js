import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route,Link, } from 'react-router-dom';
import GetDetails from './details';
import AddDemo from './AddDemo';

function Demo()
{
  const[ demo , setDemo] = useState([]);

  useEffect(()=>{
      fetch('https://649e4249245f077f3e9c380a.mockapi.io/CarDemo')
      .then((res)=>{return res.json()})
      .then((res)=>{setDemo(res)});    
  },[]);

  const formattedDemo = demo.map((dem)=>{
    return(
      <Link to={'/'+dem.id} class="nav nav-Link">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{dem.Name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{dem.City}</h6>
            <p class="card-text">{dem.Country}</p>
            <a href="#" class="card-link">{dem.Image}</a>
          </div>
        </div>
      </Link>
    )
  });

  return(
    <>
        <div className="container">
          <Link to='/add' className="btn btn-success btn-lg">Add Sports Person</Link>
          <div className = "row">{formattedDemo}</div>
        </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Demo/>}></Route>
      <Route path = '/:id' element={<GetDetails/>}></Route>
      <Route path='/add' element={<AddDemo />}></Route>
      <Route path='/edit/:id' element={<AddDemo/>}></Route>
      
    </Routes>
  </BrowserRouter>
);