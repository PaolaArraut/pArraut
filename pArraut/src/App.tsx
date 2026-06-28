import React, { useMemo } from "react";
import { prepare, layout } from "@chenglou/pretext";
import "./App.css";

function App(): React.JSX.Element {
  const containerWidth = 400;
  const portfolioBio =
    "Computer Science student building high-performance web experiences. Currently exploring systems-first frontend layout engines and retro aesthetic designs.";

  // 1. Measure font metrics (Only runs once when the component mounts)
  const preparedText = useMemo(() => {
    return prepare(portfolioBio, "16px 'Courier New', monospace");
  }, [portfolioBio]);

  // 2. Compute the exact bounding box (Only runs if the container width changes)
  const textLayout = useMemo(() => {
    return layout(preparedText, containerWidth, 1.5); // text data, max width, line-height
  }, [preparedText, containerWidth]);

  return (
    <>
      <main
        className="app-container"
        style={{
          padding: "40px",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {/* A Neobrutalist container shaped entirely by Pretext's geometry */}
        <div
          style={{
            width: `${containerWidth}px`,
            height: `${textLayout.height}px`, // No browser layout reflow!
            border: "3px solid #000000",
            padding: "12px",
            backgroundColor: "#ffffff",
            boxShadow: "8px 8px 0px #000000",
            overflow: "hidden",
          }}
        >
          {portfolioBio}
        </div>

        <p style={{ marginTop: "20px", color: "#666" }}>
          Rendered height: <strong>{textLayout.height}px</strong> across{" "}
          <strong>{textLayout.lineCount}</strong> lines.
        </p>
      </main>
    </>
  );
}

export default App;
