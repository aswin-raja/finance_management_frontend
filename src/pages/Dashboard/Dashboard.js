import React, { useEffect, useState } from "react";

import MainLayout from "../../components/Layout/MainLayout";
import DonutChart from "../../components/DonutChart/DonutChart";
import DashboardStyled from "./DashboardStyled";

const Dashboard = () => {
  const month_data = [
    { month: "January", key: 1, value: 1 },
    { month: "February", key: 2, value: 2 },
    { month: "March", key: 3, value: 3 },
    { month: "April", key: 4, value: 4 },
    { month: "May", key: 5, value: 5 },
    { month: "June", key: 6, value: 6 },
    { month: "July", key: 7, value: 7 },
    { month: "August", key: 8, value: 8 },
    { month: "September", key: 9, value: 9 },
    { month: "October", key: 10, value: 10 },
    { month: "November", key: 11, value: 11 },
    { month: "December", key: 12, value: 12 },
  ];

  const [data, setData] = useState(null);
  const [month, setMonth] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/generatemetrices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // You can add other headers if needed
          },

          body: JSON.stringify({ month: month }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [month]);

  const transformedData = data
    ? [
        ["type", "amount"],
        ...data.data.map((entry) => [entry.off_type, parseFloat(entry.amount)]),
      ]
    : [];

  console.log(transformedData);

  return (
    <DashboardStyled>
    <MainLayout>
        <div className="chart-div">
      <select
        onChange={(event) => {
          console.log(parseInt(event.target.value));
          setMonth(parseInt(event.target.value));
        }}
      >
        {month_data.map((item) => (
          <option key={item.key} value={item.value}>
            {item.month}
          </option>
        ))}
      </select>

      <DonutChart data={transformedData} />
      </div>
    </MainLayout>
    </DashboardStyled>
  );
};
export default Dashboard;
