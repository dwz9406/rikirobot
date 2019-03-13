// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point2D = require('./Point2D.js');

//-----------------------------------------------------------

class Moment {
  constructor() {
    this.m00 = 0.0;
    this.m10 = 0.0;
    this.m01 = 0.0;
    this.m20 = 0.0;
    this.m11 = 0.0;
    this.m02 = 0.0;
    this.m30 = 0.0;
    this.m21 = 0.0;
    this.m12 = 0.0;
    this.m03 = 0.0;
    this.mu20 = 0.0;
    this.mu11 = 0.0;
    this.mu02 = 0.0;
    this.mu30 = 0.0;
    this.mu21 = 0.0;
    this.mu12 = 0.0;
    this.mu03 = 0.0;
    this.nu20 = 0.0;
    this.nu11 = 0.0;
    this.nu02 = 0.0;
    this.nu30 = 0.0;
    this.nu21 = 0.0;
    this.nu12 = 0.0;
    this.nu03 = 0.0;
    this.center = new Point2D();
    this.length = 0.0;
    this.area = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Moment
    // Serialize message field [m00]
    bufferInfo = _serializer.float64(obj.m00, bufferInfo);
    // Serialize message field [m10]
    bufferInfo = _serializer.float64(obj.m10, bufferInfo);
    // Serialize message field [m01]
    bufferInfo = _serializer.float64(obj.m01, bufferInfo);
    // Serialize message field [m20]
    bufferInfo = _serializer.float64(obj.m20, bufferInfo);
    // Serialize message field [m11]
    bufferInfo = _serializer.float64(obj.m11, bufferInfo);
    // Serialize message field [m02]
    bufferInfo = _serializer.float64(obj.m02, bufferInfo);
    // Serialize message field [m30]
    bufferInfo = _serializer.float64(obj.m30, bufferInfo);
    // Serialize message field [m21]
    bufferInfo = _serializer.float64(obj.m21, bufferInfo);
    // Serialize message field [m12]
    bufferInfo = _serializer.float64(obj.m12, bufferInfo);
    // Serialize message field [m03]
    bufferInfo = _serializer.float64(obj.m03, bufferInfo);
    // Serialize message field [mu20]
    bufferInfo = _serializer.float64(obj.mu20, bufferInfo);
    // Serialize message field [mu11]
    bufferInfo = _serializer.float64(obj.mu11, bufferInfo);
    // Serialize message field [mu02]
    bufferInfo = _serializer.float64(obj.mu02, bufferInfo);
    // Serialize message field [mu30]
    bufferInfo = _serializer.float64(obj.mu30, bufferInfo);
    // Serialize message field [mu21]
    bufferInfo = _serializer.float64(obj.mu21, bufferInfo);
    // Serialize message field [mu12]
    bufferInfo = _serializer.float64(obj.mu12, bufferInfo);
    // Serialize message field [mu03]
    bufferInfo = _serializer.float64(obj.mu03, bufferInfo);
    // Serialize message field [nu20]
    bufferInfo = _serializer.float64(obj.nu20, bufferInfo);
    // Serialize message field [nu11]
    bufferInfo = _serializer.float64(obj.nu11, bufferInfo);
    // Serialize message field [nu02]
    bufferInfo = _serializer.float64(obj.nu02, bufferInfo);
    // Serialize message field [nu30]
    bufferInfo = _serializer.float64(obj.nu30, bufferInfo);
    // Serialize message field [nu21]
    bufferInfo = _serializer.float64(obj.nu21, bufferInfo);
    // Serialize message field [nu12]
    bufferInfo = _serializer.float64(obj.nu12, bufferInfo);
    // Serialize message field [nu03]
    bufferInfo = _serializer.float64(obj.nu03, bufferInfo);
    // Serialize message field [center]
    bufferInfo = Point2D.serialize(obj.center, bufferInfo);
    // Serialize message field [length]
    bufferInfo = _serializer.float64(obj.length, bufferInfo);
    // Serialize message field [area]
    bufferInfo = _serializer.float64(obj.area, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Moment
    let tmp;
    let len;
    let data = new Moment();
    // Deserialize message field [m00]
    tmp = _deserializer.float64(buffer);
    data.m00 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m10]
    tmp = _deserializer.float64(buffer);
    data.m10 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m01]
    tmp = _deserializer.float64(buffer);
    data.m01 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m20]
    tmp = _deserializer.float64(buffer);
    data.m20 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m11]
    tmp = _deserializer.float64(buffer);
    data.m11 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m02]
    tmp = _deserializer.float64(buffer);
    data.m02 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m30]
    tmp = _deserializer.float64(buffer);
    data.m30 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m21]
    tmp = _deserializer.float64(buffer);
    data.m21 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m12]
    tmp = _deserializer.float64(buffer);
    data.m12 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m03]
    tmp = _deserializer.float64(buffer);
    data.m03 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu20]
    tmp = _deserializer.float64(buffer);
    data.mu20 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu11]
    tmp = _deserializer.float64(buffer);
    data.mu11 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu02]
    tmp = _deserializer.float64(buffer);
    data.mu02 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu30]
    tmp = _deserializer.float64(buffer);
    data.mu30 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu21]
    tmp = _deserializer.float64(buffer);
    data.mu21 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu12]
    tmp = _deserializer.float64(buffer);
    data.mu12 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mu03]
    tmp = _deserializer.float64(buffer);
    data.mu03 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu20]
    tmp = _deserializer.float64(buffer);
    data.nu20 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu11]
    tmp = _deserializer.float64(buffer);
    data.nu11 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu02]
    tmp = _deserializer.float64(buffer);
    data.nu02 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu30]
    tmp = _deserializer.float64(buffer);
    data.nu30 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu21]
    tmp = _deserializer.float64(buffer);
    data.nu21 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu12]
    tmp = _deserializer.float64(buffer);
    data.nu12 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nu03]
    tmp = _deserializer.float64(buffer);
    data.nu03 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [center]
    tmp = Point2D.deserialize(buffer);
    data.center = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [length]
    tmp = _deserializer.float64(buffer);
    data.length = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [area]
    tmp = _deserializer.float64(buffer);
    data.area = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/Moment';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '560ee3fabfffb4ed4155742d6db8a03c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # spatial moments
    float64 m00
    float64 m10
    float64 m01
    float64 m20
    float64 m11
    float64 m02
    float64 m30
    float64 m21
    float64 m12
    float64 m03
    
    # central moments
    float64 mu20
    float64 mu11
    float64 mu02
    float64 mu30
    float64 mu21
    float64 mu12
    float64 mu03
    
    # central normalized moments
    float64 nu20
    float64 nu11
    float64 nu02
    float64 nu30
    float64 nu21
    float64 nu12
    float64 nu03
    
    # center of mass m10/m00, m01/m00
    Point2D center
    float64 length
    float64 area
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = Moment;
