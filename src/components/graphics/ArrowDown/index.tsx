interface Props {
  className?: string;
  width?: number;
}

export const ArrowDown = ({ className, width = 16 }: Props) => (
  <svg
    className={className}
    width={width}
    height={width * (238 / 16)}
    viewBox="0 0 16 238"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Arrow pointing down"
    focusable="false"
    aria-hidden="true"
  >
    <path
      d="M7.30141 237.711C7.69193 238.102 8.3251 238.102 8.71562 237.711L15.0796 231.347C15.4701 230.957 15.4701 230.323 15.0796 229.933C14.6891 229.542 14.0559 229.542 13.6654 229.933L8.00851 235.59L2.35166 229.933C1.96114 229.542 1.32797 229.542 0.937447 229.933C0.546922 230.323 0.546922 230.957 0.937447 231.347L7.30141 237.711ZM9.00851 237.004L9.00851 -0.0045166H7.00851L7.00851 237.004H9.00851Z"
      fill="#C6C0C4"
    />
  </svg>

);
