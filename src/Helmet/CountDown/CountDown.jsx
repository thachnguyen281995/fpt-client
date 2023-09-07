import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateRemainingTime = () => {
    // const targetDate = new Date('2023-07-25T23:59:59');
    const now = new Date();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const total = distance;
    return {
      days,
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      total
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  if (remainingTime.total <= 0) {
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!remainingTime.total <= 0) {
    return (
      <div className="text-[#a7a7b1] text-[11px]">
        <span>{remainingTime?.days} ngày </span>
        <span>{remainingTime?.hours}:</span>
        <span>{remainingTime?.minutes}:</span>
        <span>{remainingTime?.seconds}</span>
      </div>
    );
  }
};

export default Countdown;
