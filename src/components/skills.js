import {Avatar, List, Progress, Tabs, Typography} from "antd";
const {Title} = Typography

const skill_category = [
    "Machine Learning",
    "Frontend",
    "Backend",
    "Tools"
]

const skills = {
    "Machine Learning": [
        ["PyTorch", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", 3],
        ["NumPy", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", 3],
        ["Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", 3],
        ["Jupyter", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", 3],
        ["TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", 2]
    ],
    "Frontend": [
        ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 2],
        ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 2],
        ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 2],
        ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 2]
    ],
    "Backend": [
        ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 3],
        ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 3],
        ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 3],
        ["C", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", 2],
        ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 2],
        ["Apache Kafka", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", 2],
        ["Spring", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", 2],
        ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 1],
        ["Neo4j", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg", 1]
    ],
    "Tools": [
        ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 3],
        ["LaTeX", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg", 3],
        ["Linux", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 2],
        ["Vim", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg", 2],
        ["AWS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", 2],
        ["CMake", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg", 1],
        ["Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 1],
        ["Photoshop", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", 1]
    ]
}

const Skills = () => (
    <>
        <Title> Skills </Title>
        <Tabs
            defaultActiveKey = "math"
            tabPosition = "left"
            items = {skill_category.map((category, _) => ({
                label: category,
                key: category.toLowerCase(),
                children: <List
                    dataSource = {skills[category]}
                    renderItem = {(item, _) => (
                        <List.Item>
                            <List.Item.Meta title={item[0]} avatar={<Avatar src={item[1]}/>}/>
                            <Progress
                                percent = {item[2] / 3 * 100}
                                style={{width: "50vh", paddingRight: "70px"}}
                                format={(percent) => {
                                    if (percent <= 34) return "Basic"
                                    else if (percent <= 67) return "Intermediate"
                                    else return "Advanced"
                                }}
                                strokeColor={
                                    item[2] === 1? {
                                        from: "#ffff11",
                                        to: "#aaff22"
                                    }: item[2] === 2? {
                                        from: "#ffff11",
                                        to: "#55ff33"
                                    }: {
                                        from: "#ffff11",
                                        to: "#00ff44"
                                    }
                                }
                                trailColor="#ffffff"
                                success={{percent: 0}}
                            />
                        </List.Item>
                    )}
                />
            }))}
        />
    </>
)

export default Skills