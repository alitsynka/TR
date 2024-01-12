import {Col, Container, Row} from "react-bootstrap";
import img from "../../assets/images/img5.png";
import style from './Cycles.module.scss'

export const Deployment = () => {

    return (
        <Container fluid className={'d-flex flex-row align-items-start justify-content-between'}
                   style={{padding: '0px'}}>
            <img src={img} alt="" className={style.Image}/>
            <Row style={{padding: '0px', marginLeft: '20px'}}>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Deployment Planning:</h5>
                    <p className={style.Desc}>- Develop a deployment strategy and schedule.
                        - Coordinate with stakeholders for a smooth transition to the new system.<br/>
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Implementation:</h5>
                    <p className={style.Desc}>- Roll out the system to production environments.<br/>
                        - Monitor for any issues and provide immediate support.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}