// Auto-generated. Do not edit!

// (in-package hector_mapping.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class HectorIterData {
  constructor() {
    this.hessian = new Array(9).fill(0);
    this.conditionNum = 0.0;
    this.determinant = 0.0;
    this.conditionNum2d = 0.0;
    this.determinant2d = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HectorIterData
    // Serialize message field [hessian]
    obj.hessian.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [conditionNum]
    bufferInfo = _serializer.float64(obj.conditionNum, bufferInfo);
    // Serialize message field [determinant]
    bufferInfo = _serializer.float64(obj.determinant, bufferInfo);
    // Serialize message field [conditionNum2d]
    bufferInfo = _serializer.float64(obj.conditionNum2d, bufferInfo);
    // Serialize message field [determinant2d]
    bufferInfo = _serializer.float64(obj.determinant2d, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HectorIterData
    let tmp;
    let len;
    let data = new HectorIterData();
    len = 9;
    // Deserialize message field [hessian]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.hessian[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [conditionNum]
    tmp = _deserializer.float64(buffer);
    data.conditionNum = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [determinant]
    tmp = _deserializer.float64(buffer);
    data.determinant = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [conditionNum2d]
    tmp = _deserializer.float64(buffer);
    data.conditionNum2d = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [determinant2d]
    tmp = _deserializer.float64(buffer);
    data.determinant2d = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'hector_mapping/HectorIterData';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ecedaa7e26b5fc817a1add44c17fec5f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64[9] hessian
    float64 conditionNum
    float64 determinant
    float64 conditionNum2d
    float64 determinant2d
    
    `;
  }

};

module.exports = HectorIterData;
