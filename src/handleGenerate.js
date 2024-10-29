const handleGenerate = async (
    prompt,
    setText
) => {
    try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log("Write a summary for the data: " + JSON.stringify(userData.step1) + JSON.stringify(userData.step2) + JSON.stringify(userData.step3) + JSON.stringify(userData.step4));
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "resubuilder",
                prompt: prompt,
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
                        if (json.response) { // Check if json.response exists
                            finalResponse += json.response; // Append response
                            console.log(finalResponse);
                            setText(finalResponse);
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
                if (json.response) { // Check if json.response exists
                    finalResponse += json.response; // Append response
                    console.log('Appended Response at End:', json.response);
                }
            } catch (e) {
                console.error("JSON parse error at end:", e);
            }
        }

        // Log the final accumulated response
        console.log('Final Accumulated Response:', finalResponse);

    } catch (error) {
        console.error('Error in handleGenerate:', error);
    }
};

export default handleGenerate;