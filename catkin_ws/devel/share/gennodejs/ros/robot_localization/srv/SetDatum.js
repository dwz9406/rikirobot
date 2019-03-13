// Auto-generated. Do not edit!

// (in-package robot_localization.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geographic_msgs = _finder('geographic_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetDatumRequest {
  constructor() {
    this.geo_pose = new geographic_msgs.msg.GeoPose();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetDatumRequest
    // Serialize message field [geo_pose]
    bufferInfo = geographic_msgs.msg.GeoPose.serialize(obj.geo_pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetDatumRequest
    let tmp;
    let len;
    let data = new SetDatumRequest();
    // Deserialize message field [geo_pose]
    tmp = geographic_msgs.msg.GeoPose.deserialize(buffer);
    data.geo_pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robot_localization/SetDatumRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fe903ca95d0210defda73a1629604439';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geographic_msgs/GeoPose geo_pose
    
    ================================================================================
    MSG: geographic_msgs/GeoPose
    # Geographic pose, using the WGS 84 reference ellipsoid.
    #
    # Orientation uses the East-North-Up (ENU) frame of reference.
    # (But, what about singularities at the poles?)
    
    GeoPoint position
    geometry_msgs/Quaternion orientation
    
    ================================================================================
    MSG: geographic_msgs/GeoPoint
    # Geographic point, using the WGS 84 reference ellipsoid.
    
    # Latitude [degrees]. Positive is north of equator; negative is south
    # (-90 <= latitude <= +90).
    float64 latitude
    
    # Longitude [degrees]. Positive is east of prime meridian; negative is
    # west (-180 <= longitude <= +180). At the poles, latitude is -90 or
    # +90, and longitude is irrelevant, but must be in range.
    float64 longitude
    
    # Altitude [m]. Positive is above the WGS 84 ellipsoid (NaN if unspecified).
    float64 altitude
    
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

class SetDatumResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetDatumResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetDatumResponse
    let tmp;
    let len;
    let data = new SetDatumResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'robot_localization/SetDatumResponse';
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
  Request: SetDatumRequest,
  Response: SetDatumResponse
};
