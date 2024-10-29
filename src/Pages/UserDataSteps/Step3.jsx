import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Import userData from localStorage if it exists
let userData = {};
const storedUserData = localStorage.getItem("userData");
if (storedUserData) {
  userData = JSON.parse(storedUserData);
}

const Step3 = ({ setSelectedIndex }) => {
  const [educationDetails, setEducationDetails] = useState(
    userData.step3
      ? userData.step3.educationDetails
      : [{ degree: "", institution: "", year: "" }]
  );

  const handleAddEducation = () => {
    setEducationDetails([
      ...educationDetails,
      { degree: "", institution: "", year: "" },
    ]);
  };

  const handleChange = (index, event) => {
    const values = [...educationDetails];
    values[index][event.target.name] = event.target.value;
    setEducationDetails(values);
  };

  const handleDeleteEducation = (index) => {
    const values = [...educationDetails];
    values.splice(index, 1);
    setEducationDetails(values);
  };

  const handleSubmit = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    userData.step3 = { educationDetails };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("Education details saved:", userData);
    setSelectedIndex(3);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Education Details
      </Typography>
      {educationDetails.map((education, index) => (
        <Grid container spacing={3} key={index} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              name="degree"
              label="Degree"
              fullWidth
              value={education.degree}
              onChange={(event) => handleChange(index, event)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              name="institution"
              label="Institution"
              fullWidth
              value={education.institution}
              onChange={(event) => handleChange(index, event)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              name="year"
              label="Year"
              fullWidth
              value={education.year}
              onChange={(event) => handleChange(index, event)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <IconButton
              onClick={() => handleDeleteEducation(index)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Grid sx={{ mt: 2 }}>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddEducation}
          >
            Add Education
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step3;
