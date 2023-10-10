import React from "react";
import styles from "./document.module.css";
import DocumentFilters from "../../views/documents/documentFilters/documentFilters";
import DocumentTable from "../../views/documents/documentTable/documentTable";
import CardComponent from "../../components/cardComponent";

export default function index() {
  return (
    <div className={styles.documents}>
      <CardComponent>
        <DocumentFilters />
        <DocumentTable />
      </CardComponent>
    </div>
  );
}
