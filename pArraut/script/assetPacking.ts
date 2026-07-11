/**
 * @fileoverview
 * This script is for parsing the output_frames.bin file into ASCII characters. As of now
 */

import * as fs from "fs";
import { Buffer } from "buffer";
import "./public/assets/output_frames.bin";

interface FrameData {
  encodedFrames: Buffer;
  heightFrame: number;
  widthFrame: number;
  curByte: number;
}

const frameData: FrameData = {
  encodedFrames: Buffer.from(fs.readFileSync("./public/assets/output_frames.bin")),
  heightFrame:24,
  widthFrame: 80,
  curByte: 0,
}
function renderState(frameData: FrameData) {
  //Map the pixel && luminence for the function
  //
  const name: String = "PaolaArraut";
  let namePointer: number = 0; //tracks the current character in the name
  const cacheArray: string[] = []; //stores the parsed name chars
  const fDimension: number = frameData.heightFrame * frameData.widthFrame;


  while (frameData.curByte < frameData.encodedFrames.length) {
    let frameStr : string = "";
    const windowF: Buffer = frameData.encodedFrames.subarray(frameData.curByte, fDimension + frameData.curByte) //start; end(offset by 1)

    for (let row = 0; row < frameData.heightFrame; row++) {
      for (let col = 0; col < frameData.widthFrame; col++) {

        const pixel = windowF[row * frameData.widthFrame + col] //calculate pixel value
        const THRESHOLD = [0, ...45]

       //Aggregating a range threshold for luminance
        for (namePointer < name.length){
            frameData.curByte++;
            namePointer++;

          }
        }
        */
    }
    } // 2. Parse pixels to my name lol characters
  }// 3. Push string to cacheArray
    // 4. Move currentByte pointer forward
    //Goes through each byte in the encodedFrames buffer


}
renderState(frameData);

//Currently learning and attempting to parse the bin into ascii characters
//Further implementation would involve it being my name
