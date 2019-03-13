// Auto-generated. Do not edit!

// (in-package hector_nav_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetDistanceToObstacleRequest {
  constructor() {
    this.point = new geometry_msgs.msg.PointStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetDistanceToObstacleRequest
    // Serialize message field [point]
    bufferInfo = geometry_msgs.msg.PointStamped.serialize(obj.point, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetDistanceToObstacleRequest
    let tmp;
    let len;
    let data = new GetDistanceToObstacleRequest();
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
    return 'hector_nav_msgs/GetDistanceToObstacleRequest';
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

class GetDistanceToObstacleResponse {
  constructor() {
    this.distance = 0.0;
    this.end_point = new geometry_msgs.msg.PointStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetDistanceToObstacleResponse
    // Serialize message field [distance]
    bufferInfo = _serializer.float32(obj.distance, bufferInfo);
    // Serialize message field [end_point]
    bufferInfo = geometry_msgs.msg.PointStamped.serialize(obj.end_point, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetDistanceToObstacleResponse
    let tmp;
    let len;
    let data = new GetDistanceToObstacleResponse();
    // Deserialize message field [distance]
    tmp = _deserializer.float32(buffer);
    data.distance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [end_point]
    tmp = geometry_msgs.msg.PointStamped.deserialize(buffer);
    data.end_point = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetDistanceToObstacleResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '019a8fc3bf7fd73c014dc08523397f1c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 distance
    geometry_msgs/PointStamped end_point
    
    
    
    
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

module.exports = {
  Request: GetDistanceToObstacleRequest,
  Response: GetDistanceToObstacleResponse
};
