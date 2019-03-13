// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point2D = require('./Point2D.js');

//-----------------------------------------------------------

class Line {
  constructor() {
    this.pt1 = new Point2D();
    this.pt2 = new Point2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Line
    // Serialize message field [pt1]
    bufferInfo = Point2D.serialize(obj.pt1, bufferInfo);
    // Serialize message field [pt2]
    bufferInfo = Point2D.serialize(obj.pt2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Line
    let tmp;
    let len;
    let data = new Line();
    // Deserialize message field [pt1]
    tmp = Point2D.deserialize(buffer);
    data.pt1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pt2]
    tmp = Point2D.deserialize(buffer);
    data.pt2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Line';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a1419010b3fc4549e3f450018363d000';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point2D pt1
    Point2D pt2
    
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = Line;
