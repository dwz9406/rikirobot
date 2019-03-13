#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
    DESTDIR_ARG="--root=$DESTDIR"
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/riki/catkin_ws/src/rikirobot_project/rikirobot_nav"

# snsure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/riki/catkin_ws/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/riki/catkin_ws/install/lib/python2.7/dist-packages:/home/riki/catkin_ws/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/riki/catkin_ws/build" \
    "/usr/bin/python" \
    "/home/riki/catkin_ws/src/rikirobot_project/rikirobot_nav/setup.py" \
    build --build-base "/home/riki/catkin_ws/build/rikirobot_project/rikirobot_nav" \
    install \
    $DESTDIR_ARG \
    --install-layout=deb --prefix="/home/riki/catkin_ws/install" --install-scripts="/home/riki/catkin_ws/install/bin"
