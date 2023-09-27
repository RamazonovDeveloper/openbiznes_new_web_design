import React, { useState } from 'react'
import styles from './appBar.module.css'

function AppBar() {

  const [accountToggleActive, setAccountToggleActive] = useState(false);

  return (
    <div className={styles.home_navbar}>
            <div className={styles.home_navbar_wrapper}>
              <div className={styles.home_navbar_wrapper_right}>
                <div className={styles.home_navbar_balance_in_usd}>
                  <div className={styles.home_navbar_balance_in_usd_wrapper}>
                    <h4>10 000 000 000,00 UZS</h4>
                    <p>Средств на UZS счетах</p>
                  </div>
                </div>
                <div className={styles.home_navbar_balance_in_uzs}>
                  <div className={styles.home_navbar_balance_in_uzs_wrapper}>
                    <h4>20 000 000,00 USD</h4>
                    <p>Средств на USD счетах</p>
                  </div>
                </div>
                <div className={styles.home_navbar_ring}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 19.5C24 21.9853 21.9853 24 19.5 24C17.0147 24 15 21.9853 15 19.5C15 17.0147 17.0147 15 19.5 15C21.9853 15 24 17.0147 24 19.5Z"
                      fill="#4E0F8A"
                    />
                    <path
                      d="M11.9999 0.479996C10.9452 0.479996 10.0799 1.34529 10.0799 2.4C10.0799 2.64647 10.1309 2.88127 10.2168 3.09843C7.45293 3.7975 5.75988 6.0583 5.75988 9.12C5.75988 14.0899 4.4128 15.3263 3.60832 16.065C3.23344 16.4092 2.87988 16.7342 2.87988 17.28C2.87988 18.8918 4.95113 19.8124 9.1752 20.0775C9.13879 20.2614 9.11988 20.4494 9.11988 20.64C9.11988 22.2283 10.4116 23.52 11.9999 23.52C12.97 23.52 13.828 23.0367 14.3502 22.2994C14.1366 21.9658 13.9579 21.6088 13.8158 21.2334C13.5643 22.0005 12.85 22.56 11.9999 22.56C10.941 22.56 10.0799 21.6989 10.0799 20.64C10.0799 20.4619 10.1122 20.2905 10.1596 20.1225C10.7434 20.1441 11.3443 20.16 11.9999 20.16C12.5288 20.16 13.0361 20.1519 13.5233 20.1375C13.4729 19.8317 13.4399 19.5202 13.4399 19.2C13.4399 19.1928 13.4408 19.1861 13.4408 19.1794C12.9791 19.1923 12.5005 19.2 11.9999 19.2C4.42836 19.2 3.83988 17.7302 3.83988 17.28C3.83988 17.1672 3.96089 17.0445 4.25801 16.7719C5.11865 15.9818 6.71988 14.5118 6.71988 9.12C6.71988 6.33906 8.27006 4.40705 10.8683 3.94031C11.1871 4.17585 11.5761 4.32 11.9999 4.32C12.4232 4.32 12.8119 4.17631 13.1305 3.94125C15.7301 4.4065 17.2799 6.33248 17.2799 9.12C17.2799 10.9282 17.4559 12.4095 17.8068 13.6162C18.1164 13.5394 18.4352 13.487 18.7621 13.4625C18.417 12.3254 18.2399 10.8734 18.2399 9.12C18.2399 6.0503 16.5484 3.79536 13.783 3.09843C13.8689 2.88127 13.9199 2.64647 13.9199 2.4C13.9199 1.34529 13.0546 0.479996 11.9999 0.479996ZM11.9999 1.44C12.5358 1.44 12.9599 1.86412 12.9599 2.4C12.9599 2.93587 12.5358 3.36 11.9999 3.36C11.464 3.36 11.0399 2.93587 11.0399 2.4C11.0399 1.86412 11.464 1.44 11.9999 1.44Z"
                      fill="#342C2C"
                    />
                  </svg>
                </div>
                <div className={styles.home_navbar_profile}>АК</div>
                <div className={styles.home_navbar_toggle_wrapper}>
                  <div
                    className={`${styles.home_navbar_toggle} ${
                      accountToggleActive && styles.home_navbar_toggle_active
                    }`}
                    onClick={() => setAccountToggleActive(!accountToggleActive)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0249 9.46499L19.3349 8.77499L11.9999 16.11L4.6649 8.77499L3.9749 9.46499L11.6549 17.145L11.9999 17.475L12.3449 17.145L20.0249 9.46499Z"
                        fill="#342C2C"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${styles.home_navbar_toggle_image} ${
                      accountToggleActive &&
                      styles.home_navbar_toggle_image_active
                    }`}
                  >
                    <img
                      className={styles.my_profile_image}
                      src="profileImage.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default AppBar
