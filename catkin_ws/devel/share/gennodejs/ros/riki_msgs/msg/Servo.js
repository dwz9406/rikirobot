// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Servo {
  constructor() {
    this.Servo1 = 0;
    this.Servo2 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Servo
    // Serialize message field [Servo1]
    bufferInfo = _serializer.int32(obj.Servo1, bufferInfo);
    // Serialize message field [Servo2]
    bufferInfo = _serializer.int32(obj.Servo2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Servo
    let tmp;
    let len;
    let data = new Servo();
    // Deserialize message field [Servo1]
    tmp = _deserializer.int32(buffer);
    data.Servo1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Servo2]
    tmp = _deserializer.int32(buffer);
    data.Servo2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/Servo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b1d39e7bb90536edb373b61068d04284';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 Servo1
    int32 Servo2
    
    `;
  }

};

module.exports = Servo;
