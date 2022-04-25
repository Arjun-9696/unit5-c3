import {Navbar} from './Navbar';
import axios from 'axios';
import styled from "styled-components";


const Main =styled.div`display:grid`;

export const Home = () => {
  return (
    <>
    <Navbar/>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp"></span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated"></span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted"></span>
        </div>
        <div>
          Total New: <span className="total_new"></span>
        </div>
      </div>
</>
  );
};
