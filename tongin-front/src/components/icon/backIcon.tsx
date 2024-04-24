type BackIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  onClick?: any;
};

const BackIcon = ({ width, height, fill, onClick }: BackIconProps) => {
  return (
    <svg
      onClick={onClick}
      width={width ? width : "3vw"}
      height={height ? height : "3vw"}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill ? fill : "black"}
        d="M248.91 50a206 206 0 0 1 35.857 3.13c85.207 15.025 152.077 81.895 167.102 167.102c15.023 85.208-24.944 170.917-99.874 214.178c-32.782 18.927-69.254 27.996-105.463 27.553c-46.555-.57-92.675-16.865-129.957-48.15l30.855-36.768a157.85 157.85 0 0 0 180.566 15.797a157.85 157.85 0 0 0 76.603-164.274A157.85 157.85 0 0 0 276.429 100.4a157.84 157.84 0 0 0-139.17 43.862L185 192H57V64l46.34 46.342C141.758 71.962 194.17 50.03 248.91 50"
      ></path>
    </svg>
  );
};
export default BackIcon;
