import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
import AddAmountModal from '../../components/AddAmountModal/AddAmountModal';
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];
const DataTable = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  


  const parseOffTypes = (offTypesString) => {
    try {
      return JSON.parse(offTypesString);
    } catch (error) {
      console.error('Error parsing off_types:', error);
      return [];
    }
  };
  const handleAddAmountClick = (record) => {
    setSelectedRowId(record);
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform the logic to add the amount (e.g., send data to backend)
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_number',
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
      ellipsis: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        align: 'center',
        ellipsis: true,
      },
      
      {
        title: 'Total Amount',
        dataIndex: 'off_types',
        align: 'center',
        key: 'off_types',
        render: (offTypes, record) => {
          const offTypesArray = parseOffTypes(offTypes);
    
          const dataSource = offTypesArray.map((offType, index) => ({
            key: index,
            offType: offType.off_type,
            amount: offType.amount,
          }));
    
          return (
            <table style={{ width: '100%' }}>
    <tbody>
      {dataSource.map((data, index) => (
        <tr key={index} style={{ width: '100%' }}>
          <td style={{ width: '100%' }}>{data.offType}</td>
          <td style={{ width: '100%' }}>{data.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
          );
        },
      },
      {
        title: 'Add Amount',
        key: 'addAmount',
        align: 'center',
        render: (_, record) => (
          <Button type="primary" onClick={() => handleAddAmountClick(record)}>
            Add Amount
          </Button>
        ),
      },
  ];
  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >

    
      </Space>
      <Table columns={columns} dataSource={props.data} pagination={true}/>
      <AddAmountModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onFinish={onFinish}
        selectedRowId={selectedRowId}
        fetchdata={props.fetchData}
      />
    </>
  );
};
export default DataTable;