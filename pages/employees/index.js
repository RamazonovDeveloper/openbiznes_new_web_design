import React from 'react'
import styles from './employees.module.css'
import CardComponent from '../../components/cardComponent'
import EmployeesHeader from '../../views/empoyees/employeeHeader/employeesHeader'
import EmployeeTable from '../../views/empoyees/employeesTable/employeeTable'

export default function Employees() {
  return (
    <div className={styles.employee}>
        <CardComponent>
            <EmployeesHeader />
            <EmployeeTable />
        </CardComponent>
    </div>
  )
}
