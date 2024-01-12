import React from "react";
import {slide as Menu} from "react-burger-menu";
import style from "../navbar/Navbar.module.scss";
import {Container, Nav} from "react-bootstrap";

type MenuType = {
    isOpenMenu: boolean
    setIsOpenMenu: (tr: boolean) => void
}
export const MenuComponent = (props: MenuType) => {
    return (
        <Menu width={100} right={true}
              burgerButtonClassName={style.BurgerBtn}
              className={style.Menu} isOpen={props.isOpenMenu}
              onOpen={() => props.setIsOpenMenu(!props.isOpenMenu)}
        >

            <Container fluid className={`${style.WrapperMenu}`}>
                <Container fluid={'md'} className={style.Container}>
                    <div>
                        <Nav className={style.Column1}>
                            <Nav.Link href="#main">Main</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#software">Software development cycle</Nav.Link>
                            <Nav.Link href="#solutions">Development solutions</Nav.Link>
                            <Nav.Link href="#industries">Industries</Nav.Link>
                            <Nav.Link href="#pricing">Pricing models</Nav.Link>
                            <Nav.Link href="#costDevelopment">Cost of development</Nav.Link>
                            <Nav.Link href="#whyUs">Why us</Nav.Link>
                        </Nav>

                        <div className={style.Numbers}>
                            <ul className={style.Column}>
                                <li className={style.Title}>Phone numbers</li>
                                <li>+375 29 123 45 67</li>
                                <li>+375 29 123 45 67</li>
                            </ul>
                            <ul className={style.Column}>
                                <li className={style.Title}>e-mail</li>
                                <li>cbmobile@info.com</li>
                            </ul>
                        </div>
                        <div>
                            <ul className={style.Column}>
                                <li className={style.Title}>find us</li>
                                <li>Belarus, Minsk, Tolbukhina street 2, office 235</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Container>
        </Menu>
    )
}