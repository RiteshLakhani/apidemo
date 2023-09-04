import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function GetDetails()
{
    const param = useParams();
    const [ dem, setDem ] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://649e4249245f077f3e9c380a.mockapi.io/CarDemo'+'/'+param.id)
      .then((res)=>{return res.json()})
      .then((res)=>{setDem(res);});    
    },[]);

    return(
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="card col-3 text-align-center ">
                    <img src={dem.Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            ID: {dem.id}
                            <br />
                            Name: {dem.Name}
                            <br />
                            City: {dem.City}
                            <br/>
                            Country:{dem.Country}
                        </p>
                        <Link to={'/'} class="btn btn-primary">Back</Link>
                        <Link to={"/edit/"+param.id} className = "btn btn-dark">Edit</Link>
                        <button class="btn btn-danger" onClick={()=>{
                            fetch('https://649e4249245f077f3e9c380a.mockapi.io/CarDemo'+"/"+dem.id,{method:"Delete"}).then((res)=>{navigate("/")});
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetDetails;