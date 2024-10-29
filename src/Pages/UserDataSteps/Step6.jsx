import React, { useEffect, useState } from "react";
import Template2 from "../../Templates/Template2";

const Step6 = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let isMounted = true; // flag to track mount status

    const fetchData = async () => {
      try {
        const userDataFromLocalStorage = JSON.parse(
          localStorage.getItem("userData")
        );

        // Check if userData exists before proceeding
        if (!userDataFromLocalStorage) {
          console.error("No user data found in localStorage.");
          return;
        }

        const response = await fetch("http://localhost:11434/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "resubuilder",
            prompt: `Fill the resume template in a professional, ATS-friendly format for the data: ${JSON.stringify(
              userDataFromLocalStorage.step1
            )}${JSON.stringify(userDataFromLocalStorage.step2)}${JSON.stringify(
              userDataFromLocalStorage.step3
            )}${JSON.stringify(userDataFromLocalStorage.step4)}${JSON.stringify(
              userDataFromLocalStorage.step5
            )}`,
          }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let finalResponse = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const parts = buffer.split("\n");
          for (let i = 0; i < parts.length - 1; i++) {
            if (parts[i].trim()) {
              try {
                const json = JSON.parse(parts[i]);
                if (json.response) {
                  finalResponse += json.response;
                }
              } catch (e) {
                console.error("JSON parse error:", e);
              }
            }
          }
          buffer = parts[parts.length - 1];
        }

        if (buffer.trim()) {
          try {
            const json = JSON.parse(buffer);
            if (json.response) {
              finalResponse += json.response;
            }
          } catch (e) {
            console.error("JSON parse error at end:", e);
          }
        }
        console.log(finalResponse);
        // Parse finalResponse if it’s JSON formatted
        const parsedData = JSON.parse(finalResponse);
        if (isMounted) {
          setUserData(parsedData);
          console.log(parsedData.name);
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
        fetchData(); // Retry fetching data in case of error
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to set flag on unmount
    };
  }, []);

  const a4Style = {
    width: "210mm",
    height: "297mm",
    margin: "auto",
    padding: "20mm",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  };

  const handlePrint = () => {
    const printContents = document.getElementById("printableArea").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore the original content
  };

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      <div id="printableArea" style={a4Style}>
        {userData ? <Template2 data={userData} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Step6;
