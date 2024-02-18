import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Signup = () => {
  const avatarStyle = { backgroundColor: "#5cb35c" };
  const headerStyle = { margin: 0 };
  const textStyle = { margin: "5px auto" };
  const paperStyle = {
    padding: "20px",
    width: "300px",
    margin: "0 auto",
    height:'680px'
    
  };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "", 
    password: "",
    confirmPassword: "",
    termsAndconditions: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Select a valid gender")
      .required("Gender is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    termsAndconditions: Yup.string().oneOf(
      ["true"],
      "You must accept the terms and conditions"
    ),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    let email = values.email;
    let password = values.password;
    let data = { email, password };

    data = JSON.stringify(data);  
    sessionStorage.setItem("user1", data); 
    
   
    
    setSubmitting(false);
  };
  
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill the form to created an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              <Field
               style={textStyle}
                as={TextField}
                fullWidth
                label="Name"
                name="name"
                variant="standard"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
               style={textStyle}
                as={TextField}
                fullWidth
                label="Email"
                name="email"
                variant="standard"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl  style={{marginBottom:'0'}}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Field
                  as={RadioGroup}
                  style={{ display: "initial" }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="none"
                  name="gender"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText><ErrorMessage name='gender'/></FormHelperText>
              <Field
                as={TextField}
               
                fullWidth
                name="phoneNumber"
                type='number'
                label="Phone Number"
                variant="standard"
                helperText={<ErrorMessage name="phoneNumber" />}
              />
              <Field
               style={textStyle}
                as={TextField}
                fullWidth
                name="password"
                type='password'
                label="Password"
                variant="standard"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
               style={textStyle}
                as={TextField}
                fullWidth
                label="Confirm Password"
                type='password'
                variant="standard"
                name="confirmPassword"
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndconditions" />}
                  label="I accept the terms and conditions."
                />
              </FormGroup>
              <FormHelperText><ErrorMessage name='termsAndconditions'/></FormHelperText>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                {props.isSubmitting ? "Submitting..." : "Signup"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
