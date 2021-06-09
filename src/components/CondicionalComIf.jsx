import React from 'react'

import IF from './if'

export default props => {
    return (
        <div>
            <h2>O Numero é {props.numero}</h2> 
            <IF test={props.numero % 2 == 0}>
                <span>Par</span> 
            </IF>

            <IF test={props.numero % 2 == 1}>
                <span>Impar</span>
            </IF>
            
        </div>
    )
}