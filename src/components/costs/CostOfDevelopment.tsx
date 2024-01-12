import style from "./CostsOfDevelopment.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {ReactComponent as Costs1} from "../../assets/images/costs1.svg";
import {ReactComponent as Costs2} from "../../assets/images/costs2.svg";
import {ReactComponent as Costs3} from "../../assets/images/costs3.svg";
import {ReactComponent as Costs4} from "../../assets/images/costs4.svg";
import {ReactComponent as Costs5} from "../../assets/images/costs5.svg";
import {ReactComponent as Costs6} from "../../assets/images/costs6.svg";
import {appearanceAnimation} from "../../state/state";
import {motion} from "framer-motion";

export const CostOfDevelopment = () => {
    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                <Row>

                    <Col md={'12'} xl={'7'}>
                        <motion.div variants={appearanceAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={0.8}
                                    viewport={{amount: 0.13}}
                        >
                            <h2 className={style.TitleOfContentBlock}>Cost of development</h2>
                        </motion.div>
                    </Col>
                    <Col md={'10'} xl={'5'}>
                        <motion.div variants={appearanceAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={0.8}
                                    viewport={{amount: 0.13}}
                        >
                            <h4 className={style.DescOfContentBlock}>We specialize in a wide range of software
                                development
                                services, including</h4>
                        </motion.div>
                    </Col>

                </Row>
                <Row className={`row row-cols g-5 mt-xl-5 mt-1 w-100 ${style.CardsWrapper}`}>

                    <Col xs={6} sm={4}>
                        <motion.div variants={appearanceAnimation}
                                    className={`${style.SolutionCard}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={2}
                                    viewport={{amount: 0.13}}
                        >
                            <Costs1/>
                            <p className={style.DescOfCard}>Team size</p>
                        </motion.div>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <motion.div variants={appearanceAnimation}
                                    className={`${style.SolutionCard}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={2}
                                    viewport={{amount: 0.13}}
                        >
                            <Costs2/>
                            <p className={style.DescOfCard}>Project complexity</p>
                        </motion.div>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <motion.div variants={appearanceAnimation}
                                    className={`${style.SolutionCard}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={2}
                                    viewport={{amount: 0.13}}
                        >
                            <Costs3/>
                            <p className={style.DescOfCard}>Project duration</p>
                        </motion.div>
                    </Col>
                    <Col xs={6} sm={4}>
                        <motion.div variants={appearanceAnimation}
                                    className={style.SolutionCard}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={3}
                                    viewport={{amount: 0.13}}
                        >
                            <Costs4/>
                            <p className={style.DescOfCard}>Team composition</p>
                        </motion.div>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <motion.div variants={appearanceAnimation}
                                    className={style.SolutionCard}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={3}
                                    viewport={{amount: 0.13}}
                        >
                            <Costs5/>
                            <p className={style.DescOfCard}>Cooperation model</p>
                        </motion.div>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <motion.div variants={appearanceAnimation}
                                    className={style.SolutionCard}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={3}
                                    viewport={{amount: 0.13}}
                        >
                            <Costs6/>
                            <p className={style.DescOfCard}>Scope of work</p>
                        </motion.div>
                    </Col>

                </Row>
            </Container>

        </Container>
    )
}