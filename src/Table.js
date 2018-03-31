import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import BSTableDropDownButton from './BSTableDropDownButton';

export class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {divNode: null};
    }

    data = [
        {id: 1, name: 'Tomek'},
    ];

    bs = {
        striped: true,
        condensed: false,
        version: '3',
        pagination: true,
        tableContainerClass: 'table-responsive',
    };

    optionButtons = (cell, row) => <BSTableDropDownButton
        title="Button Label"
        right
        elements={[
            { label: 'Item1', actionFn: () => null },
            { label: 'Item2', actionFn: () => null },
            { label: 'Item3', actionFn: () => null },
            { label: 'Item4', actionFn: () => null },
            { label: 'Item5', actionFn: () => null },
        ]}
        color="primary"
        className="pull-left"
    />;

    render() {
        return (
            <div>
                <div>Janek</div>
            <BootstrapTable
                data={this.data}
                {...this.bs}
            >
                <TableHeaderColumn dataField="id" isKey>
                    id
                </TableHeaderColumn>
                <TableHeaderColumn
                    width="100px"
                    dataField="id">
                    Col
                </TableHeaderColumn>
                <TableHeaderColumn
                    width="500px"
                    dataField="id">
                    Col
                </TableHeaderColumn>
                <TableHeaderColumn
                    width="500px"
                    dataField="id">
                    Col
                </TableHeaderColumn>
                <TableHeaderColumn
                    width="300px"
                    columnClassName="bs-table-dropdown-col"
                    // dataFormat={() => <PopperExample reference={this.state.divNode} />}
                    dataFormat={this.optionButtons}
                    dataField="id">
                    Options
                </TableHeaderColumn>
                <TableHeaderColumn
                    width="500px"
                    dataField="name"
                >
                    Options2
                </TableHeaderColumn>
            </BootstrapTable>
            </div>
        );
    }
}

Table.propTypes = {};

export default Table;
