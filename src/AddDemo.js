import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddDemo()
{
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const param = useParams();

    useEffect(()=>{
        fetch('https://649e4249245f077f3e9c380a.mockapi.io/CarDemo'+'/'+param.id)
        .then((res)=>{return res.json()})
        .then((res)=>{setData(res);});    
    },[]);

    return(
        <table className = "table container">
            <tr>
                <td className = "row m-3">
                    <input type="text" className="form-control" placeholder="id" value={data.id} onChange={(e)=>{
                        setData({...data,ID:e.target.value})
                    }}></input>
                </td>
                <td className = "row m-3">
                    <input type="text" className="form-control" placeholder="id" value={data.Name} onChange={(e)=>{
                        setData({...data,Name:e.target.value})
                    }}></input>
                </td>
                <td className = "row m-3">
                    <input type="text" className="form-control" placeholder="id" value={data.City} onChange={(e)=>{
                        setData({...data,City:e.target.value})
                    }}></input>
                </td>
                <td className = "row m-3">
                    <input type="text" className="form-control" placeholder="id" value={data.Country} onChange={(e)=>{
                        setData({...data,Country:e.target.value})
                    }}></input>
                </td>
                <td className = "row m-3">
                    <input type="text" className="form-control" placeholder="id" value={data.Image} onChange={(e)=>{
                        setData({...data,Image:e.target.value})
                    }}></input>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="btn btn-warning btn-lg" onClick={()=>{
                        if(param.id>0)
                        {
                            fetch('https://649e4249245f077f3e9c380a.mockapi.io/CarDemo/'+param.id,{
                                method:"PUT",
                                body:JSON.stringify(data),
                                headers:{
                                    "content-type":"application/json"
                                }
                            }).then((res)=>{
                                navigate("/"+param.id);
                            });
                        }
                        else
                        {
                            fetch('https://649e4249245f077f3e9c380a.mockapi.io/CarDemo',{
                                method:"Post",
                                body:JSON.stringify(data),
                                headers:{
                                    "content-type":"application/json"
                                }
                            }).then((res)=>{
                                navigate("/");
                            });
                        }
                    }}>Submit</button>
                </td>
            </tr>

        </table>
    );
}

export default AddDemo;