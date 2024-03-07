"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

export default function Post() {
  //デフォルトは内カメラで撮影する
  const [videoConstraints, setVideoConstraints] = useState<{
    width: number;
    height: number;
    facingMode: string | { exact: string };
  }>({
    width: 300,
    height: 300,
    facingMode: "user",
  });
  const webcamRef = useRef<Webcam>(null);
  const isFacingRef = useRef<boolean>(true);
  const [url, setUrl] = useState<string | null>(null);
  const capture = React.useCallback(() => {
    var imageSrc;
    if (webcamRef.current !== null) {
      imageSrc = webcamRef.current?.getScreenshot();
    }

    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  const changeCameraMode = () => {
    //反転初期を行う
    isFacingRef.current = !isFacingRef.current;
    if (isFacingRef.current === true) {
      setVideoConstraints({
        width: 300,
        height: 300,
        facingMode: "user",
      });
    }
    //外
    else {
      setVideoConstraints({
        width: 300,
        height: 300,
        facingMode: "environment",
      });
    }
  };
  return (
    <>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      />
      <button onClick={() => changeCameraMode()}>カメラ切り替え</button>
      <button onClick={capture}>Capture photo</button>
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              削除
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
  );
}
