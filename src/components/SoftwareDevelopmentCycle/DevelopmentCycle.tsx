import style from './DEvelopmentCycle.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {Planing} from "./Planing";
import {Design} from "./Design";
import {Implementation} from "./Implementation";
import {Testing} from "./Testing";
import {Deployment} from "./Deployment";
import {Support} from "./Support";


export const DevelopmentCycle = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const list = [
        {id: 1, element: <Planing/>, title: 'Planning'},
        {id: 2, element: <Design/>, title: 'Design'},
        {id: 3, element: <Implementation/>, title: 'Implementation'},
        {id: 4, element: <Testing/>, title: 'Testing'},
        {id: 5, element: <Deployment/>, title: 'Deployment'},
        {id: 6, element: <Support/>, title: 'Maintenance and Support'},
    ]


    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'xxl'} className={style.Container}>
                <Row>
                    <Col md={'7'}>
                        <h2 className={style.TitleOfContentBlock}>Software Development Cycle</h2>

                    </Col>
                    <Col md={'5'}>
                        <h4 className={style.DescOfContentBlock}>We specialize in a wide range of software development
                            services, including</h4>
                    </Col>
                </Row>
                <div className={style.WrapperSteps}>
                    <Container
                        className={`mw-100  d-flex flex-row justify-content-between gap-5 overflow-x-scroll ${style.Steps}`}
                        style={{
                            margin: '115px 0 60px 0',
                            padding: '0px',
                            zIndex: 1,
                        }}>
                        {
                            list.map((step, i) => {
                                    console.log('currentStep' + currentStep)
                                    return (
                                        <div className={`${style.Step} ${currentStep === i && style.ActiveStep}`}

                                           onClick={() => {
                                               setCurrentStep(i)
                                               // console.log(i)
                                           }}
                                           key={i}>
                                            {step.title}
                                        </div>
                                    )
                                }
                            )
                        }
                    </Container>
                </div>
                <div>{list[currentStep].element}</div>
            </Container>
        </Container>
    )
}