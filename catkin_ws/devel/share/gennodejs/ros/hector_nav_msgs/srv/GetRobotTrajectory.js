// Auto-generated. Do not edit!

// (in-package hector_nav_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let nav_msgs = _finder('nav_msgs');

//-----------------------------------------------------------

class GetRobotTrajectoryRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRobotTrajectoryRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRobotTrajectoryRequest
    let tmp;
    let len;
    let data = new GetRobotTrajectoryRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetRobotTrajectoryRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    `;
  }

};

class GetRobotTrajectoryResponse {
  constructor() {
    this.trajectory = new nav_msgs.msg.Path();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRobotTrajectoryResponse
    // Serialize message field [trajectory]
    bufferInfo = nav_msgs.msg.Path.serialize(obj.trajectory, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRobotTrajectoryResponse
    let tmp;
    let len;
    let data = new GetRobotTrajectoryResponse();
    // Deserialize message field [trajectory]
    tmp = nav_msgs.msg.Path.deserialize(buffer);
    data.trajectory = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetRobotTrajectoryResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c7bd40129c5786fc26351edbd33b8d33';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    nav_msgs/Path trajectory
    
    
    
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
  Request: GetRobotTrajectoryRequest,
  Response: GetRobotTrajectoryResponse
};
