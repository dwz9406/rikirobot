// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point2D = require('./Point2D.js');

//-----------------------------------------------------------

class Circle {
  constructor() {
    this.center = new Point2D();
    this.radius = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Circle
    // Serialize message field [center]
    bufferInfo = Point2D.serialize(obj.center, bufferInfo);
    // Serialize message field [radius]
    bufferInfo = _serializer.float64(obj.radius, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Circle
    let tmp;
    let len;
    let data = new Circle();
    // Deserialize message field [center]
    tmp = Point2D.deserialize(buffer);
    data.center = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [radius]
    tmp = _deserializer.float64(buffer);
    data.radius = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Circle';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4f6847051b4fe493b5af8caad66201d5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Point2D center
    float64 radius
    
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = Circle;
