import { useEffect, useState } from "react";
import styles from "./home.module.css";
import HomeHeader from "../../views/home/header/homeHeader";
import HomeAccounts from "../../views/home/accounts/homeAccounts";
import HomeDocuments from "../../views/home/documents/homeDocuments";
import HomeTransactions from "../../views/home/transactions/homeTransactions";

export default function HomePage() {
  // const [dateFilter, setDateFilter] = useState(false);
  // const [typeTransaction, setTypeTransaction] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("click", function(event) {
  //     console.log(event && event?.target.className == 'my_profile_image');
  //     if ((event && event?.target.className) == 'my_profile_image') {
  //       console.log("eeeee salom dostlar");
  //     }
  //     // if(!event.target.className(".home_navbar_toggle_image")){
  //     //   setAccountToggleActive(!accountToggleActive)
  //     // }
  //   })

  //   // return () => {
  //   //   window.removeEventListener("click", function(event) {
  //   //     console.log(event && event?.target.className == 'my_profile_image');

  //   //     // if(!event.target.className(".home_navbar_toggle_image")){
  //   //     //   setAccountToggleActive(!accountToggleActive)
  //   //     // }
  //   //   })
  //   // }

  // }, []);

  return (
    <div className={styles.home}>
      {/* MAIN SECTION BTNS */}

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
