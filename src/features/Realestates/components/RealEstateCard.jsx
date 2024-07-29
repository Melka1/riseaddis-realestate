import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";

function RealEstateCard({ name, imgUrl, url, description, activeProjects }) {
  const router = useRouter();

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Link href={url} underline="none" sx={{ cursor: "pointer" }}>
        <Box
          width={1}
          height={1}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          overflow="hidden"
          sx={{
            "&:hover>img": { transform: "scale(1.05)" },
          }}
        >
          <Box
            component={"img"}
            src={imgUrl || "Logo.png"}
            width={{ xs: "100%", sm: "50%" }}
            alt="real estate image"
            sx={{
              aspectRatio: { xs: "16/9", sm: "1" },
              objectFit: "cover",
              zIndex: -1,
              transition: "all .4s",
            }}
          />
          <Box
            width={{ xs: "100%", sm: "50%" }}
            display={"flex"}
            flexDirection={"column"}
            p={2}
            color={"rise.contrastText"}
            bgcolor={"riseDark.main"}
          >
            <Typography
              textTransform={"uppercase"}
              fontSize={{ xs: "0.9rem", sm: "1.5rem" }}
            >
              {name}
            </Typography>

            <Divider flexItem sx={{ borderColor: "white", m: "1rem 0" }} />
            <Typography
              position={"relative"}
              maxWidth={1}
              fontSize={{ sm: "1rem" }}
              color={"riseLight.main"}
              mb={"1rem"}
              display={{ xs: "none", sm: "block" }}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
            {activeProjects.length > 0 && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"background.lighter"}
                p={"0.5rem"}
                flex={1}
                borderRadius={"0.5rem"}
              >
                <Typography
                  color={"rise.dark"}
                  fontSize={{ xs: "0.8rem", sm: "1.1rem" }}
                  fontWeight={"bold"}
                >
                  Currently ongoing projects
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  borderRadius={"0.5rem"}
                >
                  {activeProjects?.map((activeProject, index) => {
                    return (
                      <Button
                        color="riseDark"
                        key={index}
                        sx={{
                          textWrap: "nowrap",
                          textTransform: "capitalize",
                          justifyContent: "flex-start",
                          transition: "all 0.3s",
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                          "&:hover::after": {
                            width: "calc(100% - 1rem)",
                          },
                          "&:hover": {
                            transform: "translateX(1rem)",
                            width: "calc(100% - 1rem)",
                          },
                          "&::after": {
                            position: "absolute",
                            content: "''",
                            width: 0,
                            height: " 2px",
                            left: 0,
                            bottom: "-5px",
                            backgroundColor: "addisLight.main",
                            transition: "width ease-in-out 0.3s",
                          },
                        }}
                      >
                        {activeProject}
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}

export default RealEstateCard;
