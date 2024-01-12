import {Col, Container, Row} from "react-bootstrap";
import img from "../../assets/images/img3.png";
import style from './Cycles.module.scss'

export const Implementation = () => {

    return (
        <Container fluid className={'d-flex flex-row align-items-start justify-content-between'}
                   style={{padding: '0px'}} >
            <img src={img} alt="" className={style.Image}/>
            <Row style={{padding: '0px',  marginLeft:'20px'}}>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Coding:</h5>
                    <p className={style.Desc}>- Write code according to design specifications and coding standards.<br/>
                        - Conduct regular code reviews to ensure quality and consistency.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Unit Testing:</h5>
                    <p className={style.Desc}>- Test individual components to verify their correctness.<br/>
                        - Identify and fix defects at the code level.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>Integration Testing:</h5>
                    <p className={style.Desc}>- Combine and test integrated components to ensure they work together seamlessly.<br/>
                        - Address any issues arising from interactions between components.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}