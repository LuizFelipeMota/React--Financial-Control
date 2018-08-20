import React from 'react'

export default props => (
    <button className={props.className} onClick={props.onClick} type={props.type}>
        <i className={props.icon}></i>
    </button>
)