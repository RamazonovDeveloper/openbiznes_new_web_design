import SideBar from "./components/sideBar";
import styles from "./companyLayout.module.css";
import AppBar from "./components/appBar";

export default function CompanyLayout({ children }) {
  return (
    <div className={styles.section}>
      <div className={styles.section_side_bar}>
        <div className={styles.section_side_bar_container}>
          <SideBar />
        </div>
      </div>

      <div className={styles.home}>
        <div className={styles.home_container}>
          <AppBar isTitle={true} />

          {children}
        </div>
      </div>
    </div>
  );
}
