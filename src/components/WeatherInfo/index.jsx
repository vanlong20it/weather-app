import React from "react";

const WeatherInfo = ({data, time}) => {
    return (
        <>
            <h1 className="city-name">
                {data?.name}, {data?.country}
            </h1>
            <p className="time">{time}</p>
            <h2 className="temp">{data?.temp} &ordm;C</h2>
            <h4 className="status">{data?.main}</h4>
            <div className="more-info">
                <div className="info-item humidity">
                    <i className="bi bi-droplet"></i>
                    <p>{data?.humidity}%</p>
                </div>
                <div className="info-item wind">
                    <i className="bi bi-wind"></i>
                    <p>{data?.speed}m/s</p>
                </div>
                <div className="info-item cloud">
                    <i className="bi bi-cloud-sun"></i>
                    <p>{data?.all}%</p>
                </div>
            </div>
        </>
    );
};

export default WeatherInfo;
