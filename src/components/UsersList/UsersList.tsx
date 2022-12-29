import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";

import { Typography, Button, CircularProgress } from "@mui/material";
import { IUser } from "../../constants/types";
import { UserCard } from "../../ui-components";
import { defaultUsersCount as count } from "../../constants/constants";
import { getUsers, getMoreUsers } from "../../store/users.actions";
import { IStore } from "../../store/users.reducer";

import { Layout, CardsContainer } from "./UsersList.styles";

const UsersList: FC = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const usersList = useSelector((state: IStore) => state.usersData);
  const totalPages = useSelector((state: IStore) => state.totalPages);
  const isPending = useSelector((state: IStore) => state.isDataFetching);

  useEffect(() => {
    (async () => {
      dispatch(getUsers({ page, count }) as unknown as AnyAction);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMoreButton = async () => {
    dispatch(getMoreUsers({ page: page + 1, count }) as unknown as AnyAction);

    if (totalPages === page + 1) setIsLastPage(true);

    setPage(page + 1);
  };

  return (
    <Layout id="users">
      <Typography
        variant="h1"
        sx={{ marginBottom: "50px", textAlign: "center" }}
      >
        Working with GET request
      </Typography>
      <CardsContainer>
        {!usersList[0] ? (
          <CircularProgress color="secondary" />
        ) : (
          usersList.map((userData: IUser) => (
            <UserCard key={userData.id} userData={userData} />
          ))
        )}
      </CardsContainer>
      {!isLastPage &&
        usersList[0] &&
        (isPending ? (
          <CircularProgress color="secondary" />
        ) : (
          <Button sx={{ width: "120px" }} onClick={handleLoadMoreButton}>
            Show more
          </Button>
        ))}
    </Layout>
  );
};

export default UsersList;
