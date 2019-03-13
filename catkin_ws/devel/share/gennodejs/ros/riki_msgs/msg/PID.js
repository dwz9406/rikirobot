// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PID {
  constructor() {
    this.p = 0.0;
    this.d = 0.0;
    this.i = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PID
    // Serialize message field [p]
    bufferInfo = _serializer.float32(obj.p, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.float32(obj.d, bufferInfo);
    // Serialize message field [i]
    bufferInfo = _serializer.float32(obj.i, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PID
    let tmp;
    let len;
    let data = new PID();
    // Deserialize message field [p]
    tmp = _deserializer.float32(buffer);
    data.p = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.float32(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i]
    tmp = _deserializer.float32(buffer);
    data.i = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/PID';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a559df187bdf63f426d5f304b6b28bb4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 p
    float32 d
    float32 i
    
    `;
  }

};

module.exports = PID;
