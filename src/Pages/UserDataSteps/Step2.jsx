import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const Step2 = ({ setSelectedIndex }) => {
    const [positions, setPositions] = useState([{ positionName: '', company: '', details: '', startDate: '', endDate: '' }]);
    const [projects, setProjects] = useState([{ projectName: '', description: '', startDate: '', endDate: '' }]);
    const [certifications, setCertifications] = useState([{ certificationName: '', issuer: '', date: '' }]);
    const [errors, setErrors] = useState({
        positions: [{ positionName: '', company: '', details: '', startDate: '', endDate: '' }],
        projects: [{ projectName: '', description: '', startDate: '', endDate: '' }],
        certifications: [{ certificationName: '', issuer: '', date: '' }]
    });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        if (userData.step2) {
            setPositions(userData.step2.positions || [{ positionName: '', company: '', details: '', startDate: '', endDate: '' }]);
            setProjects(userData.step2.projects || [{ projectName: '', description: '', startDate: '', endDate: '' }]);
            setCertifications(userData.step2.certifications || [{ certificationName: '', issuer: '', date: '' }]);
            setErrors({
                positions: userData.step2.positions.map(() => ({ positionName: '', company: '', details: '', startDate: '', endDate: '' })),
                projects: userData.step2.projects.map(() => ({ projectName: '', description: '', startDate: '', endDate: '' })),
                certifications: userData.step2.certifications.map(() => ({ certificationName: '', issuer: '', date: '' }))
            });
        }
    }, []);

    const handleChange = (section, index, event) => {
        const { name, value } = event.target;
        const values = [...section];
        values[index][name] = value;
        if (section === positions) setPositions(values);
        if (section === projects) setProjects(values);
        if (section === certifications) setCertifications(values);

        // Validate the input
        const newErrors = { ...errors };
        if (name === 'positionName' && value.trim() === '') {
            newErrors.positions[index][name] = 'Position Name is required';
        } else if (name === 'company' && value.trim() === '') {
            newErrors.positions[index][name] = 'Company is required';
        } else if (name === 'startDate' && !value) {
            newErrors.positions[index][name] = 'Start Date is required';
        } else if (name === 'endDate' && !value) {
            newErrors.positions[index][name] = 'End Date is required';
        } else if (name === 'endDate' && positions[index].startDate && value < positions[index].startDate) {
            newErrors.positions[index][name] = 'End Date cannot be earlier than Start Date';
        } else {
            newErrors.positions[index][name] = '';
        }
        setErrors(newErrors);
    };

    const handleAdd = (section, setSection, emptyItem) => {
        setSection([...section, emptyItem]);
        setErrors({ ...errors, [section]: [...errors[section], emptyItem] });
    };

    const handleSubmit = () => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        userData.step2 = { positions, projects, certifications };
        localStorage.setItem('userData', JSON.stringify(userData));
        setSelectedIndex(2);
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Job Experience
            </Typography>
            {positions.map((position, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <strong>{position.positionName}</strong> - {position.company}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Position Name"
                            name="positionName"
                            value={position.positionName}
                            onChange={(event) => handleChange(positions, index, event)}
                            error={!!errors.positions[index]?.positionName}
                            helperText={errors.positions[index]?.positionName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Company"
                            name="company"
                            value={position.company}
                            onChange={(event) => handleChange(positions, index, event)}
                            error={!!errors.positions[index]?.company}
                            helperText={errors.positions[index]?.company}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Details"
                            name="details"
                            value={position.details}
                            onChange={(event) => handleChange(positions, index, event)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Starting Date"
                            name="startDate"
                            type="month"
                            value={position.startDate}
                            onChange={(event) => handleChange(positions, index, event)}
                            error={!!errors.positions[index]?.startDate}
                            helperText={errors.positions[index]?.startDate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Ending Date"
                            name="endDate"
                            type="month"
                            value={position.endDate}
                            onChange={(event) => handleChange(positions, index, event)}
                            error={!!errors.positions[index]?.endDate}
                            helperText={errors.positions[index]?.endDate}
                        />
                    </Grid>
                </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={() => handleAdd(positions, setPositions, { positionName: '', company: '', details: '', startDate: '', endDate: '' })}>
                Add Position
            </Button>

            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Projects
            </Typography>
            {projects.map((project, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <strong>{project.projectName}</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Project Name"
                            name="projectName"
                            value={project.projectName}
                            onChange={(event) => handleChange(projects, index, event)}
                            error={!!errors.projects[index]?.projectName}
                            helperText={errors.projects[index]?.projectName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={project.description}
                            onChange={(event) => handleChange(projects, index, event)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Starting Date"
                            name="startDate"
                            type="month"
                            value={project.startDate}
                            onChange={(event) => handleChange(projects, index, event)}
                            error={!!errors.projects[index]?.startDate}
                            helperText={errors.projects[index]?.startDate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Ending Date"
                            name="endDate"
                            type="month"
                            value={project.endDate}
                            onChange={(event) => handleChange(projects, index, event)}
                            error={!!errors.projects[index]?.endDate}
                            helperText={errors.projects[index]?.endDate}
                        />
                    </Grid>
                </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={() => handleAdd(projects, setProjects, { projectName: '', description: '', startDate: '', endDate: '' })}>
                Add Project
            </Button>

            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Certifications
            </Typography>
            {certifications.map((certification, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            <strong>{certification.certificationName}</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Certification Name"
                            name="certificationName"
                            value={certification.certificationName}
                            onChange={(event) => handleChange(certifications, index, event)}
                            error={!!errors.certifications[index]?.certificationName}
                            helperText={errors.certifications[index]?.certificationName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Issuer"
                            name="issuer"
                            value={certification.issuer}
                            onChange={(event) => handleChange(certifications, index, event)}
                            error={!!errors.certifications[index]?.issuer}
                            helperText={errors.certifications[index]?.issuer}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Date"
                            name="date"
                            type="month"
                            value={certification.date}
                            onChange={(event) => handleChange(certifications, index, event)}
                            error={!!errors.certifications[index]?.date}
                            helperText={errors.certifications[index]?.date}
                        />
                    </Grid>
                </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={() => handleAdd(certifications, setCertifications, { certificationName: '', issuer: '', date: '' })}>
                Add Certification
            </Button>

            <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ ml: 2 }}>
                Next
            </Button>
        </Box>
    );
};

export default Step2;