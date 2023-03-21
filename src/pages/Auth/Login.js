import {
  Box,
  Typography,
  Divider,
  styled,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { SwipeableStepper } from '../Shared';
import "./Auth.css";
import { Input } from "../Shared";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../app/slice/authSlice";
import { validateLogin } from "../../Helpers/Validations";
import bgImg from '../../Assets/Images/bg-collage.jpg'


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
    opacity: 0.9,
    height: "80%",
  },
}));

const Login = () => {

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
    show_password: "false",
    button_disable: false,
    error: { username: null, password: null },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleshowPassword = () => {
    setValues((prevState) => {
      return {
        ...prevState,
        show_password: prevState.show_password==='true' ? "false" : "true",
      };
    });
  }; 

  // Call on Form Submit
  const validateForm = (event, type) => {
    event.preventDefault();
    let validate = validateLogin({
      username: values.username,
      password: values.password,
    });
    setValues((prevState) => {
      return {
        ...prevState,
        error: validate.errors,
      };
    });
    if (validate.isValid) handleLogin(event, type);
  };


  const handleLogin = async (e, type) => {
    e.preventDefault();

    let login_Data = {};

    if (type === "test") {
       login_Data = {
        username:"karishma@gmail.com",
        password: "abc@123",
      }
      
    } else {
      login_Data = { username: values.username, password: values.password };
    }

    dispatch(loginUser(login_Data)).unwrap()
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
              error: { username: null, password: null },
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
          src={bgImg}
          alt="bg-img"
          className="bg-img"
        />
        <AuthContainer>
          <form className="auth-form" 
            // onSubmit={(e) => handleLogin(e)}
            noValidate
            onSubmit={(e) => validateForm(e, "user")}
          >
            <Typography variant="h6" sx={{ color: "secondary" }} mt={2}>
              Blithe IN
              <br />
              <span></span>
            </Typography>
            <Typography variant="body2">
              A Proffessional networking site for healthcare proffessionals..
            </Typography>
            <Divider className="divider">LOGIN</Divider>

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
                type={values.show_password === "true"? "text": "password"}
                name={"password"}
                value={values.password}
                onChange={handleInputChange}
                label="Password"
                inputicon="true"
                show_password={values.show_password}
                handle_action = {handleshowPassword}
              />
              <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.password}
              </FormHelperText>
            </FormControl>

            <Box>
              Don't have an account <Link to="/signup">Signup</Link>
            </Box>
            <Button variant="contained" onClick={(e) => handleLogin(e, "test")}>
              Guest Login 
            </Button>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </AuthContainer>
      </CustomStack>
    </>
  );
};

export default Login;
