// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Battery {
  constructor() {
    this.battery = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Battery
    // Serialize message field [battery]
    bufferInfo = _serializer.float32(obj.battery, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Battery
    let tmp;
    let len;
    let data = new Battery();
    // Deserialize message field [battery]
    tmp = _deserializer.float32(buffer);
    data.battery = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/Battery';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'da7225c3562dd2b9b88bf15aa7eb6a9e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 battery
    
    `;
  }

};

module.exports = Battery;
