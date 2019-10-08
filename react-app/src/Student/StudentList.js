import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class EmployeeListcomponent extends Component {
    state = {
        currentObj: { id: null, firstName: null, lastName: null },
        show: false,
        studentList: [{ id: null, firstName: null, lastName: null }]
    };
    constructor(props, context) {
        super(props, context);
        this.getStudentList();
    }
    getStudentList = (index) => {

        fetch("http://localhost:3032/employees")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState((prevState) => {
                        return {
                            studentList: result,
                            //show: true
                        }
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };


    render() {
        return (
            <div>


                <BootstrapTable data={this.state.studentList}>
                    <TableHeaderColumn dataField='EmpID' isKey>Employee ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='EmpName'>Employee Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='Designation'>Designation</TableHeaderColumn>
                    <TableHeaderColumn dataField='Salary'>Salary</TableHeaderColumn>
                </BootstrapTable>
                <Button bsStyle="primary">
                    Submit
             </Button>

            </div>

        );
    }
}
export default EmployeeListcomponent;
