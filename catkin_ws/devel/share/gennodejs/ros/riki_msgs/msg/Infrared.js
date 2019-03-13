// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Infrared {
  constructor() {
    this.front = 0.0;
    this.rear = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Infrared
    // Serialize message field [front]
    bufferInfo = _serializer.float32(obj.front, bufferInfo);
    // Serialize message field [rear]
    bufferInfo = _serializer.float32(obj.rear, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Infrared
    let tmp;
    let len;
    let data = new Infrared();
    // Deserialize message field [front]
    tmp = _deserializer.float32(buffer);
    data.front = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rear]
    tmp = _deserializer.float32(buffer);
    data.rear = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/Infrared';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '25f4ca8647150542dc24ea09b80ff4f1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 front
    float32 rear
    
    
    `;
  }

};

module.exports = Infrared;
