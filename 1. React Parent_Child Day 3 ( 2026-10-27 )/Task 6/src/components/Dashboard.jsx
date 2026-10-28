import React from 'react'
import { Statistics } from './comps/Statistics'
import { Charts } from './comps/Charts'
import { Table } from './comps/Table'

export const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>

      <ul>
        <li>Users</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>

      <Statistics />
      <Charts />
      <Table />

    </>
  )
}
