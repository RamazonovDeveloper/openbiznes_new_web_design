import SideBar from "./components/sideBar";
import styles from './companyLayout.module.css'
import AppBar from "./components/appBar";

export default function CompanyLayout({children}) {
  return (
    <div className={styles.section}>
        <SideBar/>

        <div className={styles.home}>
            <div className={styles.home_container}>
                <AppBar/>

                {children}  
            </div>
        </div>
    </div>
  )
}
