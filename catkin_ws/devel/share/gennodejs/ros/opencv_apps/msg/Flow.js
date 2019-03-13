// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point2D = require('./Point2D.js');

//-----------------------------------------------------------

class Flow {
  constructor() {
    this.point = new Point2D();
    this.velocity = new Point2D();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Flow
    // Serialize message field [point]
    bufferInfo = Point2D.serialize(obj.point, bufferInfo);
    // Serialize message field [velocity]
    bufferInfo = Point2D.serialize(obj.velocity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Flow
    let tmp;
    let len;
    let data = new Flow();
    // Deserialize message field [point]
    tmp = Point2D.deserialize(buffer);
    data.point = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    tmp = Point2D.deserialize(buffer);
    data.velocity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Flow';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dd9a9efd88ba39035e78af697593d751';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point2D point
    Point2D velocity
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = Flow;
