import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'


const chartOptions = {
  series: [{
    name: 'online Customers',
    data: [40, 70, 30, 80, 91, 60, 88 , 28, 71]
  },
  {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 91, 60, 88 , 28, 79, 35]
  },
],
options: {
  color: ['#6ab04c', '#2980b9'],
  chart: {
    background: 'transparent'
  },
  dataLabels: {
    enabled: false
  },
   stroke: {
     curve: 'smooth'
   },
   xacis: {
     categories: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Aug','Sep']
   },
   legend: {
     position: 'top'
   },
   grid: {
     show: false
   }
}
}
const latestOrders = {
  head: [
    'order id',
    'user',
    'total price',
    "date",
    "status"
  ],
  body: [
    { "id": "1",
      "user": "John doe",
      "date": "17 November 2021",
      "price": "$1292,341",
      "status": "pending"
    },
    { "id": "2",
    "user": "Paolo doe",
    "date": "17 January 2021",
    "price": "$192,41",
    "status": "paid"
  },
  { "id": "3",
  "user": "Yannick doe",
  "date": "17 August 2021",
  "price": "$122,341",
  "status": "shipping"
},
{ "id": "4",
"user": "Leroy doe",
"date": "17 July 2021",
"price": "$292,341",
"status": "pending"
},
{ "id": "5",
"user": "Vue doe",
"date": "13 Jun 2021",
"price": "$122,341",
"status": "shipping"
},
{ "id": "6",
"user": "Vue doe",
"date": "13 Jun 2021",
"price": "$122,341",
"status": "refund"
},
  ]
}

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}
const renderOrderHead = (item, index) => (
  <th key={index}>
    {item}
  </th>
)
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge
       type={orderStatus[item.status]}
       content={item.status}
      />
    </td>
  </tr>
)
const topCustomers = {
  head: [
    'user',
    'total orders',
    'total pending'
  ],
  body: [
    {
      "username": "John doe",
      "order": 490,
      "price": "$1292,341"
    },
   
    {
      "username": "Johns doe",
      "order": "491",
      "price": "$1252,3S4S"
    },
    {
      "username": "Johnc doe",
      "order": "492",
      "price": "$1252,34"
    },
    {
      "username": "Johnf doe",
      "order": "493",
      "price": "$12F2,34"
    },
    {
      "username": "Johnfd doe",
      "order": "494G",
      "price": "$1,34"
    },
    {
      "username": "Johno doe",
      "order": "495",
      "price": "$12,34"
    }
  ]
}
const renderCustomerHead = (item, index) => (
  <th key={index}> {item} </th>
)
const renderCustomerBody = (item, index) => ( 
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)
const Dashboard = () => {
  return (
    <div>
      <h2 className="page-header">Welcome to the Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                {
                  <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                  />
                }
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
            <div className="card full-height">
              <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type='line'
              height='100%'
              />
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card__header">
                <h3>top customers</h3>
              </div>
              <div className="card__body">
                <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
                />
              </div>
              <div className="card__footer">
                <Link to='/ '> View All</Link>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card__header">
                <h3>last orders</h3>
              </div>
              <div className="card__body">
                <Table
                headData={latestOrders.head}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
                />
              </div>
              <div className="card__footer">
                <Link to='/ '> View All</Link>
              </div>
            </div>
          </div>

      </div>
    </div>
  
  )
}

export default Dashboard