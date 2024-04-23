import { ReadMore } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";

const list = [
  {
    name: "Noah Realestate",
    link: "real-estate/abay-homes-real-estate/gotera-kera-area",
  },
  {
    name: "Abay Homes Realestate",
    link: "real-estate/abay-homes-real-estate/gotera-kera-area",
  },
  {
    name: "Dalol Realestate",
    link: "real-estate/abay-homes-real-estate/gotera-kera-area",
  },
];

function RealEstateCard({ name, imgUrl, siteName, url, desc, number }) {
  const router = useRouter();

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Link
        // href={url || "/realestate"}
        onClick={() => router.push(`/${url}`)}
        underline="none"
      >
        <Box
          width={1}
          height={1}
          display={"flex"}
          // flexDirection={"column"}
          overflow="hidden"
          sx={{
            "&:hover>img": { transform: "scale(1.05)" },
          }}
        >
          <Box
            component={"img"}
            src={imgUrl || "/images/project3.jpg"}
            width={"50%"}
            sx={{
              aspectRatio: "1",
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
              mb={"1rem"}
              display={{ xs: "none", md: "block" }}
            >
              {desc ||
                "This Unique Residential Project Is Located In Addis Ababa Close To Friendship Park."}
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              bgcolor={"background.lighter"}
              p={"0.5rem"}
              // mt={"auto"}
              flex={1}
              borderRadius={"0.5rem"}
            >
              <Typography
                color={"rise.main"}
                fontSize={"1.1rem"}
                fontWeight={"bold"}
              >
                Currently ongoing projects
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"0.5rem"}
              >
                {list.slice(0, number).map((realestate) => (
                  <Button
                    // href={`/${realestate.link}`}
                    // LinkComponent={"a"}
                    color="rise"
                    key={realestate.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/${realestate.link}`);
                    }}
                    sx={{
                      textWrap: "nowrap",
                      textTransform: "capitalize",
                      justifyContent: "flex-start",
                      transition: "all 0.3s",
                      "&:hover::after": {
                        width: "calc(100%)",
                      },
                      "&:hover": {
                        transform: "translateX(10px)",
                        width: "calc(100% - 2rem)",
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
                    {realestate.name}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}

export default RealEstateCard;
