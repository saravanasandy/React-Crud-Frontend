import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = () => {

  const notify = () => toast( `✅ New User Created!`);

  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter name";
      }
      if (values.position === "") {
        errors.position = "Please Enter Position";
      }
      if (values.salary === "") {
        errors.salary = "Please Enter Salary";
      }
      return errors;
      // return {} means success.
    },
    onSubmit: async (values) => {
      // console.log(values);
      let user = await axios.post('https://6411ca9a37c88aa434a1bc78.mockapi.io/users',values);
      // alert("User has Created...")
      
     
    },
  });

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <label>name</label>
              <input
                type="text"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />

              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-4">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-4">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
            </div>
            <div className="col-lg-4">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>
            <div className="col-lg-4">
              <label>Start date</label>
              <input
                type="text"
                className="form-control"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                name="startDate"
              />
            </div>
            <div className="col-lg-4">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
              <span style={{color: "red"}}>{formik.errors.salary}</span>
            </div>
            <div className="col-lg-2">
              <br />
              <input
                type="submit"
                className="form-control btn-primary"
                value="submit"
                disabled = {!formik.isValid}
                onClick = {notify}
              />
               <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
