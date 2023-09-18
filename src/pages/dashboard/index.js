import React from "react";
import { Container } from "react-bootstrap";
import SBreadcrumb from "../../components/Breadcrumb";

export default function Dashboard() {
  return (
    <>
      <Container className="mt-3">
        <SBreadcrumb />
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
