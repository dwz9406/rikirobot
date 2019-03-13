// Auto-generated. Do not edit!

// (in-package frontier_exploration.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class Frontier {
  constructor() {
    this.size = 0;
    this.min_distance = 0.0;
    this.initial = new geometry_msgs.msg.Point();
    this.centroid = new geometry_msgs.msg.Point();
    this.middle = new geometry_msgs.msg.Point();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Frontier
    // Serialize message field [size]
    bufferInfo = _serializer.uint32(obj.size, bufferInfo);
    // Serialize message field [min_distance]
    bufferInfo = _serializer.float64(obj.min_distance, bufferInfo);
    // Serialize message field [initial]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.initial, bufferInfo);
    // Serialize message field [centroid]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.centroid, bufferInfo);
    // Serialize message field [middle]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.middle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Frontier
    let tmp;
    let len;
    let data = new Frontier();
    // Deserialize message field [size]
    tmp = _deserializer.uint32(buffer);
    data.size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_distance]
    tmp = _deserializer.float64(buffer);
    data.min_distance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [initial]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.initial = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [centroid]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.centroid = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [middle]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.middle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'frontier_exploration/Frontier';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1325c0e43f607455fdee9e36462f6ba0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 size
    float64 min_distance
    geometry_msgs/Point initial
    geometry_msgs/Point centroid
    geometry_msgs/Point middle
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

module.exports = Frontier;
