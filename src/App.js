import React, { useState, createContext } from 'react'

// FORM COMPONENTS 
import Situations from './components/situations'
import AddressPicker from './components/address-picker'
import Services from './components/services'
import Rates from './components/rates'

// STYLESHEETS
import './App.css';

// APP CONTEXT
export const JoinContext = createContext();

const App = () => {
    const [category, setCategory] = useState(null);
    const [address, setAddress] = useState(null);
    const [services, setServices] = useState([]);
    const [rate, setRate] = useState(null);

    const ProviderData = {
        category: category,
        address: address,
        services: services,
        rate: rate
    }

    return (
        <JoinContext.Provider value={ProviderData}>
            <Situations setCategory={setCategory} />
            <AddressPicker setAddress={setAddress} />
            <Services setServices={setServices} />
            <Rates setRate={setRate} />
        </JoinContext.Provider>
    );
}
export default App;
