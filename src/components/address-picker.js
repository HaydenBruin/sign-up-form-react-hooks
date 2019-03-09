import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring'
import { JoinContext } from '../App'

const AddressPicker = (props) => {
    const joinContext = useContext(JoinContext);
    const updateAddressPicker = (address) => {
        props.setAddress(address)
    }

    if(!joinContext.category) return null;

    const animation = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 }
    })
    
    return (
        <animated.div style={animation}>
            <div className="address-picker">
                <h2>Please enter your street address</h2>

                <input type="text" placeholder="Enter your property address" onChange={(e) => updateAddressPicker(e.target.value)} />
            </div>
        </animated.div>
    )
}
export default AddressPicker;