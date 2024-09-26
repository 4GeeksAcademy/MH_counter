import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faClock } from '@fortawesome/free-solid-svg-icons'; 
import './secondsCounter.css';

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } 
        return () => clearInterval(timer);
    }, [isActive]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);
    };

    const formatTime = (sec) => {
        const hours = Math.floor(sec / 3600);
        const minutes = Math.floor((sec % 3600) / 60);
        const remainingSeconds = sec % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="container-fluid">
            <h1 className="header">Contador de Segundos</h1>
            <div className="timer">
                <FontAwesomeIcon icon={faClock} size="lg" />
                <span>{formatTime(seconds)}</span>
            </div>
            <div className="button-container">
                <button className="button" onClick={toggleTimer}>
                    {isActive ? "Pausar" : "Iniciar"}
                </button>
                <button className="button" onClick={resetTimer}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default SecondsCounter;
