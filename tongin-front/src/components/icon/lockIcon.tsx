type LockIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  onClick?: any;
};

const LockIcon = ({ width, height, fill, onClick }: LockIconProps) => {
  return (
    <svg
      onClick={onClick}
      width={width ? width : "5vw"}
      height={height ? height : "5vw"}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1116_1045)">
        <path
          fill={fill ? fill : "black"}
          d="M38.0242 16.7747H42.1908C42.7434 16.7747 43.2733 16.9942 43.664 17.3849C44.0547 17.7756 44.2742 18.3055 44.2742 18.8581V43.8581C44.2742 44.4106 44.0547 44.9405 43.664 45.3312C43.2733 45.7219 42.7434 45.9414 42.1908 45.9414H8.8575C8.30497 45.9414 7.77506 45.7219 7.38436 45.3312C6.99366 44.9405 6.77417 44.4106 6.77417 43.8581V18.8581C6.77417 18.3055 6.99366 17.7756 7.38436 17.3849C7.77506 16.9942 8.30497 16.7747 8.8575 16.7747H13.0242V14.6914C13.0242 11.3762 14.3411 8.19678 16.6853 5.85257C19.0295 3.50837 22.209 2.19141 25.5242 2.19141C28.8394 2.19141 32.0188 3.50837 34.363 5.85257C36.7072 8.19678 38.0242 11.3762 38.0242 14.6914V16.7747ZM23.4408 32.8831V37.6081H27.6075V32.8831C28.4018 32.4245 29.0227 31.7166 29.3737 30.8691C29.7247 30.0217 29.7863 29.0822 29.5489 28.1962C29.3115 27.3102 28.7884 26.5274 28.0607 25.969C27.333 25.4106 26.4414 25.108 25.5242 25.108C24.6069 25.108 23.7153 25.4106 22.9877 25.969C22.26 26.5274 21.7369 27.3102 21.4995 28.1962C21.2621 29.0822 21.3237 30.0217 21.6747 30.8691C22.0257 31.7166 22.6465 32.4245 23.4408 32.8831V32.8831ZM33.8575 16.7747V14.6914C33.8575 12.4813 32.9795 10.3617 31.4167 8.79885C29.8539 7.23605 27.7343 6.35807 25.5242 6.35807C23.314 6.35807 21.1944 7.23605 19.6316 8.79885C18.0688 10.3617 17.1908 12.4813 17.1908 14.6914V16.7747H33.8575Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1116_1045">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0.52417 0.107422)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LockIcon;