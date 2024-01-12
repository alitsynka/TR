import style from './Cycles.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import img from '../../assets/images/img1.png'

export const Design = () => {
    return (
        <Container fluid className={'d-flex flex-row align-items-start justify-content-between'}
                   style={{padding: '0px'}}>
            <img src={img} alt="" className={style.Image}/>
            <Row style={{padding: '0px', marginLeft:'20px'}} >
                <Col xs={'12'} style={{marginBottom: '45px',padding: '0px'}}>
                    <h5 className={style.Title}>System architecture Design:</h5>
                    <p className={style.Desc}>- Create high-level and low-level design specifications based on
                        requirements.<br/>
                        - Define architecture, components, and data flow.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px',padding: '0px'}}>
                    <h5 className={style.Title}>Database Design:</h5>
                    <p className={style.Desc}>- Design the database schema and define relationships between
                        entities.<br/>
                        - Optimize for performance, scalability, and data integrity.
                    </p>
                </Col>
                <Col xs={'12'} style={{marginBottom: '45px', padding: '0px'}}>
                    <h5 className={style.Title}>UI/UX Design:</h5>
                    <p className={style.Desc}>- Develop user interface designs and user experience workflows.<br/>
                        - Ensure alignment with user requirements and industry best practices.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}