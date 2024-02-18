import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = ({ handleChange }) => {
  const navigate = useNavigate();

  const btStyle = { margin: "8px 0" };
  const textStyle = { margin: "5px auto" };
  const avatarStyle = { backgroundColor: "#5cb35c" };
  const paperstyle = {
    padding: "20px",
    height: "67vh",
    width: "300px",
    margin: "0 auto",
  };

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    try {
      localStorage.setItem("user", JSON.stringify(values));

      const sessionUserDataJSON = sessionStorage.getItem("user1");
      const sessionUserData = JSON.parse(sessionUserDataJSON);

      const localUserDataJSON = localStorage.getItem("user");
      const localUserData = JSON.parse(localUserDataJSON);

      console.log("Session Storage User Data:", sessionUserData);
      console.log("Local Storage User Data:", localUserData);

      if (
        sessionUserData.email === localUserData.email &&
        localUserData.password === sessionUserData.password
      ) {
        console.log("Credentials matched. Navigating to Home...");
        navigate("/Home");
      } else {
        console.log("Credentials do not match or user data not found.");
      }
    } catch (error) {
      console.error("Error while processing form submission:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid >
      <Paper style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  variant="standard"
                  placeholder="Email"
                  fullWidth
                  style={textStyle}
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                 style={textStyle}
                  as={TextField}
                  type="password"
                  label="Password"
                  name="password"
                  variant="standard"
                  placeholder="Enter Password"
                  fullWidth
                  helperText={<ErrorMessage name="password" />}
                />
                <FormGroup style={textStyle}>
                  <Field
                    as={FormControlLabel}
                    name="remember"
                    control={<Checkbox />}
                    label="Remember me"
                  />
                </FormGroup>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={btStyle}
                >
                  {props.isSubmitting ? "Submitting..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography style={textStyle}>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography style={textStyle}>
            Do you have an account?
            <Link
              href="#"
              onClick={() => handleChange("event", 1)}
              sx={{ ml: "4px" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
