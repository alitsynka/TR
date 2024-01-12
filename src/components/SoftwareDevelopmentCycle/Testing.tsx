import {Col, Container, Row} from "react-bootstrap";
import img from "../../assets/images/img4.png";
import style from './Cycles.module.scss'

export const Testing = () => {

    return (
        <Container fluid className={'d-flex flex-row align-items-start justify-content-between'}
                   style={{padding: '0px'}}>
            <img src={img} alt="" className={style.Image}/>
            <Row style={{padding: '0px', marginLeft: '20px'}}>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>System Testing:</h5>
                    <p className={style.Desc}>- Validate the complete system against the specified requirements.<br/>
                        - Identify and rectify any discrepancies.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>User Acceptance Testing (UAT):</h5>
                    <p className={style.Desc}>- Allow end-users to test the system to ensure it meets their needs.<br/>
                        - Address feedback and make necessary adjustments.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Performance Testing:</h5>
                    <p className={style.Desc}>- Assess the system's performance under various conditions.<br/>
                        - Optimize for speed, responsiveness, and scalability.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}