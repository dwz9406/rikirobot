// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RotatedRect = require('./RotatedRect.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class RotatedRectArrayStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.rects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RotatedRectArrayStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [rects]
    bufferInfo = _serializer.uint32(obj.rects.length, bufferInfo);
    // Serialize message field [rects]
    obj.rects.forEach((val) => {
      bufferInfo = RotatedRect.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RotatedRectArrayStamped
    let tmp;
    let len;
    let data = new RotatedRectArrayStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [rects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rects]
    data.rects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = RotatedRect.deserialize(buffer);
      data.rects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/RotatedRectArrayStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '89a2d4a7db2d2945ca46c25a3bd8c7c5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    RotatedRect[] rects
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: opencv_apps/RotatedRect
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

module.exports = RotatedRectArrayStamped;
