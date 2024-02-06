import React from 'react'
import styles from "./navbar.css";

const Navbar = () => {
  return (
    <div className = 'topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light invert-bg'>
      
      <button class="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="21" y2="6"></line></svg></button>
      <a class="invert-color mx-2" href="/en/">
        Stammer.ai
    </a>
    <img class="max-width-2" src="


https://app.stammer.ai/static/common/img/logo.d7c36521e53e.png

"></img>

<div class="col-5 d-none d-lg-block">
        <div class="d-flex float-end text-warning">
            
                
                    Your Free Trial Ends in 12 days.
                
            
        
            Please&nbsp;<a href="/en/billing/subscription">upgrade</a>
        </div>
    </div> 
    {/* navbar ke elemnts */}

     <ul className='navbar-nav align-items-centre ms auto'>
     <li class="nav-item dropdown no-caret me-3 mx-2 d-none d-md-block">
            <div>
            </div>
        </li>
        {/* change logo wala  */}
        <li class="nav-item dropdown no-caret me-3 mx-2 d-none d-md-block">
            <div> 
            <svg class="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path></svg> 
                <a className='pointer' >

                </a>
                <path fill="currentColor" d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
            </div>
        </li>
        {/* need help wala */}
        <li class="nav-item dropdown no-caret me-3 mx-2 d-none d-md-block">
            {/* <div class="chatbot-creation-help-tour">
                <a href="/en/support/ticket" class="text-teal" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Need Help?">
                    <svg class="svg-inline--fa fa-circle-question fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"></path></svg><!-- <i class="fas fa-question-circle fa-2x"></i> Font Awesome fontawesome.com -->
                </a>
            </div> */}
            <svg class="svg-inline--fa fa-circle-question fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"></path></svg>
        </li>
        {/* theme element */}
        <li class="nav-item dropdown no-caret me-3 mx-2 d-none d-md-block">
            <div className='themen image'>
            <svg class="svg-inline--fa fa-moon theme-toggle-fa-moon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"></path></svg>
            <svg class="svg-inline--fa fa-sun theme-toggle-fa-sun" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"></path></svg>
            <div class="theme-toggle-ball"></div>
            </div>
        </li>
        {/* english language */}
        <li class="nav-item dropdown no-caret me-4 mx-2 d-none d-md-block">

        <div data-select2-id="select2-data-5-j9gx">
    <form action="/i18n/setlang/" method="post" id="language-form" data-select2-id="select2-data-language-form">
        <input type="hidden" name="csrfmiddlewaretoken" value="p7KIKbJFZ8mvw1COP9ZOE9Yl6DEl9FAbET3R65pyNKJTooUUhyxSe1Wu5IwCfRzZ" />
        <input name="next" type="hidden" value="" />
        <span>
            <img src="https://app.stammer.ai/static/common/img/flags/en.eec00c35db07.png" width="20px" class="img-flag" />
            English
        </span>
        <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
    </form>
</div>

        </li>

        <li>
        <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up invert-shadow" aria-labelledby="navbarDropdownUserImage">
                <h6 class="dropdown-header d-flex align-items-center">
                <img class="img-fluid" src="https://app.stammer.ai/static/common/img/profile.79c8d028db3c.png"/>
                    <div class="dropdown-user-details">
                        <div class="dropdown-user-details-name">vijay rai</div>
                        <div class="dropdown-user-details-email">vijayraia2z@gmail.com</div>
                    </div>
                </h6>
                <div class="dropdown-divider"></div>
                
                <a class="dropdown-item" href="/en/user/profile">
                    <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                    Profile
                </a>
                <a class="dropdown-item" href="/accounts/logout/">
                    <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></div>
                    Logout
                </a>
            </div>
        </li>


     </ul>

    </div>
  )
}

export default Navbar
