import React, { useEffect, useRef } from 'react';

const BackgroundSound = ({ play }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/assets/sounds/game.mp3');
            audioRef.current.volume = 0.2;

            const handleEnded = () => {
                audioRef.current.play();
            };

            audioRef.current.addEventListener('ended', handleEnded);

            return () => {
                audioRef.current.removeEventListener('ended', handleEnded);
            };
        }

        if (play) {
            audioRef.current.play().catch((error) => {
                console.log('Error playing audio:', error);
            });
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reinicia el audio al principio
        }
    }, [play]);

    return (
        null
    );
};


export default BackgroundSound;