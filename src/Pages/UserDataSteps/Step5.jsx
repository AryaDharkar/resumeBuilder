import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const ResumeForm = ({ setSelectedIndex }) => {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.step5) {
      setSummary(userData.step5.summary);
    }
  }, []);

  const handleInputChange = (e) => {
    setSummary(e.target.value);
  };

  const handleSave = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    userData.step5 = { summary };
    localStorage.setItem("userData", JSON.stringify(userData));
    setSelectedIndex(5);
  };

  const handleGenerate = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "summarybuilder",
          prompt:
            "Write a SUMMARY for the data: " +
            JSON.stringify(userData.step2) +
            JSON.stringify(userData.step3) +
            JSON.stringify(userData.step4),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let finalResponse = ""; // To accumulate json.response values

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Decode chunk to text
        buffer += decoder.decode(value, { stream: true });

        // Split buffered text by newlines (or other delimiters your API uses)
        const parts = buffer.split("\n");

        // Process all complete parts except the last (may be incomplete)
        for (let i = 0; i < parts.length - 1; i++) {
          if (parts[i].trim()) {
            try {
              const json = JSON.parse(parts[i]);
              if (json.response) {
                // Check if json.response exists
                finalResponse += json.response; // Append response
                setSummary(finalResponse);
              }
            } catch (e) {
              console.error("JSON parse error:", e);
            }
          }
        }

        // Keep the last incomplete part in the buffer for the next chunk
        buffer = parts[parts.length - 1];
      }

      // Handle any remaining data in the buffer
      if (buffer.trim()) {
        try {
          const json = JSON.parse(buffer);
          if (json.response) {
            // Check if json.response exists
            finalResponse += json.response; // Append response
          }
        } catch (e) {
          console.error("JSON parse error at end:", e);
        }
      }
    } catch (error) {
      console.error("Error in handleGenerate:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Resume Summary
      </Typography>
      <TextField
        label="Summary"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={summary}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: "10px" }}
      >
        Next
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleGenerate}
        style={{ marginTop: "10px", marginLeft: "10px" }}
      >
        Generate
      </Button>
    </Container>
  );
};

export default ResumeForm;
