import { Box, Button, TextField, Typography } from "@mui/material";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["arabic"] });

function ContactUs() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={{ xs: "1.25rem", md: "2rem", xl: "3rem" }}
      gap={{ xs: 2, md: 4 }}
      bgcolor={"riseLight.light"}
    >
      <Typography
        className={kufam.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"rise.dark"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Contact an Agent
      </Typography>
      <TextField
        id="outlined-basic"
        placeholder="Name"
        variant="outlined"
        size="small"
        sx={{
          "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
            p: { xs: "0", sm: "0.25rem", md: "0.5rem" },
          },
        }}
      />
      <TextField
        id="outlined-basic"
        placeholder="Email"
        type={"email"}
        size="small"
        variant="outlined"
        sx={{
          "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
            p: { xs: "0", sm: "0.25rem", md: "0.5rem" },
          },
        }}
      />
      <TextField
        id="outlined-basic"
        placeholder="Phone"
        size="small"
        type={"tel"}
        variant="outlined"
        sx={{
          "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
            p: { xs: "0", sm: "0.25rem", md: "0.5rem" },
          },
        }}
      />
      <TextField
        id="outlined-basic"
        placeholder="Message"
        size="small"
        variant="outlined"
        sx={{
          "&.MuiTextField-root .MuiInputBase-root.MuiOutlinedInput-root ": {
            p: { xs: "0.75rem", sm: "1rem", md: "1.5rem" },
          },
        }}
        multiline
        minRows={4}
      />
      <Button
        fullWidth={false}
        variant="contained"
        color="rise"
        sx={{ p: "1rem 2rem" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ContactUs;
