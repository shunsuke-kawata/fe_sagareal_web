"use client";
import './page.css'; // page.cssをインポート
import React, { useState } from 'react';

// imgSrcの型定義
type UnitPostProps = {
  imgSrc: string;
};

export const UnitPost = ({ imgSrc }: UnitPostProps) => {
  return (
    <div className="unit-post-container">
      <div>user_name</div>
      <img src={imgSrc} alt="dummy" />
    </div>
  );
};

export const PostsList = () => {
  // 事前に定義したjpegファイルのパスの配列
  const images = [
    "/image01.jpg",
    "/image02.jpg",
    "/image04.jpg",
    "/image05.jpg",
    "/image06.jpg",
    // 他のjpegファイルのパス...
  ];

  return (
    <div className=" flex flex-col">
      {images.map((image, index) => (
        <UnitPost key={index} imgSrc={image} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="page-content">
      <h1>SagaReal.</h1>
      <div className="post-button"><button>Post</button></div>
      <PostsList />
    </div>
  );
}