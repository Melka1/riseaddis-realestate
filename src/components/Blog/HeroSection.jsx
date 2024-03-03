import { Box } from "@mui/material";

function BlogHeroSection() {
  return (
    <Box
      display={"flex"}
      width={1}
      minHeight={"60vh"}
      p={"10rem"}
      sx={{
        backgroundImage: "url(/images/Banner.png)",
        backgroundSize: "cover",
        backgroundPositionY: "100%",
      }}
    >
      {/* BlogHeroSection */}
    </Box>
  );
}

export default BlogHeroSection;
