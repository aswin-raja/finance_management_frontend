import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table'; 
import MainLayout from '../../components/Layout/MainLayout';

const HomePage = () => {
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

  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/members');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  return (
    <MainLayout>
          <Table data={members} fetchData={fetchData} />
    </MainLayout>
  );
};
export default HomePage;