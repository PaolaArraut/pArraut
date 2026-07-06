import * as fs from "fs";
import { Buffer } from "buffer";
import "./public/assets/output_frames.bin";

fs.readFile("./public/assets/output_frames.bin", (err, frames) => {
  if (err) {
    console.error(prompt("error, the cradle bin isn't available"));
    return; //Taken from XJavascript.com for reference
  }
  {
    const framesBuffer = Buffer.from(frames);
    const encodedFrames = framesBuffer.toString("ascii");
    console.log("info:", encodedFrames);
  }
});
//Currently learning and attempting to parse the bin into ascii characters
//Further implementation would involve it being my gov name lol
