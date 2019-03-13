// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Rect {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.width = 0.0;
    this.height = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Rect
    // Serialize message field [x]
    bufferInfo = _serializer.float64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float64(obj.y, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.float64(obj.width, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.float64(obj.height, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Rect
    let tmp;
    let len;
    let data = new Rect();
    // Deserialize message field [x]
    tmp = _deserializer.float64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.float64(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.float64(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Rect';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7048f28f1f0ef51e102638c86d9a7728';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # opencv Rect data type, x-y is center point
    float64 x
    float64 y
    float64 width
    float64 height
    
    
    `;
  }

};

module.exports = Rect;
