import style from './ContactForm.module.scss';
import {Button, Col, Container, Dropdown, DropdownButton, Form, Row} from "react-bootstrap";
import {fallsOutFromLeftSide} from "../../state/state";
import {motion} from 'framer-motion';


export const ContactForm = () => {
    const rightAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: custom * 0.26,
                ease: "easeInOut"
            },
        })
    }
    const leftAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            repeat: 'infinite',
            transition: {
                duration: 0.4,
                delay: custom * 0.26,
                ease: "easeInOut",
                type: 'just',

            },
        })
    }
    return (
        <Container fluid className={style.Wrapper}>
            <Container fluid={'md'} className={style.Container} style={{padding: '0px'}}>

                <Row>
                    <Col md={'7'}>
                        <motion.div variants={leftAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{amount: 0.2}}
                                    custom={2}
                        >
                            <h2 className={style.TitleOfContentBlock}>Contact form</h2>
                        </motion.div>
                    </Col>


                    <Col lg={'5'} xs={'12'}>
                        <motion.div variants={rightAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{amount: 0.2}}
                                    custom={2}
                        >
                            <h4 className={style.DescOfContentBlock}>We specialize in a wide range of software
                                development services, including</h4>
                        </motion.div>
                    </Col>

                </Row>


                <Form className={style.FormWrapper}>
                    <Row className={style.FormContainer}>

                        <Col xs={12} sm={12} md={6}>
                            <motion.div variants={leftAnimation}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{amount: 0.2}}
                                        custom={2}
                                // style={{width: '100%'}}
                            >
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="name" className={style.FormInput}/>
                                    {/*<Form.Text className="text-muted">*/}
                                    {/*    We'll never share your email with anyone else.*/}
                                    {/*</Form.Text>*/}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="email" className={style.FormInput}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Control type="phone" placeholder="Phone Number" className={style.FormInput}/>
                                </Form.Group>
                                <Form.Group className="mb-0" controlId="SelectBudjet">
                                    {/*<Form.Select aria-label="Default select example" className={style.FormSelect}>*/}
                                    {/*    <option>Open this select menu</option>*/}
                                    {/*    <option value="1">One</option>*/}
                                    {/*    <option value="2">Two</option>*/}
                                    {/*    <option value="3">Three</option>*/}
                                    {/*</Form.Select>*/}
                                    <Dropdown className={style.FormSelect}>
                                        <DropdownButton id="dropdown-basic-button" title={'Expected budget*'}
                                                        className={style.DropdownButton}>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </Dropdown>
                                </Form.Group>
                            </motion.div>
                        </Col>
                        <Col xs={12} sm={12} md={6} style={{height: '100%'}}>
                            <motion.div variants={rightAnimation}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{amount: 0.2}}
                                        custom={2}
                                        style={{height: '100%'}}
                            >
                                <Form.Group className="h-100" controlId="formBasicPhoneNumber">
                                    <Form.Control as="textarea" placeholder="Tell us about your idea or project"
                                                  className={style.TextArea}/>
                                </Form.Group>
                            </motion.div>
                        </Col>
                    </Row>
                    <motion.div variants={rightAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}}
                                custom={2}
                    >
                        <Form.Text className="text-muted mb-xl-4">
                            By sending this form, you agree to give us access to your personal data according to our
                            Privacy
                            policy.
                        </Form.Text>
                        <Button variant="primary" type="submit" className={style.ContactBtn}>
                            Submit
                        </Button>
                    </motion.div>

                </Form>
            </Container>
        </Container>
    )
}