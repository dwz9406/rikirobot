// Auto-generated. Do not edit!

// (in-package hector_mapping.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let HectorIterData = require('./HectorIterData.js');

//-----------------------------------------------------------

class HectorDebugInfo {
  constructor() {
    this.iterData = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HectorDebugInfo
    // Serialize the length for message field [iterData]
    bufferInfo = _serializer.uint32(obj.iterData.length, bufferInfo);
    // Serialize message field [iterData]
    obj.iterData.forEach((val) => {
      bufferInfo = HectorIterData.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HectorDebugInfo
    let tmp;
    let len;
    let data = new HectorDebugInfo();
    // Deserialize array length for message field [iterData]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [iterData]
    data.iterData = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = HectorIterData.deserialize(buffer);
      data.iterData[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hector_mapping/HectorDebugInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4d33c0696c0c536f5c1447c260756674';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    HectorIterData[] iterData
    ================================================================================
    MSG: hector_mapping/HectorIterData
    float64[9] hessian
    float64 conditionNum
    float64 determinant
    float64 conditionNum2d
    float64 determinant2d
    
    `;
  }

};

module.exports = HectorDebugInfo;
