import React, { useState } from "react";
import styles from "./appBar.module.css";
import Link from "next/link";

function AppBar({ isTitle }) {
  const [accountToggleActive, setAccountToggleActive] = useState(false);

  return (
    <div className={styles.home_navbar}>
      <div
        className={`${styles.home_navbar_wrapper} ${
          isTitle && styles.home_navbar_wrapper_single
        }`}
      >
        <div className={styles.home_navbar_wrapper_left}>
          <p>Счета</p>
        </div>
        <div className={styles.home_navbar_wrapper_right}>
          <div className={styles.home_navbar_balance_in_usd}>
            <div className={styles.home_navbar_balance_in_usd_wrapper}>
              <h4 style={{whiteSpace: 'pre-wrap'}}>10 000 000 000,00    UZS</h4>
              <p>Средств на UZS счетах</p>
            </div>
          </div>
          <div className={styles.home_navbar_balance_in_uzs}>
            <div className={styles.home_navbar_balance_in_uzs_wrapper}>
              <h4 style={{whiteSpace: 'pre-wrap'}}>20 000  000,00   USD </h4>
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
          <Link href={"/profile"} className={styles.home_navbar_profile}>
            АК
          </Link>
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
                accountToggleActive && styles.home_navbar_toggle_image_active
              }`}
            >
              <div className={styles.home_navbar_toggle_image_texts}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1842_12530)">
                    <path
                      d="M22.6368 10.186L19.8 9.72236C19.6339 9.15308 19.4069 8.60588 19.1227 8.08796L20.7787 5.7278C20.9126 5.53724 20.8896 5.27756 20.7249 5.11244L18.8582 3.24668C18.6917 3.0806 18.4296 3.059 18.2385 3.19676L15.9139 4.86764C15.3912 4.57868 14.8392 4.34924 14.2665 4.18268L13.7717 1.3574C13.7313 1.12796 13.5321 0.959961 13.2989 0.959961H10.6589C10.4237 0.959961 10.223 1.13036 10.1851 1.36268L9.72622 4.1726C9.15022 4.3382 8.59726 4.56524 8.07646 4.85036L5.75806 3.19436C5.56654 3.05756 5.3059 3.07964 5.13934 3.24524L3.27358 5.111C3.10894 5.27564 3.0859 5.53484 3.21982 5.7254L4.85134 8.05964C4.56094 8.58524 4.32958 9.14156 4.1611 9.72044L1.36222 10.1865C1.13086 10.2249 0.960938 10.4256 0.960938 10.6598V13.2998C0.960938 13.5326 1.12798 13.7318 1.35694 13.7726L4.15582 14.2689C4.32334 14.8464 4.5547 15.4027 4.84606 15.9297L3.19438 18.24C3.05806 18.4305 3.07966 18.6921 3.24526 18.8587L5.1115 20.7264C5.27614 20.891 5.53582 20.914 5.72638 20.7801L8.06398 19.1428C8.58862 19.4313 9.14302 19.6603 9.71758 19.8264L10.1861 22.6396C10.224 22.8705 10.4241 23.04 10.6589 23.04H13.2989C13.5317 23.04 13.7309 22.8729 13.7712 22.644L14.2728 19.8168C14.8483 19.6473 15.3998 19.4169 15.9192 19.128L18.2736 20.7796C18.4646 20.9145 18.7238 20.891 18.8889 20.7264L20.7552 18.8587C20.9213 18.6921 20.9429 18.4296 20.8051 18.2385L19.1261 15.9072C19.4107 15.3888 19.6368 14.8406 19.8014 14.2713L22.6421 13.7726C22.872 13.7323 23.039 13.5326 23.039 13.2998V10.6598C23.0395 10.4246 22.8691 10.224 22.6368 10.186ZM12 15.36C10.1443 15.36 8.63998 13.8556 8.63998 12C8.63998 10.1443 10.1443 8.63996 12 8.63996C13.8557 8.63996 15.36 10.1443 15.36 12C15.36 13.8556 13.8557 15.36 12 15.36Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1842_12530">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Управление профилем
              </div>
              <div className={styles.home_navbar_toggle_image_texts}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1842_12515)">
                    <path
                      d="M12.0151 0.944946C5.92924 0.944946 0.975098 5.89909 0.975098 11.9849C0.975098 18.0708 5.92924 23.0249 12.0151 23.0249C15.2772 23.0249 18.2147 21.5996 20.2332 19.3453C20.3217 19.2521 20.3905 19.1422 20.4357 19.022C20.4809 18.9018 20.5015 18.7737 20.4964 18.6454C20.4912 18.517 20.4603 18.391 20.4056 18.2749C20.3508 18.1587 20.2733 18.0547 20.1776 17.969C20.082 17.8833 19.9701 17.8176 19.8486 17.776C19.7271 17.7343 19.5985 17.7174 19.4704 17.7263C19.3422 17.7353 19.2172 17.7698 19.1027 17.8279C18.9881 17.886 18.8864 17.9665 18.8035 18.0646C17.1328 19.9306 14.7194 21.1049 12.0151 21.1049C6.96688 21.1049 2.8951 17.0332 2.8951 11.9849C2.8951 6.93673 6.96688 2.86495 12.0151 2.86495C14.7189 2.86495 17.1322 4.03917 18.8035 5.90526C18.8864 6.00338 18.9881 6.08388 19.1027 6.14199C19.2172 6.2001 19.3422 6.23464 19.4704 6.24356C19.5985 6.25248 19.7271 6.23561 19.8486 6.19393C19.9701 6.15225 20.082 6.08663 20.1776 6.00093C20.2733 5.91524 20.3508 5.81122 20.4055 5.69504C20.4603 5.57885 20.4912 5.45287 20.4964 5.32453C20.5015 5.1962 20.4809 5.06814 20.4357 4.94792C20.3905 4.82769 20.3217 4.71776 20.2332 4.62463C18.2143 2.3704 15.2767 0.944946 12.0151 0.944946ZM18.6948 7.65557C18.5039 7.65581 18.3174 7.71295 18.1591 7.81969C18.0009 7.92643 17.878 8.07792 17.8063 8.25482C17.7345 8.43172 17.7171 8.626 17.7563 8.81283C17.7955 8.99965 17.8895 9.17055 18.0263 9.3037L19.7476 11.0249H11.0251C10.8979 11.0231 10.7716 11.0466 10.6535 11.0941C10.5355 11.1415 10.428 11.2119 10.3374 11.3013C10.2469 11.3906 10.1749 11.497 10.1258 11.6144C10.0767 11.7318 10.0514 11.8577 10.0514 11.9849C10.0514 12.1122 10.0767 12.2381 10.1258 12.3555C10.1749 12.4729 10.2469 12.5793 10.3374 12.6686C10.428 12.7579 10.5355 12.8284 10.6535 12.8758C10.7716 12.9232 10.8979 12.9467 11.0251 12.9449H19.7476L18.0263 14.6662C17.9342 14.7547 17.8607 14.8606 17.81 14.9779C17.7593 15.0951 17.7325 15.2213 17.7312 15.349C17.7299 15.4767 17.7541 15.6034 17.8024 15.7217C17.8507 15.8399 17.9221 15.9473 18.0124 16.0377C18.1027 16.128 18.2101 16.1994 18.3284 16.2476C18.4466 16.2959 18.5733 16.3201 18.7011 16.3188C18.8288 16.3175 18.9549 16.2907 19.0722 16.2401C19.1894 16.1894 19.2954 16.1158 19.3838 16.0237L22.6585 12.749C22.7767 12.6592 22.8725 12.5432 22.9383 12.4102C23.0042 12.2771 23.0382 12.1306 23.0379 11.9821C23.0375 11.8337 23.0027 11.6873 22.9362 11.5546C22.8698 11.4219 22.7734 11.3064 22.6548 11.2171L19.3838 7.9462C19.2943 7.85412 19.1871 7.78096 19.0688 7.73104C18.9504 7.68111 18.8232 7.65545 18.6948 7.65557Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1842_12515">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Выйти из аккаунта
              </div>
              {/* <img
                className={styles.my_profile_image}
                src="profileImage.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
