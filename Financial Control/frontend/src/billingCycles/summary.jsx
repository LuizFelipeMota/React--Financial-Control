import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valuebox'

export default ({credit, debt}) => (
    <Grid cols='8'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`RS ${credit}`} text='Total de Créditos'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`RS ${debt}`} text='Total de Débitos'/>
                <ValueBox cols='12 4' color='blue' icon='money' value={`RS ${credit - debt}`} text='Total Consolidado'/>
            </Row>
        </fieldset>
    </Grid>
)