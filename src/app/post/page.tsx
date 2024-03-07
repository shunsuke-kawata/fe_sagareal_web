"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import styles from "./styles.module.css";
import { buffer } from "stream/consumers";

export default function Post() {
  //デフォルトは内カメラで撮影する
  const [videoConstraints, setVideoConstraints] = useState<{
    width: number;
    height: number;
    facingMode: string | { exact: string };
  }>({
    width: 300,
    height: 400,
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
    console.log(imageSrc);

    //カメラの切り替え
    changeCameraMode();
  }, [webcamRef]);

  const changeCameraMode = () => {
    //反転初期を行う
    isFacingRef.current = !isFacingRef.current;
    if (isFacingRef.current === true) {
      setVideoConstraints({
        width: 300,
        height: 400,
        facingMode: "user",
      });
    }
    //外
    else {
      setVideoConstraints({
        width: 300,
        height: 400,
        facingMode: "environment",
      });
    }
  };

  const encodeBase64 = (imageString: string) => {
    // base64デコード
    const blob = atob(imageString.replace(/^.*,/, ""));
    let buffer = new Uint8Array(blob.length);
    for (let i = 0; i < blob.length; i++) {
      buffer[i] = blob.charCodeAt(i);
    }
    return buffer;
  };

  const handleUpload = (inUrl: string, outUrl: string) => {
    if (inUrl !== null && outUrl !== null) {
      const inImage = encodeBase64(inUrl);
      const outImage = encodeBase64(outUrl);
      console.log(inImage, outImage);
    }
  };
  return (
    <>
      <h1 className={styles.title}>投稿画面</h1>
      {inurl === null || outUrl === null ? (
        <>
          <div className={styles.webcamDiv}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <img
            className={styles.captureButton}
            onClick={capture}
            src={"/capture_button.svg"}
          />
        </>
      ) : (
        ""
      )}

      <>
        <div>
          {inurl === null || outUrl === null ? (
            <></>
          ) : (
            <div className={styles.flexImageBox}>
              {inurl !== null ? (
                <img
                  className={styles.images}
                  src={inurl}
                  alt="incameraScreenshot"
                />
              ) : (
                ""
              )}
              {outUrl !== null ? (
                <img
                  className={styles.images}
                  src={outUrl}
                  alt="outcameraScreenshot"
                />
              ) : (
                ""
              )}

              <input
                type={"button"}
                value={"アップロード"}
                onClick={() => handleUpload(inurl, outUrl)}
              />
            </div>
          )}
        </div>
      </>
    </>
  );
}
