// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Flow = require('./Flow.js');

//-----------------------------------------------------------

class FlowArray {
  constructor() {
    this.flow = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FlowArray
    // Serialize the length for message field [flow]
    bufferInfo = _serializer.uint32(obj.flow.length, bufferInfo);
    // Serialize message field [flow]
    obj.flow.forEach((val) => {
      bufferInfo = Flow.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FlowArray
    let tmp;
    let len;
    let data = new FlowArray();
    // Deserialize array length for message field [flow]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flow]
    data.flow = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Flow.deserialize(buffer);
      data.flow[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/FlowArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fe292dca56eb3673cd698ea9ef841962';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Flow[] flow
    
    ================================================================================
    MSG: opencv_apps/Flow
    Point2D point
    Point2D velocity
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = FlowArray;
