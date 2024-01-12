import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import style from './Navbar.module.scss';
import {ReactComponent as MenuImg} from "../../assets/images/burger.svg";
import {ReactComponent as CloseBtn} from "../../assets/images/Close.svg";
import React, {useEffect, useState} from "react";
import {slide as Menu} from 'react-burger-menu'
import {motion} from "framer-motion";
import {appearanceAnimation} from "../../state/state";

type NavBarType = {
    isOpenMenu: boolean
    setIsOpenMenu: (tr: boolean) => void
}

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

// @ts-ignore
export const MenuToggle = ({toggle}) => (
    <button onClick={toggle} className={style.BtnMenu}>
        <svg width="52" height="35" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: {d: "M 2 2.5 L 25 2.5"},
                    open: {d: "M 3 21.5 L 23 2.5"}
                }}
            />
            <Path
                d="M 2 9.423 L 25 9.423"
                variants={{
                    closed: {opacity: 1},
                    open: {opacity: 0}
                }}
                transition={{duration: 0.1}}
            />
            <Path
                variants={{
                    closed: {d: "M 2 16.346 L 25 16.346"},
                    open: {d: "M 3 2.5 L 23 21.346"}
                }}
            />
        </svg>
    </button>
);

export const NavBar = (props: NavBarType) => {

    const [navbar, setNavbar] = useState(false)
    const [menu, setMenu] = useState(false)


    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 200) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }
        const changeColorMenu = () => {

            if (window.scrollY > 744) {
                setMenu(true)
            } else {
                setMenu(false)
            }
        }
        changeBackground()
        changeColorMenu()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
        window.addEventListener("scroll", changeColorMenu)
        return () => {
            window.removeEventListener("scroll", changeBackground)
            window.removeEventListener("scroll", changeColorMenu)
        }
    },)


    return (
        <Container fluid className={`${style.MainWrapper} `}>
            <motion.div variants={appearanceAnimation}
                        exit={{opacity: 0}}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{amount: 0.1}}
            >
                <Container fluid className={`${style.Wrapper} ${navbar && style.WrapperDarkMode}`}>
                    <Container fluid={'md'} className={style.Container}>
                        <Navbar style={{padding: '0'}}
                                className={'d-flex justify-content-between align-items-center'}>
                            <Navbar.Brand href="#" className={style.Brand}>cbmobile</Navbar.Brand>

                            <motion.nav
                                initial={false}
                                animate={props.isOpenMenu ? "open" : "closed"}
                                // className={style.BtnMenu}
                                // custom={height}
                                // ref={containerRef}
                            >
                                {/*<motion.div className="background" variants={sidebar}/>*/}

                                <MenuToggle
                                    toggle={() => props.setIsOpenMenu(!props.isOpenMenu)}/>
                            </motion.nav>

                            {/*<button>*/}

                            {/*    {*/}
                            {/*        props.isOpenMenu ?*/}
                            {/*            <CloseBtn onClick={() => {*/}
                            {/*                return props.setIsOpenMenu(false)*/}
                            {/*            }}/>*/}
                            {/*            : <MenuImg className={style.BtnMenu} onClick={() => {*/}
                            {/*                return props.setIsOpenMenu(true)*/}
                            {/*            }}/>*/}

                            {/*    }*/}
                            {/*</button>*/}
                        </Navbar>
                    </Container>
                </Container>
            </motion.div>
        </Container>

    )
}