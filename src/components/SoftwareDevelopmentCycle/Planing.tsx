import {Col, Container, Row} from "react-bootstrap";
import img from '../../assets/images/img2.png'
import style from "./Cycles.module.scss";

export const Planing = () => {
    return (
        <Container fluid className={'d-flex flex-row align-items-start justify-content-between'}
                   style={{padding: '0px'}}>
            <img src={img} alt="" className={style.Image}/>
            <Row style={{padding: '0px', marginLeft: '20px'}}>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Project Planning:</h5>
                    <p className={style.Desc}>- Develop a detailed project plan outlining tasks, timelines, and resources.<br/>
                        - Allocate roles and responsibilities among team members.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Risk Management:</h5>
                    <p className={style.Desc}>- Identify potential risks and develop mitigation strategies.<br/>
                        - Plan for contingencies to ensure project success.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}