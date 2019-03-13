// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Flow = require('./Flow.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class FlowStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.flow = new Flow();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FlowStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [flow]
    bufferInfo = Flow.serialize(obj.flow, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FlowStamped
    let tmp;
    let len;
    let data = new FlowStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flow]
    tmp = Flow.deserialize(buffer);
    data.flow = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/FlowStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b55faf909449963372b92417925b68cc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    Flow flow
    
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
    MSG: opencv_apps/Flow
    Point2D point
    Point2D velocity
    
    ================================================================================
    MSG: opencv_apps/Point2D
    float64 x
    float64 y
    
    
    `;
  }

};

module.exports = FlowStamped;
