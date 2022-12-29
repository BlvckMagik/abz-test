import React from "react";

import Header from "./Header";
import Banner from "./Banner";
import UsersList from "./UsersList";
import UsersForm from "./UsersForm";

import { Layout } from "./Page.styles";

const Page = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <UsersList />
      <UsersForm />
    </Layout>
  );
};

export default Page;
