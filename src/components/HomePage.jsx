import React from 'react';
import Navbar from "./Navbar";
import data from "../data.json";
import LineChart from "./LineChart";

let XLSX = require("xlsx")

const HomePage = () => {
    const [timeData, setTimeData] = React.useState(null);
    const [labelTimeData, setLabelTimeData] = React.useState(null);

    React.useEffect(() => {
        setTimeData(data.sum.values);
        setLabelTimeData(data.sum.labels);
    }, []);


    const generateTable = (headers, values) => {
        let result = [];
        result.push(headers);
        for (let j = 0; j < values[0].length; j++) {
            let row = [];
            for (let i = 0; i < headers.length; i++) {
                if (values[i] == undefined) {
                    row.push('-');
                } else {
                    row.push(values[i][j]);
                }
            }
            result.push(row)
        }
        return result
    }

    const handleClick = () => {
        var wb = XLSX.utils.book_new(),
            ws = XLSX.utils.aoa_to_sheet(generateTable(data.cook.labels, [data.cook.values[0].name, data.cook.values[0]["count:"], data.cook.values[0].avg_rating]));
        XLSX.utils.book_append_sheet(wb, ws, 'Готовка');

        var ws = XLSX.utils.aoa_to_sheet(generateTable(data.courier.labels, [data.courier.values[0].name, data.courier.values[0]["count:"], data.courier.values[0].avg_rating]));
        XLSX.utils.book_append_sheet(wb, ws, 'Курьер');

        var ws = XLSX.utils.aoa_to_sheet(generateTable(data.drink.labels, [data.drink.values[0].name, data.drink.values[0].count]));
        XLSX.utils.book_append_sheet(wb, ws, 'Напитки');

        var ws = XLSX.utils.aoa_to_sheet(generateTable(data.pizza.labels, [data.pizza.values[0].name, data.pizza.values[0].count]));
        XLSX.utils.book_append_sheet(wb, ws, 'Пицца');

        var ws = XLSX.utils.aoa_to_sheet(generateTable(data.total.labels, [data.total.values[0].year, data.total.values[1].month, data.total.values[2].count, data.total.values[3].sum, data.total.values[4].avg]));
        XLSX.utils.book_append_sheet(wb, ws, 'Итого');

        XLSX.writeFile(wb, "report.xlsx");
    }



    return (
        <>
            <Navbar/>
            <div className="container">
                <p className="text-center">
                    <h1>Средняя сумма доходов по месяцам</h1>
                    {timeData && labelTimeData && <LineChart labels={labelTimeData} values={timeData}/>}
                </p>

                <p className="text-center">
                    <h1>
                        <button onClick={handleClick} className="btn btn-primary w-100 mt-5">Скачать отчеты</button>
                    </h1>
                </p>
            </div>
        </>
    );
};

export default HomePage;