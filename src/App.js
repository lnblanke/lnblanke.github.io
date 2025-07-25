import React from 'react';
import {Avatar, ConfigProvider, Flex, FloatButton, Layout, Menu, theme, Typography} from 'antd';
import About from "./components/about";
import Skills from "./components/skills";
import Exp from "./components/exp";
import Project from "./components/project";
import Awards from "./components/awards";
import {GithubFilled, LinkedinFilled, MailFilled} from "@ant-design/icons";

const {Title, Link} = Typography


const {Header, Content} = Layout;
const App = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const refs = {
        "about": React.useRef(null),
        "skill": React.useRef(null),
        "exp": React.useRef(null),
        "project": React.useRef(null),
        "award": React.useRef(null),
    }

    return (
        <ConfigProvider
            theme = {{
                token: {
                    fontFamily: 'Poppins',
                    colorPrimary: "#60be60",
                    colorLink: "#60be60",
                    colorLinkHover: "#90ee90",
                },
            }}
        >
            <Layout>
                <Header
                    style = {{
                        display: 'flex',
                        alignItems: 'center',
                        background: colorBgContainer,
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                    }}
                >
                    <h1 style = {{padding: "20px"}}>
                        David's Homepage
                    </h1>

                    <Menu
                        mode = "horizontal"
                        style={{
                            flex: 1,
                            minWidth: 0,
                        }}
                        onClick = {(item, _) => {
                            if (item.key === "resume") {
                                window.location.href = "/bin/Resume.pdf"
                            } else {
                                refs[item.key].current.scrollIntoView({behavior: 'smooth'})
                            }
                        }}
                        items = {[
                            {
                                key: "about",
                                label: "About"
                            },
                            {
                                key: "skill",
                                label: "Skills"
                            },
                            {
                                key: "exp",
                                label: "Experiences"
                            },
                            {
                                key: "project",
                                label: "Projects"
                            },
                            {
                                key: "award",
                                label: "Awards"
                            },
                            {
                                key: "resume",
                                label: "Resume"
                            }
                        ]}
                    >
                    </Menu>
                </Header>

                <Layout
                    style = {{
                        padding: '0'
                    }}
                >
                    <Content
                        style = {{
                            padding: 24,
                            margin: 0,
                            minHeight: "100vh",
                            background: colorBgContainer,
                        }}
                    >

                        <Flex vertical = {false} gap = "large">
                            <div style = {{textAlign: "center", margin: "20px"}}>
                                <Avatar size = {256} src="/bin/avatar.jpeg"/>
                                <Title> David (Jiahao) Fu </Title>
                                <h3> PhD Student </h3>
                                <h3> <a href = "https://siebelschool.illinois.edu"> Siebel School of Computing and Data Science </a></h3>
                                <h3> <a href = "https://grainger.illinois.edu/"> Grainger College of Engineering </a> </h3>
                                <h3><a href = "https://illinois.edu"> University of Illinois at Urbana-Champaign </a>
                                </h3>

                                <Flex vertical = {false} justify = "space-evenly">
                                    <Link href = "mailto:jiahaof4@illinois.edu" style = {{fontSize: "300%"}}>
                                        <MailFilled/>
                                    </Link>

                                    <Link href = "https://github.com/lnblanke" style = {{fontSize: "300%"}}>
                                        <GithubFilled/>
                                    </Link>

                                    <Link href = "https://www.linkedin.com/in/david-fu-27a7a821b/"
                                          style = {{fontSize: "300%"}}>
                                        <LinkedinFilled/>
                                    </Link>
                                </Flex>
                            </div>
                            <div style = {{margin: "20px"}}>
                                <div ref = {refs["about"]} style={{scrollMarginTop: "65px"}}><About/></div>
                                <div ref = {refs["skill"]} style={{scrollMarginTop: "65px"}}><Skills/></div>
                                <div ref = {refs["exp"]} style={{scrollMarginTop: "65px"}}><Exp/></div>
                                <div ref = {refs["project"]} style={{scrollMarginTop: "65px"}}><Project/></div>
                                <div ref = {refs["award"]} style={{scrollMarginTop: "65px"}}><Awards/></div>
                            </div>
                            <FloatButton.BackTop/>
                        </Flex>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};
export default App;