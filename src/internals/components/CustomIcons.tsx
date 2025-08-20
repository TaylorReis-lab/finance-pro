import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export function VisaIcon() {
  return (
    <SvgIcon sx={{ width: 36, height: 24 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <path
          d="M0 0h36v24H0z"
          fill="#142688"
        />
        <path
          d="M6 18l2-12h3l-2 12H6zm9-12h3l-1.5 12h-3L15 6zm6 0h3l1.5 12h-3L21 6z"
          fill="#fff"
        />
      </svg>
    </SvgIcon>
  );
}

export function MastercardIcon() {
  return (
    <SvgIcon sx={{ width: 36, height: 24 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <circle cx="12" cy="12" r="8" fill="#EB001B"/>
        <circle cx="24" cy="12" r="8" fill="#F79E1B"/>
        <path d="M12 12a8 8 0 0 1 8-8 8 8 0 0 1 0 16 8 8 0 0 1-8-8z" fill="#FF5F00"/>
      </svg>
    </SvgIcon>
  );
}

export function AmexIcon() {
  return (
    <SvgIcon sx={{ width: 36, height: 24 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <rect width="36" height="24" fill="#2E77BC"/>
        <text x="18" y="15" fill="#fff" fontSize="10" fontFamily="Arial" textAnchor="middle">
          AMEX
        </text>
      </svg>
    </SvgIcon>
  );
}

export function DiscoverIcon() {
  return (
    <SvgIcon sx={{ width: 36, height: 24 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <rect width="36" height="24" fill="#FF6000"/>
        <text x="18" y="15" fill="#fff" fontSize="10" fontFamily="Arial" textAnchor="middle">
          DISCOVER
        </text>
      </svg>
    </SvgIcon>
  );
}
export function OtherCardIcon() {
  return (
    <SvgIcon sx={{ width: 36, height: 24 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <rect width="36" height="24" fill="#A9A9A9"/>
        <text x="18" y="15" fill="#fff" fontSize="10" fontFamily="Arial" textAnchor="middle">
          OTHER
        </text>
      </svg>
    </SvgIcon>
  );
}