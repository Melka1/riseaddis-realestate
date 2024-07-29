import { Circle, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ImageListItem from "../Components/ImageListItem";
import TextListItem from "../Components/TextListItem";
import { useState } from "react";

const statuses = [
  {
    name: "Published",
    value: "published",
    color: "success",
  },
  {
    name: "Draft",
    value: "draft",
    color: "secondary",
  },
];

function ArticleListing({
  title,
  paragraphs,
  imageUrl,
  author,
  dateCreated,
  dateUpdated,
  status,

  checked,
  handleCheckArticle,
}) {
  const [expand, setExpand] = useState(false);
  return (
    <Stack
      position={"relative"}
      width={"100%"}
      direction={"row"}
      divider={<Divider flexItem orientation="vertical" />}
      borderBottom={"1px solid"}
      borderColor="riseLight.dark"
      color={"rise.dark"}
      sx={{
        "&:hover": { bgcolor: "riseLight.light" },
        cursor: "pointer",
        "&:hover .chevron": { display: "inline-flex" },
      }}
      onClick={() => handleCheckArticle()}
    >
      <Box
        width={"40px"}
        minWidth={"40px"}
        maxHeight={expand ? "unset" : "3rem"}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack justifyContent={"flex-start"} height={1}>
          <Checkbox
            checked={checked}
            size="small"
            color="rise"
            onClick={(e) => {
              e.stopPropagation();
              handleCheckArticle();
            }}
          />
        </Stack>
      </Box>
      <Box
        width={"200px"}
        minWidth={"200px"}
        maxHeight={expand ? "unset" : "3rem"}
        sx={{ overflowY: "auto" }}
      >
        <Typography
          title={name}
          fontSize={"0.8rem"}
          p={"0.5rem"}
          noWrap={!expand}
        >
          {title}
        </Typography>
      </Box>

      <Box
        width={"300px"}
        minWidth={"300px"}
        // maxHeight={expand ? "unset" : "3rem"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          {paragraphs?.length
            ? paragraphs?.map((paragraph, index) => (
                <TextListItem key={index} name={paragraph} expand={expand} />
              ))
            : "[]"}
        </Stack>
      </Box>

      <Box
        width={"300px"}
        minWidth={"300px"}
        maxHeight={expand ? "unset" : "300px"}
        sx={{ overflowY: "auto" }}
      >
        <Grid container spacing={1} p={1}>
          {imageUrl ? (
            <ImageListItem src={imageUrl} number={expand ? 12 : 4} />
          ) : (
            <Grid item xs>
              <Typography fontSize={"0.9rem"}>No image provided</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      <Box
        width={"120px"}
        minWidth={"120px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          <Typography fontSize={"0.8rem"}>{author}</Typography>
        </Stack>
      </Box>

      <Box
        width={"120px"}
        minWidth={"120px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          <Typography fontSize={"0.8rem"}>
            {new Date(dateCreated).toDateString()}
          </Typography>
        </Stack>
      </Box>
      <Box
        width={"120px"}
        minWidth={"120px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack gap={"0.5rem"} p={"0.5rem"}>
          <Typography fontSize={"0.8rem"}>
            {new Date(dateUpdated).toDateString()}
          </Typography>
        </Stack>
      </Box>

      <Box
        width={"100px"}
        minWidth={"100px"}
        maxHeight={expand ? "unset" : "200px"}
        sx={{ overflowY: "auto" }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Typography fontSize={"0.8rem"} p={"0.5rem"} noWrap>
            {statuses[statuses.findIndex((s) => s.value == status)].name}
          </Typography>
          <Circle
            sx={{ width: 7, height: 7 }}
            color={statuses[statuses.findIndex((s) => s.value == status)].color}
          />
        </Stack>
      </Box>

      <IconButton
        className="chevron"
        onClick={() => setExpand((p) => !p)}
        sx={{
          display: "none",
          height: "30px",
          width: "30px",
          position: "absolute",
          top: "calc(50% - 15px)",
          right: "2rem",
        }}
      >
        {!expand ? <ExpandMore /> : <ExpandLess />}
      </IconButton>
    </Stack>
  );
}

export default ArticleListing;
