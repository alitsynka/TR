import style from "./Footer.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {appearanceAnimation} from "../../state/state";
import {motion} from "framer-motion";

export const Footer = () => {
    return (
        <Container fluid className={style.Wrapper} id={'footer'}>
            <motion.div variants={appearanceAnimation}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{amount: 0.13}}
            >
                <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                    <Row>
                        <Col md={'7'} xs={'12'}>
                            <h2 className={style.TitleOfContentBlock}>cbmobile</h2>

                        </Col>
                        <Col md={'5'} xs={'12'}>
                            <h4 className={style.DescOfContentBlock}>Empowering Visions Unleashing Innovation</h4>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '70px'}}>
                        <Col lg={12} xl={4}>
                            <ul className={style.Column}>
                                <li>Main</li>
                                <li>Services</li>
                                <li>Software development cycle</li>
                                <li>Development solutions</li>
                                <li>Industries</li>
                                <li>Pricing models</li>
                                <li>Cost of development</li>
                                <li>Why us</li>
                            </ul>
                        </Col>
                        <Col lg={12} xl={4} className={'mt-lg-5 mt-0'}>
                            <ul className={style.Column}>
                                <li className={style.Title}>Phone numbers</li>
                                <li>+375 29 123 45 67</li>
                                <li>+375 29 123 45 67</li>
                                <li className={style.Title} style={{marginTop: '60px'}}>e-mail</li>
                                <li>cbmobile@info.com</li>
                            </ul>
                        </Col>
                        <Col lg={12} xl={4} className={'mt-lg-5 mt-0'}>
                            <ul className={style.Column}>
                                <li className={style.Title}>find us</li>
                                <li>Belarus, Minsk, Tolbukhina street 2, office 235</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </Container>)
}