// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class DHT22 {
  constructor() {
    this.Temperature = 0.0;
    this.Humidity = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DHT22
    // Serialize message field [Temperature]
    bufferInfo = _serializer.float32(obj.Temperature, bufferInfo);
    // Serialize message field [Humidity]
    bufferInfo = _serializer.float32(obj.Humidity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DHT22
    let tmp;
    let len;
    let data = new DHT22();
    // Deserialize message field [Temperature]
    tmp = _deserializer.float32(buffer);
    data.Temperature = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Humidity]
    tmp = _deserializer.float32(buffer);
    data.Humidity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/DHT22';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5444ed9cc78ceaace5058c55fe815905';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 Temperature
    float32 Humidity
    
    `;
  }

};

module.exports = DHT22;
