
  import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


  const Users = () => {  
      const [users ,setUsers] = useState([]);

      const [loading,setloading] = useState(false);

      useEffect(()=>{
        loadData();
      },[]);
    
      let loadData = async ()=>{
        setloading(true);
        let users = await axios.get('https://6411ca9a37c88aa434a1bc78.mockapi.io/users');
        console.log(users);
        setUsers(users.data)
        setloading(false);
      };

            let userDelete = async (id)=>{
              try {
                let ask = window.confirm(
                  "Do you want Delete this data"
                );
                if(ask){
                  await axios.delete(`https://6411ca9a37c88aa434a1bc78.mockapi.io/users/${id}`);
                  loadData();
                }
               
              } catch (error) {
                
              }
              
            }

  return (
  <div>
    <div className="container-fluid">
    

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i className="fa-sharp fa-solid fa-plus"></i> Create User
        </Link>
      </div>
  
      {
        loading ? <div className='loader-parent'><span className ="loader"></span></div> : <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>S.NO</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  users.map((values, index)=>{
                    return <tr key={index}>
                      <td>{index + 1 }</td>
                    <td>{values.name}</td>
                    <td>{values.position}</td>
                    <td>{values.office}</td>
                    <td>{values.age}</td>
                    <td>{values.startDate}</td>
                    <td>{values.salary}</td>
                    <td>
                      <Link to={`/portal/users/${values.id}`} className="btn btn-sm btn-warning">View</Link>&nbsp;
                      <Link to={`/portal/user/edit/${values.id}`} className="btn btn-sm btn-primary">Edit</Link>&nbsp;
                      <button className="btn btn-sm btn-danger" onClick={()=>userDelete(values.id) }>Delete</button>&nbsp;
                    </td>
                  </tr>
                  })
                }
                
             
             
              </tbody>
            </table>
          </div>
        </div>
      </div>

      }

      
    </div>
  </div>
  );
  };
  export default Users;

