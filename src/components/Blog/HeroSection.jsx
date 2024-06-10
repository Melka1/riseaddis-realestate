import { House } from "@mui/icons-material";
import { Avatar, Box, Divider, ListItemText, Typography } from "@mui/material";
import { Kufam, Montserrat } from "next/font/google";

const font2 = Kufam({ subsets: ["arabic"] });
const font = Montserrat({ subsets: ["cyrillic"] });

function BlogHeroSection({ date, header, title, name, role, subClass }) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={1}
      minHeight={{ xs: "30vh", sm: "30vh", md: "60vh" }}
      p={{ xs: "1.5rem", sm: "3rem", md: "6rem" }}
      pb={"2rem"}
      margin={"auto"}
    >
      <Box
        width={{ xs: "100%", sm: "90%", md: "70%" }}
        flexDirection={"column"}
        display={"flex"}
        alignItems={"flex-start"}
        zIndex={10}
        gap={"1rem"}
      >
        <Box
          display={"flex"}
          p={"0.5rem 1rem"}
          maxWidth={{ xs: "100%", sm: "50%" }}
          minWidth={"max-content"}
          gap={"0.5rem"}
          borderRadius={"0.5rem"}
          alignItems={"center"}
          // fontSize={"0.8rem"}
          sx={{
            backgroundColor: "addisLight.light",
            color: "rise.main",
            mb: "1rem",
          }}
        >
          <House />
          {date && (
            <>
              <Typography
                className={font.className}
                sx={{ textWrap: "nowrap" }}
                fontSize={{ xs: "0.8rem", sm: "1rem" }}
              >
                {date}
              </Typography>
              <Divider orientation="vertical" flexItem />
            </>
          )}
          <Typography
            className={font.className}
            fontSize={{ xs: "0.8rem", sm: "1rem" }}
          >
            {header || "Article"}
          </Typography>
        </Box>
        <Typography
          className={font2.className}
          fontSize={{ sm: "2.5rem", md: "4rem" }}
          fontWeight={600}
          maxWidth={800}
          lineHeight={"118.5%"}
        >
          {title || "Articles and Resources"}
        </Typography>
        {name && (
          <Box display={"flex"} gap={"1rem"}>
            <Avatar
              src="/images/Profile.png"
              alt="Rise Addis"
              sx={{ width: 56, height: 56 }}
            />
            <ListItemText
              primary={
                <Typography fontWeight={"bold"}>
                  {name || "Deborah Roderick"}
                </Typography>
              }
              secondary={role || "vlogger"}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default BlogHeroSection;
