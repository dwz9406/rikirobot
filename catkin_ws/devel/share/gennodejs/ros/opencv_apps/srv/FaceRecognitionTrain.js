// Auto-generated. Do not edit!

// (in-package opencv_apps.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Rect = require('../msg/Rect.js');
let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class FaceRecognitionTrainRequest {
  constructor() {
    this.images = [];
    this.rects = [];
    this.labels = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FaceRecognitionTrainRequest
    // Serialize the length for message field [images]
    bufferInfo = _serializer.uint32(obj.images.length, bufferInfo);
    // Serialize message field [images]
    obj.images.forEach((val) => {
      bufferInfo = sensor_msgs.msg.Image.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [rects]
    bufferInfo = _serializer.uint32(obj.rects.length, bufferInfo);
    // Serialize message field [rects]
    obj.rects.forEach((val) => {
      bufferInfo = Rect.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [labels]
    bufferInfo = _serializer.uint32(obj.labels.length, bufferInfo);
    // Serialize message field [labels]
    obj.labels.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FaceRecognitionTrainRequest
    let tmp;
    let len;
    let data = new FaceRecognitionTrainRequest();
    // Deserialize array length for message field [images]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [images]
    data.images = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = sensor_msgs.msg.Image.deserialize(buffer);
      data.images[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [rects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rects]
    data.rects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Rect.deserialize(buffer);
      data.rects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [labels]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [labels]
    data.labels = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.labels[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'opencv_apps/FaceRecognitionTrainRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ba188b4bf792edbaf69c7f296a16e0ec';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    sensor_msgs/Image[] images
    Rect[] rects
    string[] labels
    
    ================================================================================
    MSG: sensor_msgs/Image
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of cameara
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
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
    MSG: opencv_apps/Rect
    # opencv Rect data type, x-y is center point
    float64 x
    float64 y
    float64 width
    float64 height
    
    
    `;
  }

};

class FaceRecognitionTrainResponse {
  constructor() {
    this.ok = false;
    this.error = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FaceRecognitionTrainResponse
    // Serialize message field [ok]
    bufferInfo = _serializer.bool(obj.ok, bufferInfo);
    // Serialize message field [error]
    bufferInfo = _serializer.string(obj.error, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FaceRecognitionTrainResponse
    let tmp;
    let len;
    let data = new FaceRecognitionTrainResponse();
    // Deserialize message field [ok]
    tmp = _deserializer.bool(buffer);
    data.ok = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error]
    tmp = _deserializer.string(buffer);
    data.error = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'opencv_apps/FaceRecognitionTrainResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '14d6fca830116fb9833d983a296f00ed';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool ok
    string error
    
    
    `;
  }

};

module.exports = {
  Request: FaceRecognitionTrainRequest,
  Response: FaceRecognitionTrainResponse
};
