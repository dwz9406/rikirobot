
(cl:in-package :asdf)

(defsystem "riki_msgs-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :geometry_msgs-msg
)
  :components ((:file "_package")
    (:file "Battery" :depends-on ("_package_Battery"))
    (:file "_package_Battery" :depends-on ("_package"))
    (:file "DHT22" :depends-on ("_package_DHT22"))
    (:file "_package_DHT22" :depends-on ("_package"))
    (:file "Imu" :depends-on ("_package_Imu"))
    (:file "_package_Imu" :depends-on ("_package"))
    (:file "Infrared" :depends-on ("_package_Infrared"))
    (:file "_package_Infrared" :depends-on ("_package"))
    (:file "PID" :depends-on ("_package_PID"))
    (:file "_package_PID" :depends-on ("_package"))
    (:file "Servo" :depends-on ("_package_Servo"))
    (:file "_package_Servo" :depends-on ("_package"))
    (:file "Ultrasonic" :depends-on ("_package_Ultrasonic"))
    (:file "_package_Ultrasonic" :depends-on ("_package"))
    (:file "Velocities" :depends-on ("_package_Velocities"))
    (:file "_package_Velocities" :depends-on ("_package"))
  ))