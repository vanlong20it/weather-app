import React, { useEffect, useState } from "react";

const useClock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const timeNow = setInterval(() => {
            const current = new Date();
            const dateCurrent =
                current.getDate() +
                "/" +
                (current.getMonth() + 1) +
                "/" +
                current.getFullYear();
            const timeCurrent =
                (current.getHours() < 10
                    ? "0" + current.getHours()
                    : current.getHours()) +
                ":" +
                (current.getMinutes() < 10
                    ? "0" + current.getMinutes()
                    : current.getMinutes()) +
                ":" +
                (current.getSeconds() < 10
                    ? "0" + current.getSeconds()
                    : current.getSeconds());

            const strTime = dateCurrent + ", " + timeCurrent;
            setTime(strTime);
        }, 500);

        return () => {
            clearInterval(timeNow);
        };
    }, []);

    return time;
};

export default useClock;
