import { ReadMore } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";

function ProjectCard({ name, imgUrl, siteName, url, desc }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={url || "/realestate"} underline="none">
        <Box
          width={1}
          display={"flex"}
          flexDirection={"column"}
          overflow="hidden"
          sx={{
            "&:hover>img": { transform: "scale(1.05)" },
          }}
        >
          <Box
            component={"img"}
            src={imgUrl || "/images/project3.jpg"}
            width={1}
            sx={{
              aspectRatio: "16/9",
              objectFit: "cover",
              zIndex: -1,
              transition: "all .4s",
            }}
          />
          <Box
            width={1}
            display={"flex"}
            flexDirection={"column"}
            p={2}
            color={"rise.contrastText"}
            bgcolor={"rise.light"}
          >
            <Typography noWrap variant="h6" textTransform={"uppercase"}>
              {name || "Dalol Real Estate"}
            </Typography>
            <Typography>
              {siteName || "Kera dallol phase 2 apartment"}
            </Typography>
            <Divider flexItem sx={{ borderColor: "white", m: "1rem 0" }} />
            <Typography
              position={"relative"}
              width={1}
              component={"p"}
              fontSize={"0.9rem"}
              color={"lightgray"}
              display={{ xs: "none", md: "block" }}
            >
              {desc ||
                "This Unique Residential Project Is Located In Addis Ababa Close To Friendship Park, Adjacent To Colson Street Which Is In Line With Churchill."}
            </Typography>
            {/* <Button
              fullWidth
              endIcon={<ReadMore />}
              variant="contained"
              color="rise"
              sx={{ mt: "1rem" }}
            >
              Read More
            </Button> */}
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}

export default ProjectCard;
