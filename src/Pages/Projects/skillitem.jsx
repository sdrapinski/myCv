import React from 'react'
import { Col } from 'react-bootstrap'

const skillitem = ({children}) => {
    return (
        <Col className="proitem"  xs={4} md={1} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        {children}
        </Col>
    )
}

export default skillitem
