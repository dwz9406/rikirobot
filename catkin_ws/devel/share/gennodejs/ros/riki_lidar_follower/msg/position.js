// Auto-generated. Do not edit!

// (in-package riki_lidar_follower.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class position {
  constructor() {
    this.angleX = 0.0;
    this.angleY = 0.0;
    this.distance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type position
    // Serialize message field [angleX]
    bufferInfo = _serializer.float32(obj.angleX, bufferInfo);
    // Serialize message field [angleY]
    bufferInfo = _serializer.float32(obj.angleY, bufferInfo);
    // Serialize message field [distance]
    bufferInfo = _serializer.float32(obj.distance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type position
    let tmp;
    let len;
    let data = new position();
    // Deserialize message field [angleX]
    tmp = _deserializer.float32(buffer);
    data.angleX = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angleY]
    tmp = _deserializer.float32(buffer);
    data.angleY = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [distance]
    tmp = _deserializer.float32(buffer);
    data.distance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_lidar_follower/position';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e4df5e09e92d9d2b4758c9aab7a9ebeb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 angleX
    float32 angleY
    float32 distance
    
    `;
  }

};

module.exports = position;
