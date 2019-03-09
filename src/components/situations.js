import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring'
import { JoinContext } from '../App'

const Situations = (props) => {
    const data = [
        { id: 1, title: "Single" },
        { id: 2, title: "Couple" },
        { id: 3, title: "Family" },
        { id: 4, title: "Retired" }
    ];

    if(!data) return null;

    const animation = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 }
    })

    return (
        <animated.div style={animation}>
            <div className="situations">
                {data.map((situation, index) => {
                    return (
                        <PersonCategory key={index} id={situation.id} title={situation.title} setCategory={props.setCategory} />
                    )
                })}
            </div>
        </animated.div>
    )
}
export default Situations;


const PersonCategory = (props) => {
    const joinContext = useContext(JoinContext);

    const selectPlan = () => {
        props.setCategory(props.id);
    }

    return (
        <div className="situation">
            <div className="content">
                <div>
                    <h2>{props.title}</h2>
                    <div className={joinContext.category === props.id ? "button active" : "button"} onClick={() => { selectPlan(props.id); }}>Select Plan</div>
                </div>
            </div>
        </div>
    );
}
