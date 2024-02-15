
import React, { Component } from 'react'

export class EmployeeTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employeeData: [
                {
                    empID: 1,
                    empName: 'Dwarkesh',
                    empPost: 'Developer',
                    empSalary: '50000',
                    empGender: 'Male',
                    empAddress: 'Pune'
                },

                {
                    empID: 2,
                    empName: 'Amey',
                    empPost: 'Java-Developer',
                    empSalary: '70000',
                    empGender: 'Male',
                    empAddress: 'Warud'
                },

                {
                    empID: 3,
                    empName: 'Yash',
                    empPost: 'Data Base Admin',
                    empSalary: '5000000',
                    empGender: 'Male',
                    empAddress: 'Pune'
                },

                {
                    empID: 4,
                    empName: 'Ankit',
                    empPost: 'full-stack Developer',
                    empSalary: '5000000',
                    empGender: 'Male',
                    empAddress: 'Pune'
                },

                {
                    empID: 5,
                    empName: 'Raghu',
                    empPost: 'SDE4',
                    empSalary: '5000000',
                    empGender: 'Male',
                    empAddress: 'Pune'
                },

                {
                    empID: 6,
                    empName: 'Rekha',
                    empPost: 'SD5',
                    empSalary: '5000000',
                    empGender: 'female',
                    empAddress: 'Pune'
                },

                {
                    empID: 7,
                    empName: 'Priya',
                    empPost: 'SDE2',
                    empSalary: '78000',
                    empGender: 'Female',
                    empAddress: 'Pune'
                },

                {
                    empID: 8,
                    empName: 'Piyush',
                    empPost: 'SDE2',
                    empSalary: '8000000',
                    empGender: 'Male',
                    empAddress: 'Akot'
                },

                {
                    empID: 9,
                    empName: 'Vikas',
                    empPost: 'Advjava-Developer',
                    empSalary: '90000',
                    empGender: 'Male',
                    empAddress: 'Nashik'
                },

                {
                    empID: 10,
                    empName: 'Ganesh',
                    empPost: 'Software-Developer',
                    empSalary: '5000000',
                    empGender: 'Male',
                    empAddress: 'Pune'
                }


            ]
        };


    }

    renderTableHeader() {
        let header = Object.keys(this.state.employeeData[0]);
        return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
    }

    renderTableData() {
        return this.state.employeeData.map((employee, index) => {
            const { empID, empName, empPost, empSalary, empGender, empAddress } = employee;
            return (
                <tr key={empID}>
                    <td>{empID}</td>
                    <td>{empName}</td>
                    <td>{empPost}</td>
                    <td>{empSalary}</td>
                    <td>{empGender}</td>
                    <td>{empAddress}</td>
                </tr>
            );
        });
    }

    render() {
        //const{empID , empName ,empPost,empSalary ,empGender , empAddress} = this.state
        return (
            <div>
                <h2>Employee Table</h2>
                <table className='mytable'  id="employeeTable">
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeTable;
