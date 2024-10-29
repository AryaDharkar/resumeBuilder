import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Step2 = ({ setSelectedIndex }) => {
    const [positions, setPositions] = useState([{ positionName: '', company: '', details: '', startDate: '', endDate: '' }]);
    const [projects, setProjects] = useState([{ projectName: '', description: '', startDate: '', endDate: '' }]);
    const [certifications, setCertifications] = useState([{ certificationName: '', issuer: '', date: '' }]);
    const [errors, setErrors] = useState({ positions: [], projects: [], certifications: [] });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        if (userData.step2) {
            setPositions(userData.step2.positions || [{ positionName: '', company: '', details: '', startDate: '', endDate: '' }]);
            setProjects(userData.step2.projects || [{ projectName: '', description: '', startDate: '', endDate: '' }]);
            setCertifications(userData.step2.certifications || [{ certificationName: '', issuer: '', date: '' }]);
        }
    }, []);

    const handleChange = (section, index, name, value) => {
        const updatedSection = [...section];
        updatedSection[index][name] = value;
        
        // Update section state and reset error if value is not empty
        if (section === positions) setPositions(updatedSection);
        if (section === projects) setProjects(updatedSection);
        if (section === certifications) setCertifications(updatedSection);
        
        // Update errors
        const newErrors = { ...errors };
        newErrors[section] = newErrors[section] || [];
        newErrors[section][index] = newErrors[section][index] || {};
        newErrors[section][index][name] = value ? '' : `${name} is required`;
        setErrors(newErrors);
    };

    const handleAdd = (section, setSection, emptyItem) => {
        setSection([...section, emptyItem]);
        setErrors({ ...errors, [section]: [...(errors[section] || []), {}] });
    };

    const handleDelete = (section, setSection, index) => {
        const updatedSection = section.filter((_, i) => i !== index);
        setSection(updatedSection);
        
        const updatedErrors = { ...errors };
        updatedErrors[section] = (updatedErrors[section] || []).filter((_, i) => i !== index);
        setErrors(updatedErrors);
    };

    const handleSubmit = () => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        userData.step2 = { positions, projects, certifications };
        localStorage.setItem('userData', JSON.stringify(userData));
        setSelectedIndex(2);
    };

    const renderSection = (section, setSection, sectionName, fields, emptyItem) => (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {sectionName}
            </Typography>
            {section.map((item, index) => (
                <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                    {fields.map(({ name, label, type }) => (
                        <Grid item xs={12} sm={type === 'month' ? 6 : 12} key={name}>
                            <TextField
                                fullWidth
                                label={label}
                                name={name}
                                type={type || 'text'}
                                value={item[name]}
                                onChange={(e) => handleChange(section, index, name, e.target.value)}
                                error={!!errors[section]?.[index]?.[name]}
                                helperText={errors[section]?.[index]?.[name]}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={1}>
                        <IconButton onClick={() => handleDelete(section, setSection, index)} color="error">
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
            <Button variant="contained" onClick={() => handleAdd(section, setSection, emptyItem)}>
                Add {sectionName.slice(0, -1)}
            </Button>
        </Box>
    );

    return (
        <Box sx={{ mt: 4 }}>
            {renderSection(positions, setPositions, 'Positions', [
                { name: 'positionName', label: 'Position Name' },
                { name: 'company', label: 'Company' },
                { name: 'details', label: 'Details' },
                { name: 'startDate', label: 'Start Date', type: 'month' },
                { name: 'endDate', label: 'End Date', type: 'month' },
            ], { positionName: '', company: '', details: '', startDate: '', endDate: '' })}

            {renderSection(projects, setProjects, 'Projects', [
                { name: 'projectName', label: 'Project Name' },
                { name: 'description', label: 'Description' },
                { name: 'startDate', label: 'Start Date', type: 'month' },
                { name: 'endDate', label: 'End Date', type: 'month' },
            ], { projectName: '', description: '', startDate: '', endDate: '' })}

            {renderSection(certifications, setCertifications, 'Certifications', [
                { name: 'certificationName', label: 'Certification Name' },
                { name: 'issuer', label: 'Issuer' },
                { name: 'date', label: 'Date', type: 'month' },
            ], { certificationName: '', issuer: '', date: '' })}

            <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 4 }}>
                Next
            </Button>
        </Box>
    );
};

export default Step2;
