// Auto-generated. Do not edit!

// (in-package riki_line_follower.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class pos {
  constructor() {
    this.direction = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type pos
    // Serialize message field [direction]
    bufferInfo = _serializer.int32(obj.direction, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type pos
    let tmp;
    let len;
    let data = new pos();
    // Deserialize message field [direction]
    tmp = _deserializer.int32(buffer);
    data.direction = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_line_follower/pos';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3b685cbe3a2d37c79069d18fc947a4de';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 direction
    
    `;
  }

};

module.exports = pos;
