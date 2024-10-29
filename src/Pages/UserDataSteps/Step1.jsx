import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const Step1 = ({ setSelectedIndex }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    city: "",
    phone: "",
    email: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.step1) {
      setFormData(storedData.step1);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full Name is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.phone) newErrors.phone = "Phone No is required";
    if (!formData.email) newErrors.email = "email is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};
    storedData.step1 = formData;
    localStorage.setItem("userData", JSON.stringify(storedData));
    setSelectedIndex(1);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Information
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="fullname"
              label="Full Name"
              variant="outlined"
              value={formData.fullname}
              onChange={handleChange}
              error={!!errors.fullname}
              helperText={errors.fullname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="city"
              label="City"
              variant="outlined"
              value={formData.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="phone"
              label="Phone No"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="pincode"
              label="Pincode"
              variant="outlined"
              type="number"
              value={formData.pincode}
              onChange={handleChange}
              error={!!errors.pincode}
              helperText={errors.pincode}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Step1;
