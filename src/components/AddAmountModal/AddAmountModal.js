import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select, message } from 'antd';

const { Option } = Select;

const offTypeOptions = ['Weekly', 'Monthly', 'Daily']; // Your constant array

const AddAmountModal = ({ visible, onCancel, selectedRowId, fetchdata }) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const [pdfUrl, setPdfUrl] = useState(null);

  // Handle the form submission
  const onFinish = async (values) => {
    try {
      // Add the selectedRowId as 'id' in the values
      const requestBody = {
        ...values,
        id: selectedRowId.id,
        name: selectedRowId.name,
      };

      const response = await fetch('http://localhost:5001/capture_off_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Check if the response contains a PDF file
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/pdf')) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url); // Set the PDF URL in state
        // Fetch data and show success message
        fetchdata();
        message.success('Data submitted successfully');
      } else {
        // Assuming the API returns some data after successful submission
        const data = await response.json();
        console.log('API Response:', data);
        // Fetch data, show success message, and close the modal
        fetchdata();
        message.success('Data submitted successfully');
        onCancel();
      }
    } catch (error) {
      console.error('API Error:', error);
      // Handle error (e.g., show error message)
      message.error('Failed to submit data');
    }
  };

  return (
    <Modal
      title={`Add Amount for ${selectedRowId && selectedRowId.name}`}
      visible={visible}
      onCancel={() => {
        setPdfUrl(null); // Clear the PDF URL when closing the modal
        onCancel();
      }}
      footer={null}
    >
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="Off Type"
          name="off_type"
          rules={[{ message: 'Please select the off type!' }]}
        >
          <Select placeholder="Select off type">
            {offTypeOptions.map((option) => (
              <Option key={option} value={option.toLowerCase()}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ message: 'Please enter the amount!' }]}
        >
          <Input />
        </Form.Item>

        {/* Download button conditionally rendered */}
        
        <div style={{ display: "flex" }}>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Amount
          </Button>
        </Form.Item>
        {pdfUrl && (
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button
              type="primary"
              onClick={() => {
                const a = document.createElement('a');
                a.href = pdfUrl;
                a.download = 'receipt.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
            >
              Download Receipt
            </Button>
          </Form.Item>
        )}
        </div>
      </Form>
    </Modal>
  );
};

export default AddAmountModal;
