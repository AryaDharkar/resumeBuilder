import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UserData = () => {
  return (
    <>
      <div className="m-10 max-w-3xl">
        <h1>Please furnish your details</h1>
        <div className="max-w-2xl">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-password-input"
              label="Name"
              type="text"
              autoComplete="current-password"
              required
            />
            <TextField
              id="outlined-password-input"
              label="Summary"
              type="text"
              autoComplete="current-password"
              required
            />
            <TextField
              id="outlined-password-input"
              label="Education"
              type="text"
              autoComplete="current-password"
              required
            />
            <TextField
              id="outlined-password-input"
              label="Projects"
              type="text"
              autoComplete="current-password"
              required
            />
          </Box>
        </div>
      </div>
    </>
  );
};
export default UserData;
