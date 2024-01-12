import {Col, Container, Row} from "react-bootstrap";
import style from "./Solution.module.scss";
import {ReactComponent as Rocket} from "../../assets/images/rocket.svg";
import {ReactComponent as Schedule} from "../../assets/images/schedule.svg";
import {ReactComponent as Enterprise} from "../../assets/images/enterprise.svg";
import {fallsOutFromAbove, fallsOutFromAboveSolution} from "../../state/state";
import {motion} from "framer-motion";

export const Solution = () => {
    return (
        <motion.div variants={fallsOutFromAboveSolution}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2}}
                    custom={2}
                    className={style.MainWrapper}
        >
            <Container fluid className={style.Wrapper}>
                <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                    <Row>
                        <Col md={'12'}>
                            <h2 className={style.TitleOfContentBlock}>Development solution</h2>

                        </Col>
                        <Col md={'7'}>
                            <h4 className={style.DescOfContentBlock}>Business challenges vary depending on the company’s
                                situation. We take these differences into account when providing custom software
                                development
                                solutions.</h4>
                        </Col>
                    </Row>
                    <Row style={{width: '100%', maxWidth: '100%'}} className={style.Steps}>
                        <Col md={4} xs={12} className={style.SolutionCard}>
                            <div className={style.CardTittleBlock}>
                                <Rocket className={style.Rocket}/>
                                <p>Startup</p>
                            </div>
                            <p className={style.DescOfCard}>Get your MVP built fast, test it on the market, pivot if
                                necessary, and scale to a mature
                                product with our team.</p>
                        </Col>
                        <Col md={4} xs={12} className={style.SolutionCard}>
                            <div className={style.CardTittleBlock}>
                                <Schedule className={style.Rocket}/>
                                <p>Growing</p>
                            </div>
                            <p className={style.DescOfCard}>Power your growth with the most relevant technology,
                                selected
                                and implemented by cbmobile.</p>
                        </Col>
                        <Col md={4} xs={12} className={style.SolutionCard}>
                            <div className={style.CardTittleBlock}>
                                <Enterprise className={style.Rocket}/>
                                <p>Enterprise</p>
                            </div>
                            <p className={style.DescOfCard}>Optimize complex business processes and introduce new
                                digital
                                tools into your multi-level structure with our dedicated team(s).</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </motion.div>
    )
}