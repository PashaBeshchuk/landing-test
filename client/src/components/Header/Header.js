import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left__desktop">
        <div>Discover</div>
        <div>My Plants</div>
        <div>Diseases</div>
        <div>Blog</div>
        <div>FAQ</div>
        <div>Contact Us</div>
      </div>
      <div className="header__left">
        <div className="header__logo">
        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.17199 0C11.517 1.33575 13.0871 3.34385 13.8824 5.57997C11.8587 6.54881 10.2009 8.15628 9.17199 10.1403C8.14308 8.15628 6.4853 6.54881 4.46155 5.57997C5.25685 3.34385 6.827 1.33575 9.17199 0Z" fill="#04BF94"/>
            <path d="M0 5.71429C5.06552 5.71429 9.17193 9.80768 9.17193 14.8571C9.17193 9.80768 13.2783 5.71429 18.3439 5.71429V14.8571C18.3439 19.9066 14.2374 24 9.17193 24C4.10641 24 0 19.9066 0 14.8571V5.71429Z" fill="#04BF94"/>
        </svg>
        </div>
        <div className="header__brand">PlantIn</div>
      </div>
      <div className="header__right">
        <div className="header__search">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 13.5L18.5 18.5M15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5Z" stroke="#C5D1DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div className="header__menu">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 2C6.44772 2 6 1.55228 6 1C6 0.447715 6.44771 0 7 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H7Z" fill="#C5D1DB"/>
            <path d="M0 6C0 6.55228 0.447716 7 1 7H17C17.5523 7 18 6.55228 18 6C18 5.44772 17.5523 5 17 5H1C0.447715 5 0 5.44772 0 6Z" fill="#C5D1DB"/>
            <path d="M6 11C6 11.5523 6.44771 12 7 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H7C6.44772 10 6 10.4477 6 11Z" fill="#C5D1DB"/>
          </svg>
        </div>
        <div className="header__menu__desktop">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1864_5)">
            <circle cx="14" cy="14" r="12.6" fill="#F1F2F6" stroke="#E0E7F1" stroke-width="1.2"/>
            <ellipse cx="14" cy="25.5" rx="11" ry="9.5" fill="#ADB8C8"/>
            <circle cx="14" cy="10" r="4" fill="#ADB8C8"/>
            </g>
            <rect x="1.4" y="1.4" width="25.2" height="25.2" rx="12.6" stroke="#C5D1DB" stroke-width="1.2"/>
            <defs>
            <clipPath id="clip0_1864_5">
            <rect x="2" y="2" width="24" height="24" rx="12" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
