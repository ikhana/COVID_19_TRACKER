import React from 'react';
import styles from "./backgrnVideo.module.css";
import src from '*.bmp';

export const backgrndVideo = () => {
    const videoSource = "Video by kilian Figueras torras from Pexels";
    return (
        <div className={styles.container}>
            <video autoPlay="autoplay" muted className={styles.video}>
                <source src={videoSource} type="video/mp4"/> Video Is not Supported 
           </video>
        </div>
    )
}
