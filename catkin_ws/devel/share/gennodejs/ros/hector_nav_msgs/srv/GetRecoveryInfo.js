// Auto-generated. Do not edit!

// (in-package hector_nav_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let nav_msgs = _finder('nav_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class GetRecoveryInfoRequest {
  constructor() {
    this.request_time = {secs: 0, nsecs: 0};
    this.request_radius = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRecoveryInfoRequest
    // Serialize message field [request_time]
    bufferInfo = _serializer.time(obj.request_time, bufferInfo);
    // Serialize message field [request_radius]
    bufferInfo = _serializer.float64(obj.request_radius, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRecoveryInfoRequest
    let tmp;
    let len;
    let data = new GetRecoveryInfoRequest();
    // Deserialize message field [request_time]
    tmp = _deserializer.time(buffer);
    data.request_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [request_radius]
    tmp = _deserializer.float64(buffer);
    data.request_radius = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetRecoveryInfoRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3916a0c55958d5dd43204cd2fe5608f6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    time request_time
    float64 request_radius
    
    `;
  }

};

class GetRecoveryInfoResponse {
  constructor() {
    this.trajectory_radius_entry_pose_to_req_pose = new nav_msgs.msg.Path();
    this.radius_entry_pose = new geometry_msgs.msg.PoseStamped();
    this.req_pose = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRecoveryInfoResponse
    // Serialize message field [trajectory_radius_entry_pose_to_req_pose]
    bufferInfo = nav_msgs.msg.Path.serialize(obj.trajectory_radius_entry_pose_to_req_pose, bufferInfo);
    // Serialize message field [radius_entry_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.radius_entry_pose, bufferInfo);
    // Serialize message field [req_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.req_pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRecoveryInfoResponse
    let tmp;
    let len;
    let data = new GetRecoveryInfoResponse();
    // Deserialize message field [trajectory_radius_entry_pose_to_req_pose]
    tmp = nav_msgs.msg.Path.deserialize(buffer);
    data.trajectory_radius_entry_pose_to_req_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [radius_entry_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.radius_entry_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [req_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.req_pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetRecoveryInfoResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a93581be8e34e3c09aeafc6b9b990ad5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    nav_msgs/Path trajectory_radius_entry_pose_to_req_pose
    geometry_msgs/PoseStamped radius_entry_pose
    geometry_msgs/PoseStamped req_pose
    
    
    
    ================================================================================
    MSG: nav_msgs/Path
    #An array of poses that represents a Path for a robot to follow
    Header header
    geometry_msgs/PoseStamped[] poses
    
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
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = {
  Request: GetRecoveryInfoRequest,
  Response: GetRecoveryInfoResponse
};
