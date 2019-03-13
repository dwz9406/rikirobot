// Auto-generated. Do not edit!

// (in-package frontier_exploration.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetNextFrontierRequest {
  constructor() {
    this.start_pose = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetNextFrontierRequest
    // Serialize message field [start_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.start_pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetNextFrontierRequest
    let tmp;
    let len;
    let data = new GetNextFrontierRequest();
    // Deserialize message field [start_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.start_pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'frontier_exploration/GetNextFrontierRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5b059506b52a2ec83de1e33422377a1b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/PoseStamped start_pose
    
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

class GetNextFrontierResponse {
  constructor() {
    this.next_frontier = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetNextFrontierResponse
    // Serialize message field [next_frontier]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.next_frontier, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetNextFrontierResponse
    let tmp;
    let len;
    let data = new GetNextFrontierResponse();
    // Deserialize message field [next_frontier]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.next_frontier = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'frontier_exploration/GetNextFrontierResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'df2ac5789785e819aa300966fa36644e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/PoseStamped next_frontier
    
    
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
  Request: GetNextFrontierRequest,
  Response: GetNextFrontierResponse
};
