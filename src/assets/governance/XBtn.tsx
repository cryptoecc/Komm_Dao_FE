import React from 'react';

const XBtn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <mask id="mask0_571_18432" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_571_18432)">
            <path d="M8.4 17.0004L7 15.6004L10.6 12.0004L7 8.42539L8.4 7.02539L12 10.6254L15.575 7.02539L16.975 8.42539L13.375 12.0004L16.975 15.6004L15.575 17.0004L12 13.4004L8.4 17.0004Z" fill="#1C1B1F" />
        </g>
    </svg>
)
export default XBtn;
