// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Circle = require('./Circle.js');

//-----------------------------------------------------------

class CircleArray {
  constructor() {
    this.circles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CircleArray
    // Serialize the length for message field [circles]
    bufferInfo = _serializer.uint32(obj.circles.length, bufferInfo);
    // Serialize message field [circles]
    obj.circles.forEach((val) => {
      bufferInfo = Circle.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CircleArray
    let tmp;
    let len;
    let data = new CircleArray();
    // Deserialize array length for message field [circles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [circles]
    data.circles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Circle.deserialize(buffer);
      data.circles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/CircleArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1970b146e338dd024c765e522039a727';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Circle[] circles
    
    
    ================================================================================
    MSG: opencv_apps/Circle
    Point2D center
    float64 radius
    
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = CircleArray;
