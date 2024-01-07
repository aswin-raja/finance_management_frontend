import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table'; 
import MainLayout from '../../components/Layout/MainLayout';

const HomePage = () => {


  const [members, setMembers] = useState([]);



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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainLayout>
          <Table data={members} fetchData={fetchData} />
    </MainLayout>
  );
};
export default HomePage;