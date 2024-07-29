import { riseFont } from "@/pages/_app";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

let errorList = [
  {
    code: 403,
    message: "To access the dashboard, use tablet, desktop or laptop",
  },
  {
    code: 404,
    message: "Page Not Found",
  },
  {
    code: 500,
    message: "Server Error, please try again",
  },
];

function ErrorPage({ errorCode }) {
  const router = useRouter();
  let error = errorList.find((error) => error.code === (errorCode || 500));

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack width={{ xs: "350px", md: "500px" }} position={"relative"}>
        <Box
          width={1}
          sx={{ aspectRatio: 1, opacity: 0.3 }}
          component={"img"}
          src="/logo1.png"
          position={"absolute"}
          left={"0%"}
          top={"-25%"}
        />
        <Typography
          textAlign={"center"}
          fontSize={{ xs: "6rem", md: "8rem" }}
          fontWeight={"bold"}
          className={riseFont.className}
          color={"red"}
        >
          {error.code}
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{ xs: "3rem", md: "4rem" }}
          className={riseFont.className}
        >
          OOPS
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{ xs: "1.2rem", md: "1.6rem" }}
          className={riseFont.className}
        >
          {error.message}
        </Typography>
        {errorCode == 403 && (
          <Button
            variant="contained"
            color="rise"
            onClick={() => router.back()}
            sx={{ alignSelf: "center", mt: "1rem" }}
          >
            Back
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export default ErrorPage;
