
interface ArrowProps {
  fill?: string;
  width?: number;
}

const Arrow = ({ width = 23, fill = '#ffffff' }: ArrowProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    aria-labelledby="icon-title"
    width={width}
    height={width * (238 / 16)}
    viewBox="0 0 16 238"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="icon-title">Arrow facing downwards</title>
    <path
      d="M7.30141 237.711C7.69193 238.102 8.3251 238.102 8.71562 237.711L15.0796 231.347C15.4701 230.957 15.4701 230.324 15.0796 229.933C14.6891 229.543 14.0559 229.543 13.6654 229.933L8.00851 235.59L2.35166 229.933C1.96114 229.543 1.32797 229.543 0.937447 229.933C0.546922 230.324 0.546922 230.957 0.937447 231.347L7.30141 237.711ZM9.00851 237.004L9.00851 -0.00427246H7.00851L7.00851 237.004H9.00851Z"
      fill={fill}
    />
  </svg>
);

export default Arrow;
