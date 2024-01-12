import style from "./CostsOfDevelopment.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {ReactComponent as Costs1} from "../../assets/images/costs1.svg";
import {ReactComponent as Costs2} from "../../assets/images/costs2.svg";
import {ReactComponent as Costs3} from "../../assets/images/costs3.svg";
import {ReactComponent as Costs4} from "../../assets/images/costs4.svg";
import {ReactComponent as Costs5} from "../../assets/images/costs5.svg";
import {ReactComponent as Costs6} from "../../assets/images/costs6.svg";

export const CostOfDevelopment = () => {
    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>
                <Row>
                    <Col md={'12'} xl={'7'}>
                        <h2 className={style.TitleOfContentBlock}>Cost of development</h2>

                    </Col>
                    <Col md={'10'} xl={'5'}>
                        <h4 className={style.DescOfContentBlock}>We specialize in a wide range of software development
                            services, including</h4>
                    </Col>
                </Row>
                <Row className={`row row-cols g-5 mt-xl-5 mt-1 w-100 ${style.CardsWrapper}`}>
                    <Col xs={6} sm={4} className={`${style.SolutionCard}`}>
                        <Costs1/>
                        <p className={style.DescOfCard}>Team size</p>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <Costs2/>
                        <p className={style.DescOfCard}>Project complexity</p>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <Costs3/>
                        <p className={style.DescOfCard}>Project duration</p>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <Costs4/>
                        <p className={style.DescOfCard}>Team composition</p>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <Costs5/>
                        <p className={style.DescOfCard}>Cooperation model</p>
                    </Col>
                    <Col xs={6} sm={4} className={style.SolutionCard}>
                        <Costs6/>
                        <p className={style.DescOfCard}>Scope of work</p>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}