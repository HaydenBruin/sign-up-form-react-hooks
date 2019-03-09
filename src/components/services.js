import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring'
import { JoinContext } from '../App'

const Services = (props) => {
    const joinContext = useContext(JoinContext);
    const data = [
        { id: 1, title: "Electricity" },
        { id: 2, title: "Piped Gas" },
        { id: 3, title: "Bottled Gas" },
        { id: 4, title: "Broadband" }
    ];

    if(!data) return null;
    if(!joinContext.address || joinContext.address.length < 5) return null;

    const animation = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 }
    })
    
    return (
        <animated.div style={animation}>
            <div className="services">
                {data.map((service, index) => {
                    return (
                        <Service key={index} id={service.id} title={service.title} setServices={props.setServices} />
                    )
                })}
            </div>
        </animated.div>
    )
}
export default Services;





const Service = (props) => {
    const joinContext = useContext(JoinContext);
    const servicesList = joinContext.services;
    const selectedService = joinContext.services.indexOf(props.id) !== -1;

    const selectPlan = (id) => {
        if(selectedService) {
            const newServices = servicesList.filter((value) => {
                return value !== id;
            })
            props.setServices(newServices);
        }
        else {
            props.setServices([...servicesList, id]);
        }
    }

    return (
        <div className="service">
            <div className="content">
                <div className={selectedService ? "button active" : "button"} onClick={() => { selectPlan(props.id); }}>{props.title}</div>
            </div>
        </div>
    );
}
