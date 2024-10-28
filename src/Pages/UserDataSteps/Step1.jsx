import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';

const Step1 = ({ setSelectedIndex }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        city: '',
        phone: '',
        mail: '',
        pincode: ''
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.step1) {
            setFormData(storedData.step1);
        }
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('userData')) || {};
        storedData.step1 = formData;
        localStorage.setItem('userData', JSON.stringify(storedData));
        setSelectedIndex(1); // Move the setSelectedIndex call here
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="mail"
                            label="Mail"
                            variant="outlined"
                            value={formData.mail}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="pincode"
                            label="Pincode"
                            variant="outlined"
                            value={formData.pincode}
                            onChange={handleChange}
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