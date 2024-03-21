type BlankIconProps = {
  width?: string;
  height: string;
  fill: string;
  onClick?: any;
};

const BlankBoxIcon = ({ width, height, fill, onClick }: BlankIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_209_5994)">
        <path
          d="M9.91634 9.91634V4.24967C9.91634 3.87395 10.0656 3.51362 10.3313 3.24794C10.597 2.98226 10.9573 2.83301 11.333 2.83301H29.7497C30.1254 2.83301 30.4857 2.98226 30.7514 3.24794C31.0171 3.51362 31.1663 3.87395 31.1663 4.24967V22.6663C31.1663 23.0421 31.0171 23.4024 30.7514 23.6681C30.4857 23.9338 30.1254 24.083 29.7497 24.083H24.083V29.7398C24.083 30.5274 23.4469 31.1663 22.6564 31.1663H4.25959C4.0722 31.1665 3.88661 31.1298 3.71344 31.0581C3.54028 30.9865 3.38294 30.8814 3.25043 30.7489C3.11792 30.6164 3.01285 30.4591 2.94122 30.2859C2.86959 30.1127 2.83282 29.9272 2.83301 29.7398L2.83726 11.3429C2.83726 10.5553 3.47334 9.91634 4.26384 9.91634H9.91634ZM12.7497 9.91634H22.6564C23.4441 9.91634 24.083 10.5524 24.083 11.3429V21.2497H28.333V5.66634H12.7497V9.91634ZM5.67059 12.7497L5.66634 28.333H21.2497V12.7497H5.67059Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_209_5994">
          <rect width="34" height="34" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BlankBoxIcon;
