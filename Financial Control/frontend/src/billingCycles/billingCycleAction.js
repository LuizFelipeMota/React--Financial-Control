import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {selectTab, showTabs} from '../common/tabs/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList(){
    const result = axios.get(`${BASE_URL}/billingCycles`)
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: result
    }
}

export function create(value){
    return submit(value,'post')
}

export function update(value){
    return submit(value,'put')
}

export function remove(value){
    return submit(value,'delete')
}

function submit(value, method){
    return dispatch => {
        const id = value._id || ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, value)
        .then(resp => {
            toastr.success('Success', 'Data was save with success')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    }
}

export function loadTab(tabId, bc){
    return[
        selectTab(tabId),
        showTabs(tabId),
        initialize('billingCycleForm', bc)
    ]
}

export function init(){
    return[
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES )
    ]
}