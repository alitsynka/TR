import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './assets/styles/reset.css'
import {DevelopmentCycle} from "./components/SoftwareDevelopmentCycle/DevelopmentCycle";
import {Solution} from "./components/solution/Solution";
import {CostOfDevelopment} from "./components/costs/CostOfDevelopment";
import {WhyUs} from "./components/whyUs/WhyUs";
import {Pricing} from "./components/pricing/Pricing";
import {Footer} from "./components/footer/Footer";
import {Services} from "./components/services/Services";
import {Industries} from "./components/industries/Industries";
import {Greeting} from "./components/greeting/Greeting";
import {NavBar} from "./components/navbar/Navbar";
import {ContactForm} from "./components/contactForm/ContactForm";
import {MenuComponent} from "./components/menu/Menu";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return (
        <div className="App">
            <NavBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <MenuComponent isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
            <Greeting isOpenMenu={isOpenMenu}/>
            <Services/>
            {/*<DevelopmentCycle/>*/}
            <Solution/>
            {/*<Industries/>*/}
            <Pricing/>
            {/*<CostOfDevelopment/>*/}
            <WhyUs/>
            <ContactForm/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
