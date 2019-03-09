import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring'
import { JoinContext } from '../App'

const Rates = (props) => {
    const joinContext = useContext(JoinContext);
    const data = [
        { id: 1, title: "Low Cost Plan" },
        { id: 2, title: "Rewards" }
    ];

    if(!data) return null;
    if(joinContext.services.length === 0) return null;

    const animation = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 }
    })

    return (
        <animated.div style={animation}>
            <div className="rates">
                {data.map((rate, index) => {
                    return (
                        <Rate key={index} id={rate.id} title={rate.title} setRate={props.setRate} />
                    )
                })}
            </div>
        </animated.div>
    )
}
export default Rates;


const Rate = (props) => {
    const joinContext = useContext(JoinContext);

    const selectRate = () => {
        props.setRate(props.id);
    }

    return (
        <div className="rate">
            <div className="content">
                <div>
                    <div className={joinContext.rate === props.id ? "button active" : "button"} onClick={() => { selectRate(props.id); }}>{props.title}</div>
                </div>
            </div>
        </div>
    );
}
