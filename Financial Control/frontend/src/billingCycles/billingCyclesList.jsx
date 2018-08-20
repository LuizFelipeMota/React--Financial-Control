import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, loadTab} from './billingCycleAction'
import Button from '../common/button/Button'

class BillingCyclesList extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <Button className='btn btn-warning' onClick={() => this.props.loadTab('tabUpdate',bc)} icon='fa fa-pencil' />
                    <Button className='btn btn-danger' onClick={() => this.props.loadTab('tabDelete', bc)} icon='fa fa-trash-o' />
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycles.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, loadTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesList)