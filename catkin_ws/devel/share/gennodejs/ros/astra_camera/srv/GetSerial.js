// Auto-generated. Do not edit!

// (in-package astra_camera.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetSerialRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetSerialRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetSerialRequest
    let tmp;
    let len;
    let data = new GetSerialRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'astra_camera/GetSerialRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

class GetSerialResponse {
  constructor() {
    this.serial = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetSerialResponse
    // Serialize message field [serial]
    bufferInfo = _serializer.string(obj.serial, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetSerialResponse
    let tmp;
    let len;
    let data = new GetSerialResponse();
    // Deserialize message field [serial]
    tmp = _deserializer.string(buffer);
    data.serial = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'astra_camera/GetSerialResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fca40cf463282a80db4e2037c8a61741';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string serial
    
    
    `;
  }

};

module.exports = {
  Request: GetSerialRequest,
  Response: GetSerialResponse
};
