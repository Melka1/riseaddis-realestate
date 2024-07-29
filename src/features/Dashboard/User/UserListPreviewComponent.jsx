import { useDashboardStore } from "@/stores/dashboardStore";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import UserListing from "./UserListing";
import UserListingHeader from "./UserListingHeader";
import { useTokenStore } from "@/stores/tokenStore";
import handleUpdateUserRole from "./utils/handleUpdateUserRole";
import handleDeleteUser from "./utils/handleDeleteUser";
import { userStore } from "@/stores/userStore";

function UserListPreviewComponent({ setLoading, setSnackBar }) {
  const { token } = useTokenStore();

  const userRef = useRef(null);
  const headerRef = useRef(null);

  const [deleteState, setDeleteState] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const { setUsers, users, updateUsers } = useDashboardStore();
  const { user } = userStore();

  const handleScroll = () => {
    if (userRef.current && headerRef.current) {
      const { scrollLeft } = userRef.current;
      headerRef.current.scrollLeft = scrollLeft;
    }
  };

  const handleCheckUser = (id) => {
    if (!id) {
      if (selectedUsers.length == users.length) {
        return setSelectedUsers([]);
      } else {
        return setSelectedUsers(users.map((user) => user.id));
      }
    }

    setSelectedUsers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }

      return [...prev, id];
    });
  };

  useEffect(() => {
    if (selectedUsers.length > 0) {
      setDeleteState(false);
    } else {
      setDeleteState(true);
    }
  }, [selectedUsers]);

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
          Users
        </Typography>

        <Button
          variant="contained"
          color="riseLight"
          disabled={selectedUsers.length != 1}
          onClick={() =>
            handleUpdateUserRole({
              token,
              userId: selectedUsers[0],
              role:
                users.filter((user) => user.id == selectedUsers[0])[0]?.role ==
                "admin"
                  ? "user"
                  : "admin",
              setLoading,
              updateUsers,
              setSnackBar,
            })
          }
        >
          Set As{" "}
          {users.filter((user) => user.id == selectedUsers[0])[0]?.role ==
          "admin"
            ? "User"
            : "Admin"}
        </Button>

        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          disabled={deleteState}
          onClick={() =>
            handleDeleteUser({
              token,
              selectedUsers,
              setLoading,
              setUsers,
              users,
              updateUsers,
              setSelectedUsers,
              setSnackBar,
            })
          }
        >
          Delete
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.lighter"}
        maxHeight={"100%"}
        overflow={"hidden"}
      >
        <UserListingHeader
          handleCheckUser={() => handleCheckUser(null)}
          headerRef={headerRef}
          checked={users.length == selectedUsers.length}
          handleScroll={handleScroll}
        />

        <Box
          id="user-list"
          ref={userRef}
          overflow={"scroll"}
          maxHeight={"100%"}
          pb={"2rem"}
          onScroll={handleScroll}
          sx={{
            overflowY: "scroll",
            position: "relative",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {users
            .filter((u) => u.id != user.id)
            ?.map((user, index) => (
              <UserListing
                key={index}
                checked={selectedUsers.includes(user.id)}
                name={user.name}
                image={user.image}
                email={user.email}
                role={user.role}
                handleCheckUser={() => handleCheckUser(user.id)}
              />
            ))}
        </Box>
      </Stack>
    </>
  );
}

export default UserListPreviewComponent;
