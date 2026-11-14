import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "#090909",
        }}
      >
        <svg height="112" viewBox="0 0 64 64" width="112">
          <path
            d="M17 19.5c5.8-2.1 11.1-1.6 15 1.2v25c-3.9-2.8-9.2-3.3-15-1.2v-25Z"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.5"
          />
          <path
            d="M47 19.5c-5.8-2.1-11.1-1.6-15 1.2v25c3.9-2.8 9.2-3.3 15-1.2v-25Z"
            fill="none"
            stroke="#ffce00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.5"
          />
          <path
            d="M18 52h28"
            stroke="#dd0000"
            strokeLinecap="round"
            strokeWidth="3.5"
          />
        </svg>
      </div>
    ),
    size,
  );
}
