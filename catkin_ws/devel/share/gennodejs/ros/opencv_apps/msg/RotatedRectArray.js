// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RotatedRect = require('./RotatedRect.js');

//-----------------------------------------------------------

class RotatedRectArray {
  constructor() {
    this.rects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RotatedRectArray
    // Serialize the length for message field [rects]
    bufferInfo = _serializer.uint32(obj.rects.length, bufferInfo);
    // Serialize message field [rects]
    obj.rects.forEach((val) => {
      bufferInfo = RotatedRect.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RotatedRectArray
    let tmp;
    let len;
    let data = new RotatedRectArray();
    // Deserialize array length for message field [rects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rects]
    data.rects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RotatedRect.deserialize(buffer);
      data.rects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/RotatedRectArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a27e397ed2b5b1a633561d324f64d2a6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    RotatedRect[] rects
    
    ================================================================================
    MSG: opencv_apps/RotatedRect
    float64 angle
    Point2D center
    Size size
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    ================================================================================
    MSG: opencv_apps/Size
    float64 width
    float64 height
    
    
    `;
  }

};

module.exports = RotatedRectArray;
