import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Default Title";
  const imageUrl =
    searchParams.get("image") ||
    "https://www.canva.com/design/DAGLA0zN-mA/KcHPtfd3q9_nykgYAR4QFw/view?utm_content=DAGLA0zN-mA&utm_campaign=designshare&utm_medium=link&utm_source=editor";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          fontSize: 48,
          textAlign: "center",
          color: "black",
        }}
      >
        <img
          src={imageUrl}
          alt="Custom Image"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        />
        <div>{title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
