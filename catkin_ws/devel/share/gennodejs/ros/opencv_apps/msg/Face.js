// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Rect = require('./Rect.js');

//-----------------------------------------------------------

class Face {
  constructor() {
    this.face = new Rect();
    this.eyes = [];
    this.label = '';
    this.confidence = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Face
    // Serialize message field [face]
    bufferInfo = Rect.serialize(obj.face, bufferInfo);
    // Serialize the length for message field [eyes]
    bufferInfo = _serializer.uint32(obj.eyes.length, bufferInfo);
    // Serialize message field [eyes]
    obj.eyes.forEach((val) => {
      bufferInfo = Rect.serialize(val, bufferInfo);
    });
    // Serialize message field [label]
    bufferInfo = _serializer.string(obj.label, bufferInfo);
    // Serialize message field [confidence]
    bufferInfo = _serializer.float64(obj.confidence, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Face
    let tmp;
    let len;
    let data = new Face();
    // Deserialize message field [face]
    tmp = Rect.deserialize(buffer);
    data.face = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [eyes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [eyes]
    data.eyes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Rect.deserialize(buffer);
      data.eyes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [label]
    tmp = _deserializer.string(buffer);
    data.label = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [confidence]
    tmp = _deserializer.float64(buffer);
    data.confidence = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Face';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a1a50e747b0ca7822ce8611c3ffa7a02';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Rect face
    Rect[] eyes
    string label
    float64 confidence
    
    ================================================================================
    MSG: opencv_apps/Rect
    # opencv Rect data type, x-y is center point
    float64 x
    float64 y
    float64 width
    float64 height
    
    
    `;
  }

};

module.exports = Face;
