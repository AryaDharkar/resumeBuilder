import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Step4 = ({ setSelectedIndex }) => {
  const [skills, setSkills] = useState([""]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
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

    // Filter out empty skills
    const filteredSkills = newSkills.filter((skill) => skill !== "");

    // Ensure there's always at least one empty field
    if (
      filteredSkills.length === 0 ||
      filteredSkills[filteredSkills.length - 1] !== ""
    ) {
      filteredSkills.push("");
    }

    setSkills(filteredSkills);
  };

  const handleSubmit = () => {
    const updatedUserData = {
      ...userData,
      step4: skills.filter((skill) => skill !== ""),
    };
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    setSelectedIndex(4);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
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
        Next
      </Button>
    </Box>
  );
};

export default Step4;
