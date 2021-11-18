import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/artist.json';

const UncontrolledLottie = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={500}
        />
      </div>
    );
}

export default UncontrolledLottie;