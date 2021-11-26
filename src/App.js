import "./App.css";
import { useEffect, useState } from "react";
import useClock from "./hooks/useClock";
import { handleRequest } from "./api/weatherApi";
import Form from "./components/Form";
import Mark from "./components/Mark";
import WeatherInfo from "./components/WeatherInfo";

function App() {
    const [input, setInput] = useState("ho chi minh");
    const [data, setData] = useState(null);
    const time = useClock();

    const getData = async () => {
        try {
            let {
                name,
                main: { temp, humidity },
                wind: { speed },
                sys: { country },
                weather: [{ main }],
                clouds: { all },
            } = await handleRequest(input);
            temp = (temp - 272.15).toFixed(0);
            return {
                name,
                humidity,
                temp,
                speed,
                country,
                main,
                all,
            };
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        async function fetchData() {
            const result = await getData();
            setData(result);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await getData();
        setData(result);
    };

    if (!data) {
        return (
            <div className="error-app">
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div className="app">
            <div className="app-wrapper">
                <Form
                    handleSubmit={handleSubmit}
                    input={input}
                    setInput={setInput}
                />
                {data && <WeatherInfo data={data} time={time} />}
            </div>
            <Mark />
        </div>
    );
}

export default App;
