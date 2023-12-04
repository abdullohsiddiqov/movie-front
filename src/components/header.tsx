
import React from "react";
import "./styles/index.scss";
export function Header() {
  return (
    <div className=" header">
      <p className="top">Top</p>
      <p className="name">Spider man no way home </p>
      <div className="info">
        Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem.
        Consectetur donec cursus massa nunc ullamcorper semper.
      </div>
      <p className="info2">2022 | 16+ | 1 Seans | TV series for teenagers</p>
      <div className="about_movie">
        <p>
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 15.9119L16.3348 18.8277C17.3118 19.3621 18.5073 18.5721 18.2502 17.5731L16.8362 12.09L21.554 8.39594C22.4153 7.72218 21.9525 6.44434 20.8212 6.36303L14.6123 5.88674L12.1827 0.705712C11.7456 -0.235237 10.2544 -0.235237 9.81734 0.705712L7.38773 5.87513L1.17875 6.35141C0.047509 6.43273 -0.415273 7.71056 0.446015 8.38433L5.16381 12.0784L3.74976 17.5615C3.49266 18.5605 4.68818 19.3505 5.66516 18.8161L11 15.9119Z"
              fill="#FCC209"
            />
          </svg>
        </p>
        <span className="ball">5.8</span>
        <span>Seans</span>
        <span className="num">1</span>
        <span> - Episcode</span>
        <span className="num">1</span>
        <span> - Genre </span>
        <span className="num">comedy,detective,detective</span>
      </div>
      <button>🎬Watch</button>
    </div>
  );
}