# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.5

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/riki/catkin_ws/src

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/riki/catkin_ws/build

# Include any dependencies generated for this target.
include imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/depend.make

# Include the progress variables for this target.
include imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/progress.make

# Include the compile flags for this target's objects.
include imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/flags.make

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/flags.make
imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o: /home/riki/catkin_ws/src/imu_filter_madgwick/test/stateless_orientation_test.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/riki/catkin_ws/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && /usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o -c /home/riki/catkin_ws/src/imu_filter_madgwick/test/stateless_orientation_test.cpp

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.i"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/riki/catkin_ws/src/imu_filter_madgwick/test/stateless_orientation_test.cpp > CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.i

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.s"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/riki/catkin_ws/src/imu_filter_madgwick/test/stateless_orientation_test.cpp -o CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.s

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.requires:

.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.requires

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.provides: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.requires
	$(MAKE) -f imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/build.make imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.provides.build
.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.provides

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.provides.build: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o


imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/flags.make
imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o: /home/riki/catkin_ws/src/imu_filter_madgwick/test/madgwick_test.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/riki/catkin_ws/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && /usr/bin/c++   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o -c /home/riki/catkin_ws/src/imu_filter_madgwick/test/madgwick_test.cpp

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.i"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/riki/catkin_ws/src/imu_filter_madgwick/test/madgwick_test.cpp > CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.i

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.s"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/riki/catkin_ws/src/imu_filter_madgwick/test/madgwick_test.cpp -o CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.s

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.requires:

.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.requires

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.provides: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.requires
	$(MAKE) -f imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/build.make imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.provides.build
.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.provides

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.provides.build: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o


# Object files for target imu_filter_madgwick-madgwick_test
imu_filter_madgwick__madgwick_test_OBJECTS = \
"CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o" \
"CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o"

# External object files for target imu_filter_madgwick-madgwick_test
imu_filter_madgwick__madgwick_test_EXTERNAL_OBJECTS =

/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/build.make
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: gtest/libgtest.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /home/riki/catkin_ws/devel/lib/libimu_filter.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/liborocos-kdl.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/liborocos-kdl.so.1.3.0
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libtf2_ros.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libactionlib.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libtf2.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libnodeletlib.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libbondcpp.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libuuid.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libtinyxml.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libclass_loader.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/libPocoFoundation.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libdl.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libroslib.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libmessage_filters.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libroscpp.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_signals.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_filesystem.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libxmlrpcpp.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/librosconsole.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/librosconsole_log4cxx.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/librosconsole_backend_interface.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/liblog4cxx.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_regex.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libdynamic_reconfigure_config_init_mutex.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libroscpp_serialization.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/librostime.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /opt/ros/kinetic/lib/libcpp_common.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_system.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_thread.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_chrono.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_date_time.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libboost_atomic.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libpthread.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: /usr/lib/x86_64-linux-gnu/libconsole_bridge.so
/home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/riki/catkin_ws/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking CXX executable /home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test"
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/imu_filter_madgwick-madgwick_test.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/build: /home/riki/catkin_ws/devel/lib/imu_filter_madgwick/imu_filter_madgwick-madgwick_test

.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/build

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/requires: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/stateless_orientation_test.cpp.o.requires
imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/requires: imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/test/madgwick_test.cpp.o.requires

.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/requires

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/clean:
	cd /home/riki/catkin_ws/build/imu_filter_madgwick && $(CMAKE_COMMAND) -P CMakeFiles/imu_filter_madgwick-madgwick_test.dir/cmake_clean.cmake
.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/clean

imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/depend:
	cd /home/riki/catkin_ws/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/riki/catkin_ws/src /home/riki/catkin_ws/src/imu_filter_madgwick /home/riki/catkin_ws/build /home/riki/catkin_ws/build/imu_filter_madgwick /home/riki/catkin_ws/build/imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : imu_filter_madgwick/CMakeFiles/imu_filter_madgwick-madgwick_test.dir/depend
