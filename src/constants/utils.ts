import { EMAIL_REGEX, PHONE_REGEX, imageSize } from "./constants";

export const isEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const isNumber = (value: string) => {
  return PHONE_REGEX.test(value);
};

export const imageValidator = (avatar: any) => {
  const errors = [] as string[];

  // const reader = new FileReader();

  // reader.readAsDataURL(avatar);
  // reader.onload = (e) => {
  //   const image = new Image();
  //   // @ts-ignore
  //   image.src = e.target.result;
  //   image.onload = () => {
  //     const { height, width } = image;
  //     if (height < 70 || width < 70) {
  //       errors.push("The photo size must not be greater than 5 Mb");
  //     }
  //   };
  // };
  if (avatar.size > imageSize) {
    errors.push("The photo size must not be greater than 5 Mb");
  }

  return errors;
};

export const formatPhoneNumber = (number: string) => {
  const prepNumber = number.split(" ").join();

  if (prepNumber.slice(0, 3) === "+38") return prepNumber;

  if (prepNumber.slice(0, 2) === "38") return `+${prepNumber}`;

  return `+38${prepNumber}`;
};

export const setItem = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
