import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {init} from './billingCycleAction'
import Input from '../common/form/labelandInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (t, v) => t + v
        return{
            sumOfCredits: this.props.credits ? 
                this.props.credits.length > 0 ? this.props.credits.map(c => +c.value || 0).reduce(sum) : 0 : 0,
            sumOfDebts: this.props.debts ? 
                this.props.debts.length > 0 ? this.props.debts.map(d => +d.value || 0).reduce(sum) : 0 : 0
        }
    }

    render(){
        const {handleSubmit, readOnly, credits, debts} = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={Input} label='Nome' cols='12 4' placeholder='Informe o Nome'
                         readOnly={readOnly}  />
                    <Field name='month' component={Input} label='Mês' cols='12 4' type='number' placeholder='Informe o mês' 
                        readOnly={readOnly}  />
                    <Field name='year' component={Input} label='Ano' cols='12 4' type='number' placeholder='Informe o ano' 
                        readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)