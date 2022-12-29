import React, { FC } from "react";

import { Tooltip, Typography } from "@mui/material";
import { IUser } from "../../constants/types";

import { Card, CardContent, Avatar } from "./UserCard.styles";

type Props = {
  userData: IUser;
};

const typographyWithEllipsisStyles = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  textAlign: "center",
};

const UserCard: FC<Props> = ({ userData }) => {
  const { photo, name, email, position, phone } = userData;

  return (
    <Card>
      <CardContent>
        <Avatar src={photo} />
        <Tooltip title={name}>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "20px",
              ...typographyWithEllipsisStyles,
            }}
          >
            {name}
          </Typography>
        </Tooltip>

        <Typography sx={typographyWithEllipsisStyles}>{position}</Typography>
        <Tooltip title={email}>
          <Typography sx={typographyWithEllipsisStyles}>{email}</Typography>
        </Tooltip>
        <Typography>{phone}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
