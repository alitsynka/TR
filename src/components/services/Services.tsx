import style from "./Services.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import {appearanceAnimation, fallsOutFromAbove} from "../../state/state";

export const Services = () => {
    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                <Row className={style.TitleBlock}>
                    <motion.div variants={fallsOutFromAbove}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}}
                                custom={1}
                    >
                        <Col md={'10'} style={{maxWidth: '100%'}}>
                            <h2 className={style.TitleOfContentBlock}>Services</h2>

                        </Col>
                        <Col xs={'10'} md={'5'} style={{maxWidth: '100%'}}>
                            <h4 className={style.DescOfContentBlock}>We specialize in a wide range of software
                                development
                                services, including</h4>
                        </Col>
                    </motion.div>

                </Row>
                <motion.div variants={appearanceAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            custom={1}
                >
                    <Row style={{marginTop: '70px', maxWidth: '100%'}}>
                        <Col md={6} className={` ${style.Card}`}>
                            <div className={style.Inner}>
                                <h5 className={style.Title}>Mobile apps development</h5>
                                <p className={style.CardDesc}>We develop high-quality mobile apps for iOS and Android
                                    devices,
                                    wearables and smart TV.</p>
                            </div>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <div className={style.Inner}>
                                <h5 className={style.Title}>Web development</h5>
                                <p className={style.CardDesc}>From responsive websites to powerful web applications, we
                                    design
                                    and develop digital experiences that engage users and drive results.</p>
                            </div>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>Blockchain development</h5>
                                <p className={style.CardDesc}>Wallets. Smart-contracts. NFT integrations. Tansaction
                                    automations.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>AI development</h5>
                                <p className={style.CardDesc}>Collect data. Import. Train. Deploy. Maintenance.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>AR/VR/Game development</h5>
                                <p className={style.CardDesc}>Software. Apps. Games. Design & Modelling.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>Custom software development</h5>
                                <p className={style.CardDesc}>Crafting tailored software solutions to meet your unique
                                    business needs. Our expert developers leverage the latest technologies to deliver
                                    scalable and efficient applications.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>BigData and Data Analysis</h5>
                                <p className={style.CardDesc}>Data engineering. BI & Data analytics. AI & ML.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>Chatbots and Integrations</h5>
                                <p className={style.CardDesc}>Multi-language development. Business processes automation.
                                    Conditional response programming.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>Legacy support</h5>
                                <p className={style.CardDesc}>Comprehensive IT support services specifically tailored to
                                    meet the unique needs of legacy systems.</p>
                            </Col>
                        </Col>
                        <Col md={6} className={style.Card}>
                            <Col className={style.Inner}>
                                <h5 className={style.Title}>UI/UX</h5>
                                <p className={style.CardDesc}>Elevate your brand with intuitive and visually stunning
                                    user
                                    interfaces. Our design experts create experiences that captivate and convert.</p>
                            </Col>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </Container>
    )
}