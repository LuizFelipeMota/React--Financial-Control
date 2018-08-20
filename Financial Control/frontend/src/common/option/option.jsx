import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {OptionClick} from './optionAction'

class OptionControl extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount(){
        this.props.OptionClick(true)
    }

    handleClick(val){
        if(this.props.option.checked !== val){
            this.props.OptionClick(!this.props.option.checked)
        }
    }

    render(){
        return(
            <div>
                <input id='option1' type='radio' onClick={() => this.handleClick(true)} checked={this.props.option.checked} /><p>Teste</p>
                <input id='option2' type='radio' onClick={() => this.handleClick(false)} checked={!this.props.option.checked}/><p>Home</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({option: state.option})
const mapDispatchToProps = dispatch => bindActionCreators({OptionClick}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OptionControl)