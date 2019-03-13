// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point2D = require('./Point2D.js');
let Size = require('./Size.js');

//-----------------------------------------------------------

class RotatedRect {
  constructor() {
    this.angle = 0.0;
    this.center = new Point2D();
    this.size = new Size();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RotatedRect
    // Serialize message field [angle]
    bufferInfo = _serializer.float64(obj.angle, bufferInfo);
    // Serialize message field [center]
    bufferInfo = Point2D.serialize(obj.center, bufferInfo);
    // Serialize message field [size]
    bufferInfo = Size.serialize(obj.size, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RotatedRect
    let tmp;
    let len;
    let data = new RotatedRect();
    // Deserialize message field [angle]
    tmp = _deserializer.float64(buffer);
    data.angle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [center]
    tmp = Point2D.deserialize(buffer);
    data.center = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size]
    tmp = Size.deserialize(buffer);
    data.size = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/RotatedRect';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0ae60505c52f020176686d0689b8d390';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 angle
    Point2D center
    Size size
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    ================================================================================
    MSG: opencv_apps/Size
    float64 width
    float64 height
    
    
    `;
  }

};

module.exports = RotatedRect;
