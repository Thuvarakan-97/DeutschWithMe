import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 82% 18%, #4a1515 0%, #171717 48%, #090909 100%)",
          color: "#fff",
        }}
      >
        <div style={{ color: "#ffce00", fontSize: 28, fontWeight: 600 }}>
          DeutschWithMe
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 950,
            marginTop: 28,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 1.05,
          }}
        >
          Learn German.
          <br />
          Build Your Future.
        </div>
        <div style={{ marginTop: 32, color: "#f2eee5", fontSize: 28 }}>
          Online German A1 and A2 courses from Manipay, Jaffna
        </div>
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -240,
            width: 600,
            height: 600,
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 300,
          }}
        />
      </div>
    ),
    size,
  );
}
