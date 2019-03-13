// Auto-generated. Do not edit!

// (in-package robot_localization.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetStateRequest {
  constructor() {
    this.time_stamp = {secs: 0, nsecs: 0};
    this.frame_id = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetStateRequest
    // Serialize message field [time_stamp]
    bufferInfo = _serializer.time(obj.time_stamp, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.string(obj.frame_id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetStateRequest
    let tmp;
    let len;
    let data = new GetStateRequest();
    // Deserialize message field [time_stamp]
    tmp = _deserializer.time(buffer);
    data.time_stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frame_id]
    tmp = _deserializer.string(buffer);
    data.frame_id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robot_localization/GetStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '853815113280ed7c4ea64ad795f27171';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time time_stamp
    string frame_id
    
    `;
  }

};

class GetStateResponse {
  constructor() {
    this.state = new Array(15).fill(0);
    this.covariance = new Array(225).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetStateResponse
    // Serialize message field [state]
    obj.state.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [covariance]
    obj.covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetStateResponse
    let tmp;
    let len;
    let data = new GetStateResponse();
    len = 15;
    // Deserialize message field [state]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.state[i] = tmp.data;
      buffer = tmp.buffer;
    }
    len = 225;
    // Deserialize message field [covariance]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.covariance[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robot_localization/GetStateResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8d49e6249cf8371736e3286b16a7ce83';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    float64[15] state
    
    
    float64[225] covariance
    
    
    `;
  }

};

module.exports = {
  Request: GetStateRequest,
  Response: GetStateResponse
};
