// Auto-generated. Do not edit!

// (in-package frontier_exploration.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class UpdateBoundaryPolygonRequest {
  constructor() {
    this.explore_boundary = new geometry_msgs.msg.PolygonStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UpdateBoundaryPolygonRequest
    // Serialize message field [explore_boundary]
    bufferInfo = geometry_msgs.msg.PolygonStamped.serialize(obj.explore_boundary, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UpdateBoundaryPolygonRequest
    let tmp;
    let len;
    let data = new UpdateBoundaryPolygonRequest();
    // Deserialize message field [explore_boundary]
    tmp = geometry_msgs.msg.PolygonStamped.deserialize(buffer);
    data.explore_boundary = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'frontier_exploration/UpdateBoundaryPolygonRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fcd73e86a17cffec115813ce5a863c84';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/PolygonStamped explore_boundary
    
    ================================================================================
    MSG: geometry_msgs/PolygonStamped
    # This represents a Polygon with reference coordinate frame and timestamp
    Header header
    Polygon polygon
    
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
    MSG: geometry_msgs/Polygon
    #A specification of a polygon where the first and last points are assumed to be connected
    Point32[] points
    
    ================================================================================
    MSG: geometry_msgs/Point32
    # This contains the position of a point in free space(with 32 bits of precision).
    # It is recommeded to use Point wherever possible instead of Point32.  
    # 
    # This recommendation is to promote interoperability.  
    #
    # This message is designed to take up less space when sending
    # lots of points at once, as in the case of a PointCloud.  
    
    float32 x
    float32 y
    float32 z
    `;
  }

};

class UpdateBoundaryPolygonResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UpdateBoundaryPolygonResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UpdateBoundaryPolygonResponse
    let tmp;
    let len;
    let data = new UpdateBoundaryPolygonResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'frontier_exploration/UpdateBoundaryPolygonResponse';
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

module.exports = {
  Request: UpdateBoundaryPolygonRequest,
  Response: UpdateBoundaryPolygonResponse
};
