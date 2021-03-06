import React from 'react'
import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Message from '../common/msg/message'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
        <Message />
    </div>
)