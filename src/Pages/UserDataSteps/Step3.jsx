import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

// Import userData from localStorage if it exists
let userData = {};
const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
    userData = JSON.parse(storedUserData);
}

const Step3 = ({ setSelectedIndex }) => {
    const [educationDetails, setEducationDetails] = useState((userData.step3) ? userData.step3.educationDetails : [{ degree: '', institution: '', year: '' }]);

    const handleAddEducation = () => {
        setEducationDetails([...educationDetails, { degree: '', institution: '', year: '' }]);
    };

    const handleChange = (index, event) => {
        const values = [...educationDetails];
        values[index][event.target.name] = event.target.value;
        setEducationDetails(values);
    };

    const handleSubmit = () => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        userData.step3 = { educationDetails };
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Education details saved:', userData);
    };


    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Education Details
            </Typography>
            {educationDetails.map((education, index) => (
                <Grid container spacing={3} key={index}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            name="degree"
                            label="Degree"
                            fullWidth
                            value={education.degree}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            name="institution"
                            label="Institution"
                            fullWidth
                            value={education.institution}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            name="year"
                            label="Year"
                            fullWidth
                            value={education.year}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </Grid>
                </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={handleAddEducation}>
                Add Education
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
                Next
            </Button>
        </Box>
    );
};

export default Step3;