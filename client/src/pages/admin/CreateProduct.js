import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

export default function CreateProduct() {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            <h1>CREATE PRODUCT</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
