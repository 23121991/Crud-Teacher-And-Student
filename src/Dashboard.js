import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Listusers from './Listusers';
import Createuser from './Createuser';
import Createstudent from './Createstudent';
import Liststudents from './Liststudent';

function Dashboard() {
    return (
    <>       
        <h1 style={{color:'brown'}}> DASHBOARD OF STUDENTS & TEACHERS MANAGEMENT</h1>
        <h2 style={{color:'green'}}> <Link to="/Createuser" element={<Createuser />}>Create teacher</Link> | &nbsp;
             <Link to="/Listusers" element={<Listusers />}>Teachers List</Link> | &nbsp;
             <Link to="/Createstudent" element={<Createstudent />}>Create Student Info</Link> | &nbsp;
             <Link to="/Liststudent" element={<Liststudents />}>Students List</Link>
        </h2>
    </>
    );
} 
export default Dashboard;