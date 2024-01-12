import {Col, Container, Row} from "react-bootstrap";
import style from "./Greeting.module.scss";
import {appearanceAnimation} from "../../state/state";
import {motion} from "framer-motion";

type GreetingType = {
    isOpenMenu: boolean
}

export const Greeting = (props: GreetingType) => {
    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                <motion.div variants={appearanceAnimation}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            viewport={{amount: 0.13}}
                >
                    {!props.isOpenMenu ?
                        <Row>
                            <Col md={'10'}>
                                <h2 className={style.TitleOfContentBlock}>
                                    empowering Visions.<br/>
                                    <span>
                                    Unleashing Innovation.
                                    </span>
                                </h2>
                            </Col>
                            <Col md={'10'} xs={'12'} className={'d-flex flex-column'}>
                                <h4 className={style.DescOfContentBlock}>Transform your business dynamics with
                                    tailor-made software solutions. <br/>Kick off your project within a week, explore
                                    fresh
                                    features every 1–2 weeks, and acquire a top-notch product within your financial
                                    plan</h4>
                                <button className={style.ContactBtn}>Contact us</button>
                            </Col>

                        </Row>
                        : ''
                    }
                </motion.div>
            </Container>
        </Container>
    )
}