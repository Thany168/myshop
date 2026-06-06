import React, { useState } from "react";
import {Chart as ChartJS ,defaults} from 'chart.js/auto'
import {Line,Bar} from 'react-chartjs-2'
import { Button} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import orders from "./data/Orders.json"
import lastsales from './data/last7daysale.json'
import TableTransaction from "./component/Transactiontable";
import Unitsoldtable from "./component/Unitsoldtable";
function Dashboard() {

const uv = [35, 55, 80, 95, 55, 70];
const nu = [35, 55, 80, 55, 95, 55];
const eu = [35, 55, 95, 70, 80, 55];
const may21=orders.filter(item=>item.date==='may 21')
const may22=orders.filter(item=>item.date==='may 22')
const hours=[1,4,8,12,24]

  return (
    <>
      <div >
        <div className="w-full flex justify-between ">
          <b className="text-2xl">DashBoard</b>
          <button className="text-[#1f5eff] box-border border border-[#d8dced]  rounded font-medium px-5"><SettingsIcon/> Manag</button>
        </div>
        <div className=" grid md:grid-cols-2 md:gap-3 xl:grid-cols-5">
          <div className="w-full mt-7 ">
          <div className="shadow-md p-1 w-full flex justify-evenly rounded">
            <div >
              <b className="text-1xl">$10.54</b> 
              <p className="text-xs">Total Reven</p>
              <p className="text-green-400 ">22.45% ^</p>
            </div>
            <div className="bg-blue-100 text-blue-400 font-bold text-xl h-10 w-10 rounded-full text-center item-center mt-3 py-1 ">
                $
            </div>
            
          </div>
        </div>
        <div className="w-full mt-7 ">
          <div className="shadow-md p-1 w-full flex justify-evenly rounded">
            <div >
              <b className="text-1xl">$10.54</b> 
              <p className="text-xs">Total Reven</p>
              <p className="text-green-400 ">22.45% ^</p>
            </div>
            <div className="bg-blue-100 text-blue-400 font-bold text-xl h-10 w-10 rounded-full text-center item-center mt-3 py-1 ">
                <ShoppingCartIcon/>
            </div>
            
          </div>
        </div>
        <div className="w-full mt-7 ">
          <div className="shadow-md p-1 w-full flex justify-evenly rounded">
            <div >
              <p className="text-xs text-gray-500 ">Unique Visits</p>
              <b className="text-1xl">$10.54</b> 
              <p className="text-green-400 ">22.45% ^</p>
            </div>
            <div className="flex gap-1 h-14 w-32 items-end justify-center ml-5 ">
              {uv.map((value,index)=>(
                <div key={index} className={`rounded w-3 ${index===3?"bg-yellow-400":"bg-yellow-200"}`} style={{height:value+"%"}}
                    
                />
              ))}           
            </div>
          </div>
        </div>
        <div className="w-full mt-7 ">
          <div className="shadow-md p-1 w-full flex justify-evenly rounded">
            <div >
              <p className="text-xs text-gray-500 ">Unique Visits</p>
              <b className="text-1xl">$10.54</b> 
              <p className="text-green-400 ">22.45% ^</p>
            </div>
            <div className="flex gap-1 h-14 w-32 items-end justify-center ml-5 ">
              {nu.map((value,index)=>(
                <div key={index} className={`rounded w-3 ${index===4?"bg-green-400":"bg-green-200"}`} style={{height:value+"%"}}
                    
                />
              ))}           
            </div>
          </div>
        </div>
        <div className="w-full mt-7 ">
          <div className="shadow-md p-1 w-full flex justify-evenly rounded">
            <div >
              <p className="text-xs text-gray-500 ">Unique Visits</p>
              <b className="text-1xl">$10.54</b> 
              <p className="text-green-400 ">22.45% ^</p>
            </div>
            <div className="flex gap-1 h-14 w-32 items-end justify-center ml-5 ">
              {eu.map((value,index)=>(
                <div key={index} className={`rounded w-3 ${index===2?"bg-blue-700":"bg-blue-200"}`} style={{height:value+"%"}}
                    
                />
              ))}           
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="grid gap-4 h-[400]  xl:flex ">
            <div className=" sm:w-[100%] xl:w-[75%] 2xl:w-[75%] h-max mt-7 p-4 shadow-md ">
              <div className="flex justify-between">
                <div><p className="font-bold text-md py-4">Orders Over Time</p></div>
                <div>
                    <button className="group relative py-4">
                      Last 12 Hours <KeyboardArrowDownIcon/>
                      <div className="goup bg-gray-800 text-white rounded w-[130px] absolute scale-y-0 group-focus:scale-y-100 p-2 top-0">
                        {hours.map((time,index)=>(
                          <div key={index} className="hover:bg-gray-400 rounded " >Last {time} Hours</div>
                        ))}
                        
                      </div>
                    </button>
                </div>
              </div>
              <div>
                  <div className="flex gap-10  top-4">
                    <div><b className="text-xl">645</b> <br /> <span className="text-gray-500 text-sm">Order on May 22</span></div>
                    <div><b className="text-xl">472</b> <br /> <span className="text-gray-500 text-sm">Order on May 21</span></div>
                  </div>
                  <div className=" w-full ">
                    <Line 
                    
                    data={{
                      
                      labels:may21.map(item=>item.time.replace(':00','').replace(' ','')),
                      
                      datasets:[
                        {
                        label:"May 21",
                        data:may21.map(item=>item.order),
                        borderColor: '#d1d5db',
                        backgroundColor: '#d1d5db',
                        pointRadius:0,
                        pointHoverRadius:7,
                        pointHitRadius:20,
                        pointBackgroundColor:"white",
                        pointHoverBorderColor:"#d1d5db",
                        pointHoverBorderWidth:4
                        
                        
                        },
                        {
                          label:"May 22",
                          data:may22.map(item=>item.order),
                          borderColor: '#2563eb',
                          backgroundColor: '#2563eb',
                          pointRadius:0,
                          pointHitRadius:20,
                          pointHoverRadius:7,
                          pointHoverBorderWidth:4,
                          pointHoverBackgroundColor:"white",
                          pointHoverBorderColor:"#2563eb",
                          
                        }
                    ]
                      
                    }} 
                    
                    options={{
                          responsive: true,
                          plugins: {
                            tooltip:{
                              titleAlign:'center',
                              padding:10,
                              yAlign:'bottom',
                              displayColors:false,
                              borderWidth:400,
                              callbacks:{
                                
                                title: function (context){
                                  
                                  return `    ${context[0].formattedValue} Orders   `
                                },
                                label:function(context){
                                    return ''
                                },
                                beforeBody: function(context){
                                  return `    ${context[0].dataset.label} , ${context[0].label}   `
                                },
                                
                              }
                            },
                            legend: {        
                              position: 'top',
                              align: 'end',
                            },
                          },
                          
                          scales: {
                            y: {
                              beginAtZero: true,
                              min:0,
                              max:50,
                              ticks:{
                                stepSize:10
                              },
                              grid: {
                                color: '#eee'
                              }
                            },
                            x: {
                              grid: {
                                display: false
                              }
                            }
                          }
                        }}
                    />
                  </div>
                       
              </div>

            </div> 
            <div className="mt-7  sm:w-[100%] 2xl:w-[25%] xl:w-[25%]   p-4 shadow-md">
              <div className="py-4 font-bold">Last 7 Days Sales</div>
              <div className="mt-6">
                <b className="text-xl">1,259</b> <br />
                <span className="text-sm">Items Sold</span>
              </div>
              <div className="mt-7">
                <b className="text-xl">$12,546</b> <br />
                <span className="text-sm">Revenue</span>
              </div>
              <div className="mt-5">
                <hr style={{height:"5px"}}/>
              </div>
              <div className="mt-5 items-end">
                <Bar
                className=""
                
                  data={{
                    labels:lastsales.map(item=>item.day),
                    
                    datasets:[
                      {
                        data:lastsales.map(item=>item.income),
                        barThickness:12,
                        backgroundColor:"#1fd286",
                        borderRadius:10
                      }
                    ]
                    
                  }}
                  options={{
                    plugins:{
                      tooltip:{
                        displayColors:false,
                        yAlign:"bottom",
                        callbacks:{
                          title:function(context){
                            return ''
                          },
                          label:function(context){
                            return `$ ${context.formattedValue}`
                          }
                        }
                      },
                      legend:{
                        display:false
                      }
                    },
                    scales:{
                      x:{
                        border:{
                          display:false
                        },
                      grid:{display:false}
                      },
                      y:{
                        border:{
                          display:false
                        },
                        ticks:{
                          display:false
                        },
                        grid:{
                          display:false
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className=" grid mt-7 cols-1  gap-5 xl:grid-cols-2">
          <div className="w-[100%] bg-white p-4 shadow-md">
            <div>
              <b>Recent Transactions</b>
            </div>
            <div className="mt-7">
              <TableTransaction/>
            </div>
          </div>
          <div className=" w-[100%]  bg-white p-4 shadow-md rounded">
            <div>
            <div>
              <b>Top Products by Units Sold</b>
            </div>
            <div className="mt-7 ">
              <Unitsoldtable/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
