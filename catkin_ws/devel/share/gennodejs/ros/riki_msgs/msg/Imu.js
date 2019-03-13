// Auto-generated. Do not edit!

// (in-package riki_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class Imu {
  constructor() {
    this.linear_acceleration = new geometry_msgs.msg.Vector3();
    this.angular_velocity = new geometry_msgs.msg.Vector3();
    this.magnetic_field = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Imu
    // Serialize message field [linear_acceleration]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.linear_acceleration, bufferInfo);
    // Serialize message field [angular_velocity]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.angular_velocity, bufferInfo);
    // Serialize message field [magnetic_field]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.magnetic_field, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Imu
    let tmp;
    let len;
    let data = new Imu();
    // Deserialize message field [linear_acceleration]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.linear_acceleration = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angular_velocity]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.angular_velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [magnetic_field]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.magnetic_field = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'riki_msgs/Imu';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '275110405f08e1b7c0c0f1aba3e19c67';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Vector3 linear_acceleration
    geometry_msgs/Vector3 angular_velocity
    geometry_msgs/Vector3 magnetic_field
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

module.exports = Imu;
