// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Velocities {
  constructor() {
    this.linear_x = 0.0;
    this.linear_y = 0.0;
    this.angular_z = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Velocities
    // Serialize message field [linear_x]
    bufferInfo = _serializer.float32(obj.linear_x, bufferInfo);
    // Serialize message field [linear_y]
    bufferInfo = _serializer.float32(obj.linear_y, bufferInfo);
    // Serialize message field [angular_z]
    bufferInfo = _serializer.float32(obj.angular_z, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Velocities
    let tmp;
    let len;
    let data = new Velocities();
    // Deserialize message field [linear_x]
    tmp = _deserializer.float32(buffer);
    data.linear_x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [linear_y]
    tmp = _deserializer.float32(buffer);
    data.linear_y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angular_z]
    tmp = _deserializer.float32(buffer);
    data.angular_z = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/Velocities';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0ee8ad4cb7809be2d5a0a76352fea86a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    float32 linear_x
    float32 linear_y
    float32 angular_z
    
    `;
  }

};

module.exports = Velocities;
