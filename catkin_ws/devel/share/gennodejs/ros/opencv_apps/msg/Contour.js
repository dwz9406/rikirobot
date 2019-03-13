// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point2D = require('./Point2D.js');

//-----------------------------------------------------------

class Contour {
  constructor() {
    this.points = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Contour
    // Serialize the length for message field [points]
    bufferInfo = _serializer.uint32(obj.points.length, bufferInfo);
    // Serialize message field [points]
    obj.points.forEach((val) => {
      bufferInfo = Point2D.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Contour
    let tmp;
    let len;
    let data = new Contour();
    // Deserialize array length for message field [points]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [points]
    data.points = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Point2D.deserialize(buffer);
      data.points[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Contour';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8f02263beef99aa03117a577a3eb879d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point2D[] points
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = Contour;
