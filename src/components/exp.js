import {Avatar, Card, Tag, Typography} from "antd";
import Meta from "antd/es/card/Meta";

const {Title, Text} = Typography

const exp = [
    {
        "title": "Student Researcher",
        "company": "UIUC Foward Data Lab",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Sep 2023 - Current",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Mentored by <a href = "https://ece.illinois.edu/about/directory/affiliates/kcchang"> Prof. Kevin
                    Chang </a> and work on analyzing research papers with large language model to help readers
                    understand results of the papers better.
                </li>
                <li> Improving algorithms for abstractive question answering on long documents with GPT.</li>
            </ul>
        ),
        "skills": ["Machine Learning", "Deep Learning", "Natural Language Processing", "Python", "PyTorch", "GPT", "Transformers"]
    },
    {
        "title": "Knowledge Graph Team Researcher",
        "company": "UIUC PeopleWeave Project",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Apr 2023 - Current",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Mentored by <a href = "https://caesar.web.engr.illinois.edu/"> Prof. Matthew Caesar </a> and work
                    in group of six people as part of the <a href = "https://128.174.246.164/about"> PeopleWeave
                        Project </a>. The main goal of the team is to discuss and implement a
                    new recommendation algorithm with knowledge graph algorithms and Attention mechanism for
                    users.
                </li>
            </ul>
        ),
        "skills": ["Machine Learning", "Deep Learning", "Knowledge Graph", "Recommendation Algorithm", "Attention Mechanism", "Python", "PyTorch"]
    },
    {
        "title": "Software Development Intern",
        "company": "China Merchants Bank",
        "avatar": "https://seeklogo.com/images/C/china-merchants-bank-logo-569682C19A-seeklogo.com.png",
        "time": "Jun 2023 - Jul 2023",
        "location": "Nanjing, China",
        "desp": (
            <ul>
                <li> Completed several backend applications with Java, Spring Boot, Kafka, and interact with database
                    using MyBatis.
                </li>
                <li> Created unit tests for the projects and collaborated with mentor to improve the efficiency of the
                    code and eventually publish the
                    projects on production environment.
                </li>
            </ul>
        ),
        "skills": ["Java", "MySQL", "Spring Boot", "Apache Kafka", "MyBatis"]
    },
    {
        "title": "Data Analytic Intern",
        "company": "CMU RoboTutor Project",
        "avatar": "https://www.cmu.edu/brand/brand-guidelines/images/wordmarksquare-red-600x600.png",
        "time": "Aug 2020 - Mar 2021",
        "location": "Remote",
        "desp": (
            <ul>
                <li> Analyzed data collected by mobile app developed by the <a
                    href = "https://www.cmu.edu/scs/robotutor/"> RoboTutor team </a> during experiment with the
                    mentorship of the project leader, <a href = "https://www.ri.cmu.edu/ri-faculty/jack-mostow/"> Prof.
                        Jack Mostow </a>, and collaboration with a senior student
                </li>
                <li> Predicted future usage of the app by utilizing machine learning model and identified potential
                    problems of the app and provided solutions to these problems to improve the project
                </li>
            </ul>
        ),
        "skills": ["Data Analytics", "Python", "Machine Learning", "Naive Bayes"]
    }
]

const Exp = () => (
    <div>
        <Title> Experiences </Title>

        {
            exp.map((item) => (
                <Card style = {{margin: "20px 0"}} key={item.title}>
                    <Meta
                        title = {item.company}
                        avatar = {<Avatar
                            src = {item.avatar}/>}
                    />

                    <Title level = {5}> {item.title} </Title>
                    <p> {item.time} </p>
                    <p> {item.location} </p>
                    <Text> {item.desp} </Text>

                    {item.skills.map((skill) => (
                        <Tag bordered = {false} key={skill}> {skill} </Tag>
                    ))}
                </Card>
            ))
        }
    </div>
)

export default Exp