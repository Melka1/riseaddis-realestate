import { House } from "@mui/icons-material";
import { Avatar, Box, Divider, ListItemText, Typography } from "@mui/material";
import { Kufam, Montserrat } from "next/font/google";

const font2 = Kufam({ subsets: ["arabic"] });
const font = Montserrat({ subsets: ["cyrillic"] });

function BlogHeroSection({ date, header, title, name, role, subClass, image }) {
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
          sx={{
            backgroundColor: "addisLight.light",
            color: "rise.dark",
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
          fontSize={{ xs: "1.5rem", sm: "2.5rem", md: "4rem" }}
          fontWeight={600}
          maxWidth={800}
          lineHeight={"118.5%"}
        >
          {title || "Articles and Resources"}
        </Typography>
        {name && (
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Avatar
              src={image}
              alt="Rise Addis"
              sx={{ width: { xs: 40, sm: 56 }, height: { xs: 40, sm: 56 } }}
            />
            <ListItemText
              primary={
                <Typography
                  fontWeight={"bold"}
                  fontSize={{ xs: "0.8rem", sm: "1rem" }}
                >
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
