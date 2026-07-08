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
}

const frameData: FrameData = {
  encodedFrames: Buffer.from(fs.readFileSync("./public/assets/output_frames.bin")),
  heightFrame:24,
  widthFrame:80, //Used ffmpeg to get the dimensions * Also credit to bad-apple pretext by frmlinn for indirectly introducing ffmpeg lol
}
for (let curByte = 0; curByte < frameData.encodedFrames.length; curByte++){
  /*
 This is where each byte will be parsed into an ASCII character */
}

//Currently learning and attempting to parse the bin into ascii characters
//Further implementation would involve it being my name
