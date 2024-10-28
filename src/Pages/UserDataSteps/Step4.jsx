import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Step4 = ({ setSelectedIndex }) => {
    const [skills, setSkills] = useState(['']);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setUserData(parsedData);
            if (parsedData.step4) {
                setSkills(parsedData.step4);
            }
        }
    }, []);

    const handleSkillChange = (index, event) => {
        const newSkills = [...skills];
        newSkills[index] = event.target.value;
        setSkills(newSkills);

        if (index === skills.length - 1 && event.target.value !== '') {
            setSkills([...skills, '']);
        }
    };

    const handleSubmit = () => {
        const updatedUserData = { ...userData, step4: skills.filter(skill => skill !== '') };
        setUserData(updatedUserData);
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setSelectedIndex(5);
    };

    return (
        <Box >
            {skills.map((skill, index) => (
                <TextField
                    key={index}
                    label={`Skill ${index + 1}`}
                    value={skill}
                    onChange={(event) => handleSkillChange(index, event)}
                    margin="normal"
                    fullWidth
                />
            ))}
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default Step4;