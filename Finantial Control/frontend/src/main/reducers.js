import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import dashboardReducer from '../Dashboard/reducer'
import tabReducer from '../common/tabs/tabReducer'
import optionReducer from '../common/option/optionReducer'
import billingCyclesReducer from '../billingCycles/billingCyclesReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    option: optionReducer,
    billingCycles: billingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer