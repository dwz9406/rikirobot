// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Contour = require('./Contour.js');

//-----------------------------------------------------------

class ContourArray {
  constructor() {
    this.contours = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ContourArray
    // Serialize the length for message field [contours]
    bufferInfo = _serializer.uint32(obj.contours.length, bufferInfo);
    // Serialize message field [contours]
    obj.contours.forEach((val) => {
      bufferInfo = Contour.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ContourArray
    let tmp;
    let len;
    let data = new ContourArray();
    // Deserialize array length for message field [contours]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contours]
    data.contours = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Contour.deserialize(buffer);
      data.contours[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/ContourArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fc54374f45559dfed248b316ccf9181d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Contour[] contours
    
    ================================================================================
    MSG: opencv_apps/Contour
    Point2D[] points
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = ContourArray;
