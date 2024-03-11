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
      minHeight={"60vh"}
      p={"6rem"}
      pb={"2rem"}
      margin={"auto"}
    >
      <Box
        // bgcolor={"white"}
        width={"70%"}
        flexDirection={"column"}
        display={"flex"}
        alignItems={"flex-start"}
        zIndex={1000}
      >
        <Box
          display={"flex"}
          p={"0.5rem 1rem"}
          maxWidth={"40%"}
          gap={"0.5rem"}
          borderRadius={"0.5rem"}
          sx={{
            backgroundColor: "addisLight.light",
            color: "rise.main",
            mb: "1rem",
          }}
        >
          <House />
          {date && (
            <>
              <Typography className={font.className}>{date}</Typography>
              <Divider orientation="vertical" flexItem />
            </>
          )}
          <Typography className={font.className}>
            {header || "Article"}
          </Typography>
        </Box>
        <Typography
          className={font2.className}
          fontSize={"4rem"}
          fontWeight={600}
          maxWidth={800}
          lineHeight={"118.5%"}
        >
          {title || "Articles and Resorces"}
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
