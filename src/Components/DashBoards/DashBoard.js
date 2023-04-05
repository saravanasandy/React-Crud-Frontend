import React, { useContext } from 'react'
import UserContext from '../../UserContext';
import Card from './Card'

const DashBoard = () => {
    let context = useContext(UserContext);
    const cards = [
        {
            title : "Earnings (MONTHLY)",
            price : "$40,000",
            theme : "primary",
            Symbol : "fas fa-calendar fa-2x text-gray-300"
        },
        {
            title : "Earnings (ANNUALY)",
            price : "$215,000",
            theme : "success",
            Symbol : "fas fa-dollar-sign fa-2x text-gray-300"
        },
        {
            title : "TASKS",
            price : "50%",
            theme : "info",
            Symbol : "fas fa-clipboard-list fa-2x text-gray-300"
        },
        {
            title : "Pending Request",
            price : "18",
            theme : "warning",
            Symbol : "fas fa-comments fa-2x text-gray-300"
        },
    ];
  return (
    <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1> {context.username}
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">
                        {
                            cards.map((value)=>{
                                return <Card value={value}></Card>
                            })
                        }
                    </div>
    </div>
  )
}

export default DashBoard