import React from "react";
import { useState, useEffect } from "react";

function Animation() {
  const [frames, setFrames] = useState<string[]>([])
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/assets/animation.bin');
      if (!response.ok) {
        console.error('Server returned an error:', response.status);
        return;
      }
      const data = await response.text();
      setFrames(data.split('\n'));
    };

    load();
  }, []);

  return (
    <div>

    </div>
  );
}

export default Animation;
