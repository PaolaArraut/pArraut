/**
 * @fileoverview
 * This script is for parsing the output_frames.bin file into ASCII characters. As of now
 */

import * as fs from "fs";
import { Buffer } from "buffer";


interface FrameData {
  encodedFrames: Buffer;
  heightFrame: number;
  widthFrame: number;
  curByte: number;
}
const inputPath = "/Users/monkeylord/pArraut/pArraut/public/assets/output_frames.bin";
const outputPath = "/Users/monkeylord/pArraut/pArraut/public/assets/animation.bin";

const frameData: FrameData = {
  encodedFrames: Buffer.from(fs.readFileSync(inputPath)),
  heightFrame:24,
  widthFrame: 80,
  curByte: 0,
}
function renderState(frameData: FrameData) {
  //Map the pixel && luminence for the function
  //
  const name: string = "PaolaArraut";
  let namePointer: number = 0; //tracks the current character in the name
  const cacheArray: string[] = []; //stores the parsed name chars
  const fDimension: number = frameData.heightFrame * frameData.widthFrame;


  while (frameData.curByte < frameData.encodedFrames.length) {// 2. Parse pixels to my name lol characters
    let frameStr: string = "";
    const windowF: Buffer = frameData.encodedFrames.subarray(frameData.curByte, fDimension + frameData.curByte) //start; end(offset by 1)

    for (let row = 0; row < frameData.heightFrame; row++) {
      for (let col = 0; col < frameData.widthFrame; col++) {

        const pixel = windowF[row * frameData.widthFrame + col] //calculate pixel value
        const subIndex = namePointer % name.length;
        const subChar = name[subIndex];

       //Aggregating a range threshold for luminance
          if (pixel <= 45) {
            frameStr += " ";
          }
          else if (pixel > 45 && pixel <= 160) {
            frameStr += subChar.toLowerCase(); //points to the lower case var
            namePointer++;
          }
          else{
          frameStr += subChar.toUpperCase();
          namePointer++;
          }
    }
    }
    cacheArray.push(frameStr); //Pre-compiles for viewing
    frameData.curByte+= fDimension; //move onto the next frame
  }

  const result = cacheArray.join("\n");
  const resultBuffer = Buffer.from(result, "utf-8");
  return resultBuffer;
}

fs.writeFileSync(outputPath, renderState(frameData));
console.log("Success! Compiled animation.bin written to public/assets/");
