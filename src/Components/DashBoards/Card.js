import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({value}) => {
  return (
    
        <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${value.theme} shadow h-100 py-2 ` }>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${value.theme} text-uppercase mb-1`}>
                                                {value.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value.price}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={value.Symbol}></i>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


   
  )
}

export default Card