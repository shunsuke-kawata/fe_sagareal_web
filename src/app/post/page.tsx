"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import styles from "./styles.module.css";

interface urlsState {
  inurl: string | null;
  outurl: string | null;
}

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
  const [inurl, setInurl] = useState<string | null>(null);
  const [outUrl, setoutUrl] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = React.useCallback(() => {
    var imageSrc;
    if (webcamRef.current !== null) {
      imageSrc = webcamRef.current?.getScreenshot();
      if (isFacingRef.current === true) {
        setInurl(imageSrc);
      } else {
        setoutUrl(imageSrc);
      }
    }

    //カメラの切り替え
    changeCameraMode();

    // if (imageSrc) {
    //   setUrl(imageSrc);
    // }
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
      <h1 className={styles.title}>投稿する</h1>
      <div className={styles.webcamDiv}>
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
      </div>

      {/* <button onClick={() => changeCameraMode()}>カメラ切り替え</button> */}
      <button onClick={capture}>撮る</button>
      <>
        <div>
          <button
            onClick={() => {
              setUrl(null);
            }}
          >
            削除
          </button>
          {inurl === null || outUrl === null ? (
            <></>
          ) : (
            <>
              {" "}
              {inurl !== null ? (
                <div>
                  <img src={inurl} alt="incameraScreenshot" />
                </div>
              ) : (
                ""
              )}
              {outUrl !== null ? (
                <div>
                  <img src={outUrl} alt="outcameraScreenshot" />
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </>
    </>
  );
}
