import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import ImageUpload from "../Components/ImageUpload";
import { Edit, Save, UpdateRounded } from "@mui/icons-material";
import { useDashboardStore } from "@/stores/dashboardStore";

import { useTokenStore } from "@/stores/tokenStore";

import handleAddArticle from "./api/handleAddArticle";
import handleUpdateArticle from "./api/handleUpdateArticle";
import hasArticleValueChanged from "./utils/hasArticleValueChanged";

function AddArticleComponent({ setAddArticle, setLoading, setSnackBar }) {
  const { token } = useTokenStore();
  const { updateArticles, article, setArticle } = useDashboardStore();
  console.log(article);

  const [title, setTitle] = useState(article?.title || "");
  const [paragraphList, setParagraphList] = useState(article?.paragraphs || []);
  const [imageList, setImageList] = useState(
    article?.imageUrl ? [article?.imageUrl] : []
  );
  const [status, setStatus] = useState(article?.status);

  const [addParagraph, setAddParagraph] = useState(false);
  const [editMode, setEditMode] = useState(0);
  const [editedParagraph, setEditedParagraph] = useState("");

  const handleAddParagraph = () => {
    if (!addParagraph) {
      setAddParagraph(true);
      return;
    }

    let newParagraph = document.getElementById("new-paragraph").value;

    if (!newParagraph) return;
    setParagraphList((prev) => [...prev, newParagraph]);
    setAddParagraph(false);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdateParagraph = (index) => {
    setParagraphList((prev) => {
      return prev.map((p, i) => (i == index ? editedParagraph : p));
    });

    setEditMode(0);
  };

  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"bold"}
          color={"text.primary"}
          lineHeight={1}
          flex={1}
        >
          {article?.title ? "Update" : "Add"} Article
        </Typography>

        {article && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleStatusChange}
              >
                <MenuItem value={"draft"}>Draft</MenuItem>
                <MenuItem value={"published"}>Published</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          onClick={() => {
            setArticle(null);
            setAddArticle(false);
          }}
        >
          Cancel
        </Button>

        {article && (
          <Button
            variant="contained"
            color="riseLight"
            startIcon={<Edit />}
            disabled={
              !hasArticleValueChanged({
                article,
                title,
                paragraphList,
                image: imageList[0],
                status,
              })
            }
            onClick={() =>
              handleUpdateArticle({
                articleId: article.id,
                title,
                paragraphs: paragraphList,
                image: imageList[0],
                status,

                token,
                setLoading,
                updateArticles,
                setSnackBar,
                setAddArticle,
                setArticle,
              })
            }
          >
            Update
          </Button>
        )}

        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Save />}
          disabled={article !== null}
          onClick={() =>
            handleAddArticle({
              title,
              paragraphs: paragraphList,
              image: imageList[0],

              token,
              setLoading,
              updateArticles,
              setSnackBar,
              setAddArticle,
            })
          }
        >
          Save
        </Button>
      </Stack>

      <Stack flex={1} height={1} overflow={"hidden"}>
        <Grid container spacing={2} height={1}>
          <Grid item xs={6} height={1}>
            <Stack
              gap={2}
              p={"2rem"}
              height={1}
              pt={1}
              flex={1}
              sx={{ overflowY: "scroll" }}
            >
              <Grid container spacing={2}>
                <Grid item xs>
                  <Stack>
                    <TextField
                      id="article-title"
                      size="small"
                      label="Title"
                      variant="outlined"
                      value={title}
                      onChange={({ target }) => setTitle(target.value)}
                    />
                  </Stack>
                </Grid>
              </Grid>

              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  p: "1rem",
                }}
              >
                <Typography color={"gray"}>Paragraphs</Typography>
                <Stack gap={1}>
                  {paragraphList.map((paragraph, index) => (
                    <Box key={index} position={"relative"}>
                      {editMode - 1 != index ? (
                        <>
                          <Typography
                            sx={{
                              p: "0.5rem 2rem",
                              border: "1px solid lightgray",
                              borderRadius: "0.25rem",
                            }}
                          >
                            {paragraph}
                          </Typography>

                          {!editMode && (
                            <Stack
                              sx={{ position: "absolute", right: 0, top: 0 }}
                            >
                              <IconButton
                                title="remove"
                                color="error"
                                onClick={() =>
                                  setParagraphList((prev) =>
                                    prev.filter((p, i) => i !== index)
                                  )
                                }
                              >
                                <GiTrashCan />
                              </IconButton>
                              <IconButton
                                title="edit"
                                color="error"
                                onClick={() => {
                                  setEditMode(index + 1);
                                  setEditedParagraph(paragraph);
                                }}
                              >
                                <Edit />
                              </IconButton>
                            </Stack>
                          )}
                        </>
                      ) : (
                        <>
                          <TextField
                            value={editedParagraph}
                            onChange={({ target }) =>
                              setEditedParagraph(target.value)
                            }
                            multiline
                            minRows={4}
                            fullWidth
                            sx={{ mb: "1rem" }}
                          />
                          <Stack direction={"row"} gap={2}>
                            <Button
                              color="rise"
                              fullWidth
                              variant="contained"
                              onClick={() => handleUpdateParagraph(index)}
                            >
                              Apply
                            </Button>
                            <Button
                              color="error"
                              fullWidth
                              variant="contained"
                              onClick={() => setEditMode(0)}
                            >
                              Cancel
                            </Button>
                          </Stack>
                        </>
                      )}
                    </Box>
                  ))}
                  {addParagraph && (
                    <TextField
                      id="new-paragraph"
                      size="small"
                      label="Write your paragraph here..."
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  )}
                </Stack>
                {!editMode && (
                  <Stack direction={"row"} gap={2}>
                    <Button
                      color="rise"
                      fullWidth
                      variant="contained"
                      onClick={() => handleAddParagraph()}
                    >
                      Add
                    </Button>
                    <Button
                      color="error"
                      fullWidth
                      variant="contained"
                      onClick={() => setAddParagraph(false)}
                    >
                      Cancel
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} height={1}>
            <Stack gap={2} height={1} overflow={"scroll"}>
              <ImageUpload
                imageList={imageList}
                setImageList={setImageList}
                number={1}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default AddArticleComponent;
