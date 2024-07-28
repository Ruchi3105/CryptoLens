import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

export default function LineChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const dataCopy = [["Date", "Prices"]];
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString().slice(0,-5),
          item[1]
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div>
      {data.length > 1 ? (
        <Chart
          chartType="LineChart"
          data={data}
          height="400px"
          options={{
            title: "Price Trend",
            hAxis: { title: "Date" },
            vAxis: { title: "Price" }
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
