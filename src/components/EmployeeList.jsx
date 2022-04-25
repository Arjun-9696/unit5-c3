import {Link} from 'react-router-dom';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
const YourStyledLink =styled(Link)`display:grid`;

export const EmployeeList = ()=>{
   const [data, setData] = useState({});
   useEffect(() => {
     axios.get(`http://localhost:8080/employee${id}`).then((res) => {
       setData(res.data);
       console.log(res.data);
     });
   });
  return (
    <>{
      data.map((elem) =>{
<YourStyledLink to={`/employees/${elem.id}}`}>
  <div className="list_container">
    {/* On clicking this card anywhere, user goes to user details */}
    <div className="employee_card">
      <img className="employee_image" src={elem.image} />
      <span className="employee_name">{elem.employee_name}</span>
      <span className="employee_title">{elem.title}</span>
    </div>
  </div>
</YourStyledLink>;
      })
    }
      
    </>
  );
 
};
