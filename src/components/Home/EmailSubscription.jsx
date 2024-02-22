import { Box, Button, Input, Typography } from "@mui/material";

function EmailSubscription() {
  return (
    <Box
      component={"div"}
      sx={{
        p: { md: "3rem", lg: "5rem" },
        // background:
        //   "url(https://res.cloudinary.com/dov9kdlci/image/upload/v1708434278/Shapes.1ca18eb4_ahjxch.png) #7f57f1",
        background: "url(/images/bg.png) #7f57f1",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "100px 0",
        display: "flex",
        justifyContent: "flex-end",
      }}
      width={1}
    >
      <Box
        sx={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            letterSpacing: "1px",
            fontFamily: "playfair display",
            fontWeight: "bold",
            color: "white",
            mb: "0.5rem",
            fontSize: "3rem",
          }}
        >
          Don&apos;t miss a thing!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            lineHeight: "2rem",
            color: "hsla(0,0%,100%,.8)",
            marginBottom: "1.375rem",
            fontSize: "1rem",
          }}
        >
          Subscribe with Email and loads of interesting news will be sent to you
          on a daily basis.
        </Typography>
        <Box display={"flex"} width={1}>
          <Input
            disableUnderline={true}
            sx={{
              background: "white",
              color: "gray",
              borderRadius: "0.5rem 0 0 0.5rem",
              boxShadow: "none",
              outline: "none",
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              letterSpacing: "0.4px",
            }}
            placeholder="Your email here"
            fullWidth
            id="fullWidth"
          />
          <Button
            variant="contained"
            sx={{
              p: "0.5rem 2.5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: "1rem",
              background: "#7f57f1",
              letterSpacing: "0.4px",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EmailSubscription;
