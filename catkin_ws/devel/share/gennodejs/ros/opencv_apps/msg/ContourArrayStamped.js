// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Contour = require('./Contour.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ContourArrayStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.contours = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ContourArrayStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [contours]
    bufferInfo = _serializer.uint32(obj.contours.length, bufferInfo);
    // Serialize message field [contours]
    obj.contours.forEach((val) => {
      bufferInfo = Contour.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ContourArrayStamped
    let tmp;
    let len;
    let data = new ContourArrayStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [contours]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contours]
    data.contours = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Contour.deserialize(buffer);
      data.contours[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/ContourArrayStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6bcf2733566be102cf11fc89685fd962';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    Contour[] contours
    
    
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
    MSG: opencv_apps/Contour
    Point2D[] points
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = ContourArrayStamped;
