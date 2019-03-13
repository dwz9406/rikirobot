// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Rect = require('./Rect.js');

//-----------------------------------------------------------

class RectArray {
  constructor() {
    this.rects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RectArray
    // Serialize the length for message field [rects]
    bufferInfo = _serializer.uint32(obj.rects.length, bufferInfo);
    // Serialize message field [rects]
    obj.rects.forEach((val) => {
      bufferInfo = Rect.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RectArray
    let tmp;
    let len;
    let data = new RectArray();
    // Deserialize array length for message field [rects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rects]
    data.rects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Rect.deserialize(buffer);
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
    return 'opencv_apps/RectArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd4a6f20c7699fa2791af675958a5f148';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Rect[] rects
    
    ================================================================================
    MSG: opencv_apps/Rect
    # opencv Rect data type, x-y is center point
    float64 x
    float64 y
    float64 width
    float64 height
    
    
    `;
  }

};

module.exports = RectArray;
