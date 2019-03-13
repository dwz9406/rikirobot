// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Face = require('./Face.js');

//-----------------------------------------------------------

class FaceArray {
  constructor() {
    this.faces = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FaceArray
    // Serialize the length for message field [faces]
    bufferInfo = _serializer.uint32(obj.faces.length, bufferInfo);
    // Serialize message field [faces]
    obj.faces.forEach((val) => {
      bufferInfo = Face.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FaceArray
    let tmp;
    let len;
    let data = new FaceArray();
    // Deserialize array length for message field [faces]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [faces]
    data.faces = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Face.deserialize(buffer);
      data.faces[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/FaceArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3ae7a36ff47d72f5dd1d764612b2b3c8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Face[] faces
    
    
    ================================================================================
    MSG: opencv_apps/Face
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

module.exports = FaceArray;
