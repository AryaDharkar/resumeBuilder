import React, { useState } from "react";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

export default function WorkExperience() {
  const [experience, setExperience] = useState("");

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the data to a server
    console.log("Submitted experience:", experience);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 4 }}
        >
          Select Your Experience Level
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              aria-label="experience"
              name="experience"
              value={experience}
              onChange={handleChange}
            >
              <FormControlLabel
                value="fresher"
                control={<Radio />}
                label="Fresher"
              />
              <FormControlLabel
                value="professional_less_than_5_yrs"
                control={<Radio />}
                label="Professional < 5 years"
              />
              <FormControlLabel
                value="professional_less_than_10_yrs"
                control={<Radio />}
                label="Professional < 10 years"
              />
              <FormControlLabel
                value="professional_less_than_15_yrs"
                control={<Radio />}
                label="Professional < 15 years"
              />
              <FormControlLabel
                value="professional_more_than_15_yrs"
                control={<Radio />}
                label="Professional > 15 years"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 4 }}
            disabled={!experience}
          >
            Submit
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}
