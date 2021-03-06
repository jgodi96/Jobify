import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom'


const initialState = {
  name: "",
  email: "",
  passsword: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate()
  // global state and useNavigate
  const {user,isLoading, showAlert, displayAlert, setupUser,loginUser } = useAppContext();
  const toggleMember = (e) => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();

      return;
    }
    const currentUser = { name, email, password };
    //if member then invoke login
    if (isMember) {
      loginUser(currentUser)
    } else {
      setupUser(currentUser);
    }
  };

  useEffect(()=>{ 
    if(user){
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
  }
  ,[user,navigate])
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}

        <div className="form-row">
          {/*Name Input*/}
          {!values.isMember && (
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}

          {/*Email Input*/}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/*Password Input*/}
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disable={isLoading}>
            submit
          </button>
          <p>
            {values.isMember ? "Not a member yet" : "Already a member?"}
            <button type="button" onClick={toggleMember} className="member-btn">
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
