import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'


const chartOptions = {

  options: {
      series: [3, .5, 1],
      labels: ["Monday", "Tuesday", "Wednesday"],
      colors: ['#009965', '#E32227', "#E58300"],
      plotOptions: {
          pie: {
              expandOnClisk: false,
          },
          donut: {
              size: "50px",
              labels: {
                  show: true,
                  total: {
                      show: true,
                      showAlways: true,
                      fontSize: "34px",
                      color: "#E32227",
                      height: "100%"
                  }
              }
          }
      }
  }
}
const chartOptions2 = {
  series: [{
      name: 'Number of SMS',
      data: [40,70,20,90,36,80,30,91,60]
  }],
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
      xaxis: {
          categories: ['SN', 'NG', 'TN', 'CI', 'ML', 'BF', 'CG', 'MG', 'Jul']
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
  "status": "pending"
},
{ "id": "4",
"user": "Leroy doe",
"date": "17 July 2021",
"price": "$292,341",
"status": "pending"
},
{ "id": "5",
"user": "Vue doe",
"date": "13 Jun 2022",
"price": "$122,341",
"status": "pending"
},
{ "id": "6",
"user": "Ice doe",
"date": "13 Jun 2021",
"price": "$122,341",
"status": "refund"
},
  ]
}

const orderStatus = {
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
        <div className="col-4">
        <div className="card full-height">

        <Chart
            options={chartOptions.options}
            series={chartOptions.options.series}
            type='donut'
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
          <div className="card full-height">
              <Chart
              options={chartOptions2.options}
              series={chartOptions2.series}
              type='line'
              height='100%'
              />
            </div>
          </div>

      </div>
    </div>
  
  )
}

export default Dashboard