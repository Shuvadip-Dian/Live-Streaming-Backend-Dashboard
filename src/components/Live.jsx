import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

function Live() {
  const userVideoRef = useRef(null);
  const [media, setMedia] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket connection once on component mount
    const socketConnection = io('http://localhost:8080');
    setSocket(socketConnection);

    // Initialize media stream
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720, frameRate: 30 },  // Set higher quality constraints
          audio: true,
        });
        setMedia(stream);
        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    initializeMedia();

    // Cleanup on unmount
    return () => {
      if (media) {
        media.getTracks().forEach(track => track.stop());
      }
      if (socketConnection) {
        socketConnection.disconnect();
      }
    };
  }, []);

  const startRecording = () => {
    if (!media || !socket) {
      console.error('Media stream or socket connection is not available');
      return;
    }

    const recorder = new MediaRecorder(media, {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      mimeType: 'video/webm; codecs=vp9',  // Specify codec for better compatibility
    });

    recorder.ondataavailable = (ev) => {
      if (ev.data.size > 0) {
        console.log('Binary Stream Available', ev.data);
        socket.emit('binarystream', ev.data);
      }
    };

    recorder.onstart = () => console.log('Recording started');
    recorder.onstop = () => console.log('Recording stopped');
    recorder.onerror = (event) => console.error('Error recording media:', event.error);

    try {
      recorder.start(100); // Adjust interval for sending data chunks
      setMediaRecorder(recorder);
    } catch (error) {
      console.error('Error starting MediaRecorder:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      if (mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
      } else {
        console.warn('MediaRecorder is not in the recording state.');
      }
    } else {
      console.warn('MediaRecorder is not initialized.');
    }
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-3'>
        <video
          ref={userVideoRef}
          autoPlay
          playsInline
          className='w-4/5 md:w-3/5'
        ></video>
        <div className=' h-10 w-40 rounded flex justify-around items-center mt-4 bg-slate-500'>
          <button onClick={startRecording} className='h-8 w-12 rounded hover:bg-green-400'>Start</button>
          <button onClick={stopRecording} className='h-8 w-12 rounded hover:bg-red-400'>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default Live;
