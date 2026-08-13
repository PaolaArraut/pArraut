import { useState, useEffect } from "react";

function Animation() {
  const [frames, setFrames] = useState<string[]>([]);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/assets/animation.bin");
      if (!response.ok) {
        console.error("Server returned an error:", response.status);
        return;
      }
      const data = await response.text();
      setFrames(data.split("\n"));
    };
    load();
  }, []);

  useEffect(() => {
    if (frames.length === 0) return;
    const totalFrames = Math.floor(frames.length / 24);
    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % totalFrames);
    }, 1000 / 10);
    return () => clearInterval(timer);
  }, [frames.length]);

  if (frames.length === 0) {
    return <div>Loading animation...</div>;
  }

  const start = frameIndex * 24;
  const end = start + 24;
  const currentFrame = frames.slice(start, end).join("\n");

  return (
    <pre
      style={{
        fontSize: "12px",
        fontFamily: "ui-monospace, Consolas, 'Courier New', monospace",
        whiteSpace: "pre",
        overflowX: "auto",
        maxWidth: "100%",
        margin: 0,
        padding: "12px",
        backgroundColor: "#1f2028",
        color: "#f3f4f6",
        lineHeight: "1.2",
      }}
    >
      {currentFrame}
    </pre>
  );
}

export default Animation;
