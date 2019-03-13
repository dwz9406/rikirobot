// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Moment = require('./Moment.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MomentArrayStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.moments = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MomentArrayStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [moments]
    bufferInfo = _serializer.uint32(obj.moments.length, bufferInfo);
    // Serialize message field [moments]
    obj.moments.forEach((val) => {
      bufferInfo = Moment.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MomentArrayStamped
    let tmp;
    let len;
    let data = new MomentArrayStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [moments]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [moments]
    data.moments = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Moment.deserialize(buffer);
      data.moments[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/MomentArrayStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '28ac0beb70b037acf76c3bed71b679a9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    Moment[] moments
    
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
    MSG: opencv_apps/Moment
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

module.exports = MomentArrayStamped;
