export default function ButtonDecoration({ userColor, text }) {
  return (
    <div style={{ color: userColor }} className="cursor-pointer mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="192" height="9" viewBox="0 0 192 9">
        <g id="Group_11" data-name="Group 11" transform="translate(-2333 -1684)">
          <rect
            id="Rectangle_23"
            data-name="Rectangle 23"
            width="192"
            height="3"
            transform="translate(2333 1684)"
            fill="currentColor"
          />
          <path
            id="Path_32"
            data-name="Path 32"
            d="M0,0H157.183L143.036,5H0Z"
            transform="translate(2333 1688)"
            fill="currentColor"
          />
        </g>
      </svg>
      <h1 className="text-white text-2xl mt-[2px]">{text}</h1>
    </div>
  );
}
