"use client"

import Lottie from 'lottie-react';
import React from 'react';

const LottieEffect = ({ image }) => {
    return (
        <Lottie loop={true} animationData={image} />
    );
};

export default LottieEffect;