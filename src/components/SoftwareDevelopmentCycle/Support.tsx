import {Col, Container, Row} from "react-bootstrap";
import img from "../../assets/images/img6.png";
import style from './Cycles.module.scss'

export const Support = () => {

    return (
        <Container fluid className={'d-flex flex-row align-items-start justify-content-between'}
                   style={{padding: '0px'}}>
            <img src={img} alt="" className={style.Image}/>
            <Row style={{padding: '0px', marginLeft: '20px'}}>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Bug Fixes and Updates:</h5>
                    <p className={style.Desc}>- Address post-deployment issues and bugs promptly.<br/>
                        - Release updates and patches as needed.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Continuous Improvement:</h5>
                    <p className={style.Desc}>- Gather feedback for future enhancements.<br/>
                        - Plan and implement continuous improvement initiatives.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}