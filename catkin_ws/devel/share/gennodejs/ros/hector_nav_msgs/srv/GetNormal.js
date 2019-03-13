// Auto-generated. Do not edit!

// (in-package hector_nav_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetNormalRequest {
  constructor() {
    this.point = new geometry_msgs.msg.PointStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetNormalRequest
    // Serialize message field [point]
    bufferInfo = geometry_msgs.msg.PointStamped.serialize(obj.point, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetNormalRequest
    let tmp;
    let len;
    let data = new GetNormalRequest();
    // Deserialize message field [point]
    tmp = geometry_msgs.msg.PointStamped.deserialize(buffer);
    data.point = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetNormalRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '47dfdbd810b48d0a47b7ad67e4191bcc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/PointStamped point
    
    ================================================================================
    MSG: geometry_msgs/PointStamped
    # This represents a Point with reference coordinate frame and timestamp
    Header header
    Point point
    
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
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

class GetNormalResponse {
  constructor() {
    this.normal = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetNormalResponse
    // Serialize message field [normal]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.normal, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetNormalResponse
    let tmp;
    let len;
    let data = new GetNormalResponse();
    // Deserialize message field [normal]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.normal = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetNormalResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9a5880458dbcd28bf7ed1889c8ac7f8e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Vector3 normal
    
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = {
  Request: GetNormalRequest,
  Response: GetNormalResponse
};
