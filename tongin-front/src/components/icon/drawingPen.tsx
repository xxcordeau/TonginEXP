type DrawingPenProps = {
  width?: string;
  height: string;
  fill: string;
  onClick?: any;
};
const DrawingPen = ({ width, height, fill, onClick }: DrawingPenProps) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_209_5993)">
        <path
          d="M18 33C9.7155 33 3 26.2845 3 18C3 9.7155 9.7155 3 18 3C26.2845 3 33 9.7155 33 18C33 26.2845 26.2845 33 18 33ZM25.5765 27.306L24.2835 22.1355C24.2022 21.8111 24.0149 21.5232 23.7513 21.3175C23.4877 21.1118 23.1629 21 22.8285 21H13.1715C12.8371 21 12.5123 21.1118 12.2487 21.3175C11.9851 21.5232 11.7978 21.8111 11.7165 22.1355L10.4235 27.306C12.562 29.0522 15.2391 30.0041 18 30C20.7609 30.0041 23.438 29.0522 25.5765 27.306ZM15 18H21V15.75L19.443 10.2975C19.3539 9.98349 19.1648 9.70713 18.9043 9.51034C18.6439 9.31355 18.3264 9.20707 18 9.20707C17.6736 9.20707 17.3561 9.31355 17.0957 9.51034C16.8352 9.70713 16.6461 9.98349 16.557 10.2975L15 15.75V18Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_209_5993">
          <rect width="36" height="36" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DrawingPen;
