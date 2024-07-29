import { riseFont } from "@/pages/_app";
import { userStore } from "@/stores/userStore";
import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import handleUpdateUser from "./utils/handleUpdateUser";
import { useTokenStore } from "@/stores/tokenStore";
import { CldUploadWidget } from "next-cloudinary";

function UserProfileComponent({ setLoading, setSnackBar }) {
  const { user, setUser } = userStore();
  const { token } = useTokenStore();

  const [userName, setUserName] = useState(user?.name || "");
  const [updateName, setUpdateName] = useState(false);

  return (
    <Stack alignItems={"center"} height={1} spacing={1}>
      <Typography
        fontSize={"2rem"}
        fontWeight={"bold"}
        color={"text.primary"}
        lineHeight={1}
        pb={1}
      >
        Your Profile
      </Typography>
      <Avatar
        src={user?.image}
        sx={{ width: "40%", height: "unset", aspectRatio: 1 }}
      />
      <Typography pt={1} fontWeight={"bold"} className={riseFont.className}>
        {user?.email}
      </Typography>
      {!updateName ? (
        <Typography
          fontWeight={"bold"}
          className={riseFont.className}
          fontSize={"1.2rem"}
        >
          {user?.name}
        </Typography>
      ) : (
        <Stack direction={"row"} spacing={1}>
          <TextField
            value={userName}
            size="small"
            onChange={({ target }) => setUserName(target.value)}
          />
          <Button
            variant="contained"
            color="rise"
            sx={{ textTransform: "capitalize" }}
            onClick={() =>
              handleUpdateUser({
                token,
                name: userName,
                setLoading,
                setSnackBar,
                setUser,
                setUpdateName,
              })
            }
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="rise"
            sx={{ textTransform: "capitalize" }}
            onClick={() => {
              setUpdateName(false);
            }}
          >
            Cancel
          </Button>
        </Stack>
      )}
      <Stack direction={"row"} spacing={2} pt={2}>
        <CldUploadWidget
          options={{
            multiple: false,
          }}
          onUpload={({ info }) => {
            console.log(info);
            handleUpdateUser({
              token,
              image: info.secure_url,
              setLoading,
              setSnackBar,
              setUser,
            });
          }}
          uploadPreset="adse2riv"
        >
          {({ open }) => {
            return (
              <Button
                variant="contained"
                onClick={() => open?.()}
                sx={{ textTransform: "capitalize" }}
              >
                Update Profile Image
              </Button>
            );
          }}
        </CldUploadWidget>
        {!updateName && (
          <Button
            variant="contained"
            color="rise"
            sx={{ textTransform: "capitalize" }}
            onClick={() => {
              setUserName(user?.name);
              setUpdateName(true);
            }}
          >
            Update Profile Name
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export default UserProfileComponent;
