// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Ultrasonic {
  constructor() {
    this.front = 0.0;
    this.left = 0.0;
    this.right = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Ultrasonic
    // Serialize message field [front]
    bufferInfo = _serializer.float32(obj.front, bufferInfo);
    // Serialize message field [left]
    bufferInfo = _serializer.float32(obj.left, bufferInfo);
    // Serialize message field [right]
    bufferInfo = _serializer.float32(obj.right, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Ultrasonic
    let tmp;
    let len;
    let data = new Ultrasonic();
    // Deserialize message field [front]
    tmp = _deserializer.float32(buffer);
    data.front = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [left]
    tmp = _deserializer.float32(buffer);
    data.left = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [right]
    tmp = _deserializer.float32(buffer);
    data.right = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/Ultrasonic';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c69b6708342d9a4721f01e55dbb0d446';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 front
    float32 left
    float32 right 
    
    `;
  }

};

module.exports = Ultrasonic;
