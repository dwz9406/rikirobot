// Auto-generated. Do not edit!

// (in-package opencv_apps.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Face = require('./Face.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class FaceArrayStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.faces = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FaceArrayStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [faces]
    bufferInfo = _serializer.uint32(obj.faces.length, bufferInfo);
    // Serialize message field [faces]
    obj.faces.forEach((val) => {
      bufferInfo = Face.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FaceArrayStamped
    let tmp;
    let len;
    let data = new FaceArrayStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [faces]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [faces]
    data.faces = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Face.deserialize(buffer);
      data.faces[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'opencv_apps/FaceArrayStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a43dedd70c7b2338df14a8f4de0940ef';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    Face[] faces
    
    
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
    MSG: opencv_apps/Face
    Rect face
    Rect[] eyes
    string label
    float64 confidence
    
    ================================================================================
    MSG: opencv_apps/Rect
    # opencv Rect data type, x-y is center point
    float64 x
    float64 y
    float64 width
    float64 height
    
    
    `;
  }

};

module.exports = FaceArrayStamped;
