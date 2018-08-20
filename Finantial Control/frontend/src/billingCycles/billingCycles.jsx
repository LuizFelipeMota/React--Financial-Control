import React, { Component } from 'react'
import {bindActionsCreators, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTab, showTabs} from '../common/tabs/tabActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'
import Option from '../common/option/option'
import List from './billingCyclesList'
import Form from './billingCycleForm'
import {create, update, remove} from './billingCycleAction'

class BillingCycles extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabList' icon='bars' label='Listar' />
                            <TabHeader target='tabCreate' icon='plus' label='Incluir' />
                            <TabHeader target='tabUpdate' icon='pencil' label='Alterar' />
                            <TabHeader target='tabDelete' icon='trash-o' label='Excluir' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitLabel='Atualizar' submitClass='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true} submitLabel='Excluir' submitClass='danger'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)