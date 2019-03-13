// Auto-generated. Do not edit!

// (in-package hector_nav_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetSearchPositionRequest {
  constructor() {
    this.ooi_pose = new geometry_msgs.msg.PoseStamped();
    this.distance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetSearchPositionRequest
    // Serialize message field [ooi_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.ooi_pose, bufferInfo);
    // Serialize message field [distance]
    bufferInfo = _serializer.float32(obj.distance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetSearchPositionRequest
    let tmp;
    let len;
    let data = new GetSearchPositionRequest();
    // Deserialize message field [ooi_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.ooi_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [distance]
    tmp = _deserializer.float32(buffer);
    data.distance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetSearchPositionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a579e8b989d066f6c17946ab060a6ff9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    geometry_msgs/PoseStamped ooi_pose
    float32 distance
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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

class GetSearchPositionResponse {
  constructor() {
    this.search_pose = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetSearchPositionResponse
    // Serialize message field [search_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.search_pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetSearchPositionResponse
    let tmp;
    let len;
    let data = new GetSearchPositionResponse();
    // Deserialize message field [search_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.search_pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'hector_nav_msgs/GetSearchPositionResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6cc90c22cc49490b4dd1ef4798491231';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/PoseStamped search_pose
    
    
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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
  Request: GetSearchPositionRequest,
  Response: GetSearchPositionResponse
};
