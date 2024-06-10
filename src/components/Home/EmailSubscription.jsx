import { Box, Button, Input, Typography } from "@mui/material";

function EmailSubscription() {
  return (
    <Box
      component={"div"}
      sx={{
        // p: { md: "3rem", lg: "5rem" },
        p: { xs: "1rem", sm: "3rem", md: "5rem 8rem" },
        // background:
        //   "url(https://res.cloudinary.com/dov9kdlci/image/upload/v1708434278/Shapes.1ca18eb4_ahjxch.png) #7f57f1",
        background: "url(/images/mail.png) #f7941f",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "100px 0",
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-end" },
      }}
      width={1}
    >
      <Box
        sx={{
          maxWidth: { xs: "85%", sm: "600px" },
          display: "flex",
          flexDirection: "column",
          margin: { xs: "auto", md: "unset" },
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
            fontSize: { xs: "1.2rem", sm: "3rem" },
          }}
        >
          Don&apos;t miss a thing!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            lineHeight: { xs: 1.2, sm: "2rem" },
            color: "hsla(0,0%,100%,.8)",
            marginBottom: "1.375rem",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          Subscribe with Email and loads of interesting news will be sent to you
          on a daily basis.
        </Typography>
        <Box display={"flex"} width={1}>
          <Input
            disableUnderline={true}
            color="rise"
            sx={{
              background: "white",
              borderRadius: "0.5rem 0 0 0.5rem",
              boxShadow: "none",
              outline: "none",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: { xs: "0.25rem 1.5rem", sm: "0.5rem 1rem" },
              letterSpacing: "0.4px",
            }}
            placeholder="Your email here"
            fullWidth
            id="fullWidth"
          />
          <Button
            variant="contained"
            color="rise"
            sx={{
              p: { xs: "0rem 2rem", sm: "0.5rem 2.5rem" },
              borderRadius: "0 0.5rem 0.5rem 0",
              fontSize: { xs: "0.8rem", sm: "1rem" },
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
