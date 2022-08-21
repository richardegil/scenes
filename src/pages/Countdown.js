import { useState, useEffect } from "react";

export function Countdown() {
  const logoStyling = {
    position: "absolute",
    top: "-25%",
    left: "-25%",
    // width: "300%",
    // height: "300%",
    transformOrigin: "left top",
    transform: "translateX(0) translateY(0) scale(16)",
    opacity: "0.5"
  }

  const countdownStyling = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    color: "white",
    padding: "10px",
    fontFamily: "Inter",
    fontSize: "200px",
    lineHeight: "180px",
    textAlign: "right",
    maxWidth: "8ch"
  };
  
  const [timer, setTimer] = useState(5);
  const [timeText, setTimerText] = useState(`${timer}:00`);
  let time = timer * 60;

  const updateTimer = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setTimerText(`${minutes}:${seconds}`);

    if (time > 0) {
      time--;
      setTimer((prev) => prev - 1);
    } else {
      setTimerText(`STREAM STARTING SOON`);
    }
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      updateTimer()
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <>
      <img style={logoStyling} src="/logo-outline-cyan.svg" alt=""></img>
      <div id="countdown" style={countdownStyling}>{timeText}</div>
    </>
  )
    
}
