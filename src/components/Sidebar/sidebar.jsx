import React from "react";
import styles from "./sidebar.css";

const sidebar = () => {
  return (
    <div className="side-layout">
      <div id="layoutSidenav_nav">
        <nav className="sidenav shadow-right sidenav-light">
          <div className="sidenav-menu">
            <div className="nav accordion" id="accordionSidenav">
              {/* Sidenav Menu Heading */}
              <div className="sidenav-menu-heading">
                {/* TODO: this string 'Regular User' comparison is not recommended. Improve it later on. */}
                <br />
                <label className="alert-success py-1 px-2 mt-2 rounded-2">
                  Agency Admin
                </label>
              </div>

              {/* Subaccount dropdown */}
              <div className="dropdown dropend border-bottom">
                <div
                  className="btn-menu-dropend"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-refresh-ccw"
                  >
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <polyline points="23 20 23 14 17 14"></polyline>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                  </svg>
                  <span className="menu-dropend-text">
                    Switch to Sub-Account
                  </span>
                  <div className="sidenav-collapse-arrow">
                    <svg
                      className="svg-inline--fa fa-angle-right"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="dropdown-menu">
                  <div className="d-flex align-items-center justify-content-center px-3 py-1"></div>
                </div>
              </div>

              {/* Sidenav Accordion (Dashboard) */}
              <a className="nav-link" href="/en/">
                <div className="nav-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-activity"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                Dashboard 
              </a>
              

              

              {/* Sidenav Accordion (Chatbot) */}
              <a
                className="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#chatbotCollapse"
                aria-expanded="false"
                aria-controls="chatbotCollapse"
              >
                <div className="nav-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-cpu"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                Chatbot
                <div className="sidenav-collapse-arrow">
                <svg
                  className="svg-inline--fa fa-angle-right"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                </svg>
              </div>
              </a>
              {/* <div className="collapse" id="chatbotCollapse" data-bs-parent="#accordionSidenav">
              <nav className="sidenav-menu-nested nav accordion">
                <a className="nav-link" href="/en/chatbot/create">
                  Create Chatbot
                </a>
                <a className="nav-link" href="/en/chatbot/list">
                  Chatbot List
                </a>
                <a className="nav-link" href="/en/chatbot/analytics">
                  Chatbot Analytics
                </a>
              </nav>
            </div> */}
              {/* account section ke liiye
              <a
                className="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#accountCollapse"
                aria-expanded="false"
                aria-controls="accountCollapse"
              >
                <div className="nav-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                Account
                <div className="sidenav-collapse-arrow">
                  <svg
                    className="svg-inline--fa fa-angle-down"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="angle-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                    ></path>
                  </svg>
                </div>
              </a>

              {/* agency ke liye  */}

              <a
                class="nav-link collapsed active"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#agencyCollapse"
                aria-expanded="false"
                aria-controls="agencyCollapse"
              >
                <div class="nav-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-users"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                Agency
                <div className="sidenav-collapse-arrow">
                  <svg
                    className="svg-inline--fa fa-angle-down"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="angle-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                    ></path>
                  </svg>
                  {/* <i className="fas fa-angle-down"></i> Font Awesome fontawesome.com */}
                </div>
              </a>
              <div class="collapse show" id="agencyCollapse">
                <nav class="sidenav-menu-nested nav">
                  <a class="nav-link " href="/en/agency/profile/">
                    Profile
                  </a>
                  <a class="nav-link " href="/en/agency/domain/">
                    Custom Domain
                  </a>
                  <a
                    class="nav-link active"
                    href="/en/billing/agency/stripe/connect/"
                  >
                    Connect Stripe
                  </a>
                  <a class="nav-link " href="/en/agency/subscription/packages/">
                    Subscription Packages
                  </a>
                  <a class="nav-link " href="/en/agency/users/">
                    Users
                  </a>
                  <a class="nav-link " href="/en/custom/menu/links/">
                    Custom Menu Links
                  </a>

                  <span
                    title=""
                    data-toggle="tooltip"
                    data-placement="top"
                    data-bs-original-title="Please upgrade to Full SaaS Mode or Exclusive Full SaaS Mode in order to access the white label documentation"
                  >
                    <a class="nav-link disabled" href="">
                      White label documentation
                    </a>
                  </span>
                </nav>
              </div>

              {/* Sidenav Accordion (Settings) */}
              <a
                className="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#settingsCollapse"
                aria-expanded="false"
                aria-controls="settingsCollapse"
              >
                <div className="nav-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-settings"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a9 9 0 0 1-2.6 2.6"></path>
                    <path d="M4 4L20 20"></path>
                    <path d="M20 4L4 20"></path>
                  </svg>
                </div>
                Settings
                {/* <div className="sidenav-collapse-arrow">
                <svg
                  className="svg-inline--fa fa-angle-right"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                </svg>
              </div> */}
              </a>
              {/* <div className="collapse" id="settingsCollapse" data-bs-parent="#accordionSidenav">
              <nav className="sidenav-menu-nested nav accordion">
                <a className="nav-link" href="/en/settings/profile">
                  Profile
                </a>
                <a className="nav-link" href="/en/settings/account">
                  Account
                </a>
              </nav>
            </div> */}
            </div>
          </div>

          {/* Sidenav Footer */}
          <div className="sidenav-footer">
            <div className="sidenav-footer-content">
              <div className="sidenav-footer-subtitle">Logged in as:</div>
              <div className="sidenav-footer-title">Stammer.ai</div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    // </div>
  );
};

export default sidebar;
