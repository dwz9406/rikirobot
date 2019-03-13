// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Line = require('./Line.js');

//-----------------------------------------------------------

class LineArray {
  constructor() {
    this.lines = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LineArray
    // Serialize the length for message field [lines]
    bufferInfo = _serializer.uint32(obj.lines.length, bufferInfo);
    // Serialize message field [lines]
    obj.lines.forEach((val) => {
      bufferInfo = Line.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LineArray
    let tmp;
    let len;
    let data = new LineArray();
    // Deserialize array length for message field [lines]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lines]
    data.lines = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Line.deserialize(buffer);
      data.lines[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/LineArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2b5441933900cc71528395dda29124da';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Line[] lines
    
    ================================================================================
    MSG: opencv_apps/Line
    Point2D pt1
    Point2D pt2
    
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = LineArray;
