import style from "./Industries.module.scss";
import {Col, Container, Row} from "react-bootstrap";

export const Industries = () => {
    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'xxl'} className={style.Container} style={{padding: '0px'}}>
                <Row>
                    <Col md={'7'}>
                        <h2 className={style.TitleOfContentBlock}>Industries</h2>
                    </Col>
                    <Col md={'5'}>
                        <h4 className={style.DescOfContentBlock}>We specialize in a wide range of software development
                            services, including</h4>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}