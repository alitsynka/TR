import style from "./Pricing.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {appearanceAnimation, fallsOutFromAboveSolution} from "../../state/state";
import {motion} from "framer-motion";

export const Pricing = () => {
    return (
        <motion.div variants={appearanceAnimation}
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
                            <h2 className={style.TitleOfContentBlock}>Pricing models</h2>

                        </Col>
                        <Col lg={'8'} md={'12'} xs={'10'}>
                            <h4 className={style.DescOfContentBlock}>Business challenges vary depending on the company’s
                                situation.</h4>
                        </Col>
                    </Row>
                    <Row className={style.CardWrapper}
                         style={{margin: '80px 0 0 0 '}}>
                        <Col xl={4} lg={6} className={`${style.Card}`}>
                            <motion.div
                                whileHover={{
                                    scaleY: 1.05,
                                    transition: {duration: 0.3}
                                }}
                                className={style.Inner}>
                                <h5 className={style.Title}>Time & material</h5>
                                <p className={style.CardDesc}>
                                    In the time and material (T&M) approach, you pay for the hours invested in your
                                    project
                                    and
                                    cover any extra expenses as they arise. The payment arrangement is tailored to each
                                    project
                                    and typically aligns with its key milestones. Time and material proves to be an
                                    ideal
                                    choice
                                    for projects that follow Agile software development methodologies. This is because
                                    in
                                    Agile,
                                    the project’s scope and team composition are flexible and can evolve over time.
                                </p>
                                <button className={style.ContactBtn}>Contact us</button>
                            </motion.div>
                        </Col>
                        <Col xl={4} lg={6} className={`${style.Card}`}>
                            <motion.div whileHover={{
                                scaleY: 1.05,
                                transition: {duration: 0.3}
                            }} className={style.Inner}>
                                <h5 className={style.Title}>Fixed price</h5>
                                <p className={style.CardDesc}>
                                    Material compensation is determined during pre-project negotiations and remains
                                    unchanged
                                    throughout the project. There are also specific deadlines set for project milestones
                                    and
                                    related payments.A fixed price model is ideal for nearshore software development
                                    projects
                                    based on the Waterfall methodology. In this context, a well-defined project plan is
                                    in
                                    place, minimizing the chances of significant alterations to the project’s course.
                                </p>
                                <button className={style.ContactBtn}>Contact us</button>
                            </motion.div>
                        </Col>
                        <Col xl={4} lg={6} className={`${style.Card}`}>
                            <motion.div whileHover={{
                                scaleY: 1.05,
                                transition: {duration: 0.3}
                            }} className={style.Inner}>
                                <h5 className={style.Title}>Dedicated team</h5>
                                <p className={style.CardDesc}>
                                    A dedicated team is recruited on a monthly basis, starting at 0.5 FTE (full-time
                                    equivalent). This model proves to be an effective strategy for mitigating the risks
                                    and
                                    additional expenses associated with managing in-house employees.It is especially
                                    effective
                                    for long-term projects requiring the seamless integration of specific IT specialists
                                    into
                                    your team. Businesses can access the right talent as needed, without having to
                                    commit to
                                    long-term hiring.
                                </p>
                                <button className={style.ContactBtn}>Contact us</button>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </motion.div>
    )
}