import style from "./Why.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import { fallsOutFromLeftSide} from "../../state/state";
import {motion} from "framer-motion";

export const WhyUs = () => {
    return (
        <Container fluid className={style.Wrapper}>
            <motion.div variants={fallsOutFromLeftSide}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2}}
                        custom={2}

            >
                <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                    <Row>
                        <Col md={'12'}>
                            <h2 className={style.TitleOfContentBlock}>Why us </h2>

                        </Col>
                        <Col md={'5'}>
                            <h4 className={style.DescOfContentBlock}>Business challenges vary depending on the company’s
                                situation.</h4>
                        </Col>
                    </Row>
                    <Row className={`${style.CardWrapper}`}>
                        <Col xs={'12'} sm={'12'} md={6} xl={3} lg={4} className={`${style.Card}`}>
                            <div className={style.Inner}>
                                <h5 className={style.Title}>Decades of Experience</h5>
                                <p className={style.CardDesc}>
                                    5+ years in custom software development services. 75% of our architects, developers
                                    and
                                    business analysts have 6-12 years of hands-on experience in cross-domain areas.
                                </p>
                            </div>
                        </Col>
                        <Col xs={'12'} sm={'12'} md={6} xl={3} lg={4} className={`${style.Card}`}>
                            <div className={style.Inner}>
                                <h5 className={style.Title}>Mature Process</h5>
                                <p className={style.CardDesc}>
                                    We mitigate risks by driving complex long-term projects in line with proven
                                    methodologies,
                                    including Agile (SCRUM) and RAD, as well as “classical” software development
                                    processes
                                    like
                                    RUP.
                                </p>
                            </div>
                        </Col>
                        <Col xs={'12'} sm={'12'} md={6} xl={3} lg={4} className={`${style.Card}`}>
                            <div className={style.Inner}>
                                <h5 className={style.Title}>Flexibility & Transparency</h5>
                                <p className={style.CardDesc}>
                                    We offer our clients a full range of engagement models to suit their business needs
                                    and
                                    project objectives.
                                </p>
                            </div>
                        </Col>
                        <Col xs={'12'} sm={'12'} md={6} xl={3} lg={4} className={`${style.Card}`}>
                            <div className={style.Inner}>
                                <h5 className={style.Title}>Quality Control</h5>
                                <p className={style.CardDesc}>
                                    Our QA department participates in the development process from the earliest stages
                                    to
                                    ensure
                                    comprehensive testing coverage and accurate quality assessment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </Container>
    )
}