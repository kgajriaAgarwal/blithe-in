import {  
  Box,
  Typography,
  Divider,  
  styled,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useThemeMode } from "../../Helpers/Context";
// import { SwipeableStepper } from '../Shared';
import "./Auth.css";
import { Input } from "../Shared";
import { useEffect, useState } from "react";
import { signUpUser } from "../../app/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { validateSignUp } from "../../Helpers/Validations";

  const CustomStack = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color:
    theme.palette.mode === "light"
        ? theme.palette.primary
        : theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      zIndex: 2,
    },
  }));

  const AuthContainer = styled(Box)(({ theme }) => ({
    backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.Background.primary
      : theme.palette.background.default,
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    width: "35%",
    height: "90%",
    margin: "5px",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      zIndex: 2,
      width: "80%",
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.background.primary
          : theme.palette.background.default,
      opacity: 0.8,
      height: "80%",
    },
  }));



const SignUp = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    last_name:"",
    first_name: "",
    username: "",
    password: "",
    confirm_password:"",
    show_password: "false",
    show_confirm_password: "false",
    button_disable: false,
    error: { username: null, password: null },
  });

  const handleshowPassword = (val) => {
    if(val === "password"){
      setValues((prevState) => {
      return {
        ...prevState,
        show_password: prevState.show_password==='true' ? "false" : "true",
      };
      });
    }else{
      setValues((prevState) => {
      return {
        ...prevState,
        show_confirm_password: prevState.show_confirm_password==='true' ? "false" : "true",
      };
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

    // Call on Form Submit
    const validateForm = (event) => {
      event.preventDefault();
      let validate = validateSignUp({
        first_name: values.first_name,
        last_name: values.last_name,
        username: values.username,
        password: values.password,
        confirm_password: values.confirm_password,
      });
      setValues((prevState) => {
        return {
          ...prevState,
          error: validate.errors,
        };
      });
      if (validate.isValid) handleSignup(event);
    };
  
    const handleSignup = async (e) => {
      e.preventDefault();
        const signupData = {
          firstName: values.first_name,
          lastName: values.last_name,
          username: values.username,
          password: values.password,
        };
      
        dispatch(signUpUser(signupData)).unwrap()
        .then(() => {
          navigate('/')
        })
    };
  
    useEffect(
      () =>
        setTimeout(
          () =>
            setValues((prevState) => {
              return {
                ...prevState,
                error: { first_name: null,
                  last_name: null,
                  username: null,
                  password: null,
                  confirm_password: null, },
              };
            }),
          10000
        ),
      [values.error]
    );

  return (
    <>
      <CustomStack>
        {/* <SwipeableStepper/> */}
        <img
          src={"http://nalccon2020.com/assets/one.gif"}
          alt="bg-img"
          className="bg-img"
        />
        <AuthContainer>
            <form className="auth-form" onSubmit={(e) => validateForm(e)}>
          <Typography variant="h6" sx={{ color: "secondary" }} mt={2}>
            Blithe IN
            <br />
            <span></span>
          </Typography>
          <Typography variant="body2">
            A Proffessional networking site for healthcare proffessionals..
          </Typography>
          <Divider className="divider">SIGNUP</Divider>

          <FormControl variant="outlined" className="input" size="small">
              <Input
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleInputChange}
                label="First name"
                inputicon="false"
              />
              <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.first_name}
              </FormHelperText>
            </FormControl>
            <FormControl variant="outlined" className="input" size="small">
              <Input
                type="text"
                name={"last_name"}
                value={values.last_name}
                onChange={handleInputChange}
                label="Last name"
                inputicon="false"
              />
               <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.last_name}
              </FormHelperText>
            </FormControl>
            <FormControl variant="outlined" className="input" size="small">
              <Input
                type="email"
                name={"username"}
                value={values.username}
                onChange={handleInputChange}
                label="Email"
                inputicon="false"
              />
              <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.username}
              </FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              className="input"
              size="small"
            >
              <Input
                id="password"
                type={values.show_password === "true"? "text": "password"}
                name={"password"}
                value={values.password}
                onChange={handleInputChange}
                label="Password"
                inputicon="true"
                show_password={values.show_password}
                handle_action = {()=> handleshowPassword("password")}
              />
               <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.password}
              </FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              className="input"
              size="small"
            >
              <Input
                id="confirm-password"
                type={values.show_confirm_password === "true"? "text": "password"}
                name={"confirm_password"}
                value={values.confirm_password}
                onChange={handleInputChange}
                label="Confirm Password"
                inputicon="true"
                show_confirm_password={values.show_confirm_password}
                handle_action = {()=> handleshowPassword("confirm_password")}
              />
               <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.confirm_password}
              </FormHelperText>
            </FormControl>
            <Box>
              Have an account ?? <Link to="/login">Login</Link>
            </Box>
            <Button variant="contained" type="submit">SignUp</Button>
          </form>
        </AuthContainer>
      </CustomStack>
    </>
  );
};

export default SignUp;
