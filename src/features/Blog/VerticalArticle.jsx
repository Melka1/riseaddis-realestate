import { ReadMore } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import styles from "./styles/verticalBlog.module.css";

const font = Montserrat({ subsets: ["cyrillic"] });

function VerticalArticle({ imgUrl, title, content, date, link }) {
  const router = useRouter();
  return (
    <Box
      height={1}
      width={1}
      display={"flex"}
      flexDirection={"column"}
      boxShadow={"0px 0px 2px 0px lightgray"}
      className={styles.container}
      onClick={() => router.push(`/blog/${link}`)}
    >
      <Box
        component={"img"}
        src={imgUrl || "./images/image.png"}
        width={1}
        sx={{ aspectRatio: "16/8" }}
        alt="blog image name"
      />
      <Stack p={"1.5rem"} flex={1} justifyContent={"space-between"}>
        <Stack>
          <Typography
            fontSize={"1rem"}
            fontWeight={600}
            className={font.className}
          >
            {title}
          </Typography>
          <Typography
            fontSize={"0.75rem"}
            fontWeight={400}
            className={font.className}
            mt={"1rem"}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              "-webkit-line-clamp": "4",
              "-webkit-box-orient": "vertical",
            }}
          >
            {content}
          </Typography>
        </Stack>
        <Box
          display={"flex"}
          width={1}
          mt={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            fontSize={"0.875rem"}
            fontWeight={600}
            className={font.className}
          >
            {date}
          </Typography>
          <Button
            LinkComponent={"a"}
            href={`/blog/${link}`}
            endIcon={<ReadMore />}
            size="small"
            color="rise"
            sx={{ p: "0 1.5rem" }}
          >
            Read More
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default VerticalArticle;
