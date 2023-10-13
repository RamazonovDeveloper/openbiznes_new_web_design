import { useEffect, useState } from "react";
import styles from "./home.module.css";
import HomeHeader from "../../views/home/header/homeHeader";
import HomeAccounts from "../../views/home/accounts/homeAccounts";
import HomeDocuments from "../../views/home/documents/homeDocuments";
import HomeTransactions from "../../views/home/transactions/homeTransactions";

export default function HomePage() {

  return (
    <div className={styles.home}>
      
      <HomeHeader />

      <div className={styles.home_main}>
        <div className={styles.home_main_left}>
          <HomeAccounts />
          <HomeDocuments/>
        </div>
        <HomeTransactions/>
        
      </div>

    </div>
  );
}
