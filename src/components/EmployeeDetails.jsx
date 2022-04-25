import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios"

export const EmployeeDetails = () => {
  const {id}=useParams();
  const [data,setData] = useState({});
  useEffect(()=>{
    axios.get(`http://localhost:8080/employee`).then((res)=>{
      setData(res.data);
      console.log(res.data);
    });
  },[]);
  return (
    <>
      <div className="user_details">
        <img className="user_image" src={data.image} />
        <h4 className="user_name">{data.employee_name}</h4>
        <span className="user_salary">{data.salary}</span>
        <span className="tasks">
          <li className="task">{data.tasks[0]}</li>
          <li className="task">{data.tasks[1]}</li>
        </span>
        Status: <b className="status">{data.status}</b>
        Title: <b className="title">{data.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    </>
  );
};
