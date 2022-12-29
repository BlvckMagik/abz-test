import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { FileInput, FormInput } from "../../ui-components";
import { IPositions } from "../../constants/types";
import {
  imageValidator as imageValidatorFunc,
  isEmail,
  isNumber,
  setItem,
  formatPhoneNumber,
} from "../../constants/utils";
import { createUser, getPositions, getToken } from "../../gateway/userGateway";
import { defaultUsersCount as count } from "../../constants/constants";
import { ReactComponent as SuccessImage } from "../../images/successImage.svg";
import { getUsers } from "../../store/users.actions";

import { Layout, FormControl, ModalBody } from "./UsersForm.styles";
import { AnyAction } from "redux";

const UsersForm = () => {
  const dispatch = useDispatch();

  const [positions, setPositions] = useState<IPositions[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [selectedPosition, setSelectedPosition] = useState<number>(1);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const [numberValidator, setNumberValidator] = useState<boolean>(false);
  const [emailValidator, setEmailValidator] = useState<boolean>(false);
  const [imageValidator, setImageValidator] = useState<boolean>(true);
  const [imageErrors, setImageErrors] = useState<string>("");

  const handleNameChange = (value: string) => {
    if (value.length < 60) setName(value);
  };

  const handleEmailChange = (value: string) => {
    if (value.length < 100) setEmail(value);
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();
    // @ts-ignore
    formData.append("position_id", Number(selectedPosition));
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", formatPhoneNumber(phone));
    // @ts-ignore
    formData.append("photo", avatarFile);

    const result = await createUser(formData);
    if (result.status === 201) {
      dispatch(getUsers({ page: 1, count }) as unknown as AnyAction);

      setOpen(true);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await getPositions();
      const response = await getToken();
      setItem("token", response.data.token);
      setPositions(data.positions);
    })();
  }, []);

  useEffect(() => {
    if (avatarFile !== null) {
      const errors = imageValidatorFunc(avatarFile);
      setImageValidator(errors.length === 0);
      setImageErrors(errors.length === 1 ? errors[0] : errors.join(", "));
    }

    setEmailValidator(!isEmail(email));
    setNumberValidator(!isNumber(phone));
  }, [email, phone, avatarFile]);

  return (
    <Layout id="signUp">
      <Typography
        sx={{ marginBottom: "50px", textAlign: "center" }}
        variant="h1"
      >
        Working with POST request
      </Typography>
      <FormControl>
        <FormInput
          required
          value={name}
          fieldName={"Your name"}
          onChange={handleNameChange}
        />
        <FormInput
          required
          error={emailValidator}
          value={email}
          fieldName={"Email"}
          helperText={emailValidator ? "Enter correct email" : ""}
          onChange={handleEmailChange}
        />
        <FormInput
          required
          error={numberValidator}
          value={phone}
          sx={{ marginBottom: "25px" }}
          fieldName={"Phone"}
          helperText={
            numberValidator
              ? "Enter number in +38 (XXX) XXX - XX - XX format"
              : "+38 (XXX) XXX - XX - XX"
          }
          onChange={setPhone}
        />
        <RadioGroup
          sx={{ alignSelf: "flex-start", marginBottom: "47px" }}
          name="positions-radio-buttons"
          value={selectedPosition}
          onChange={({ target }) => setSelectedPosition(Number(target.value))}
        >
          {positions.map(({ id, name }) => (
            <FormControlLabel
              key={id}
              value={id}
              control={<Radio color="secondary" />}
              label={name}
            />
          ))}
        </RadioGroup>
        <FileInput
          helperText={imageValidator ? "" : imageErrors}
          error={!imageValidator}
          value={avatarFile?.name || null}
          onChange={setAvatarFile}
        />
        <Button
          type="submit"
          disabled={
            !avatarFile ||
            numberValidator ||
            emailValidator ||
            !imageValidator ||
            name.length < 2
          }
          sx={{ width: "100px", alignSelf: "center", marginTop: "50px" }}
          onClick={handleFormSubmit}
        >
          Sign up
        </Button>
      </FormControl>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalBody>
          <Typography
            variant="h1"
            sx={{ marginBottom: "50px", textAlign: "center" }}
          >
            User successfully registered
          </Typography>
          <SuccessImage />
        </ModalBody>
      </Modal>
    </Layout>
  );
};

export default UsersForm;
