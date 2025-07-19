import {Avatar, Card, Tag, Typography} from "antd";
import Meta from "antd/es/card/Meta";

const {Title, Text} = Typography

const exp = [
    {
        "title": "Research Intern",
        "company": "IBM-Illinois Discovery Accelerator Institute",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Aug 2024 - Current",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Mentored by <a href = "https://siebelschool.illinois.edu/about/people/faculty/vadve">Prof. Vikram
                    Adve</a> and <a href = "https://siebelschool.illinois.edu/about/people/faculty/yxw">Prof. Yuxiong
                    Wang</a> from UIUC, and collaborate with IBM to explore approaches combining formal methods like
                    program verification and reinforcement learning techinques to improve the quality of code generation
                    for <a href = "https://www.ansible.com/">Ansible</a>, a domain-specific
                    language developed by RedHet.
                </li>
            </ul>
        ),
        "skills": ["Program Synthesis", "Program Verification", "Large Language Models", "Ansible", "Reinforcment Learning"]
    },
    {
        "title": "Research Assistant",
        "company": "UIUC Foward Data Lab",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Sep 2023 - Current",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Mentored by <a href = "https://siebelschool.illinois.edu/about/people/faculty/kcchang">Prof. Kevin
                    Chang</a> and work on developing a new context-aware retrieval system for long document
                    retrieval-augmented generation (RAG).
                </li>
            </ul>
        ),
        "skills": ["Large Language Models", "Information Retrieval", "Retrieval-augmented Generation"]
    },
    {
        "title": "CS 491 CAP Course Assistant",
        "company": "UIUC Siebel School of Computing and Data Science",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Aug 2024 - May 2025",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Work as course assistant for <a href = "https://cs.illinois.edu/academics/courses/cs491cap">CS 491
                    CAP</a>: Introduction to Competitive Algorithmic Programming.
                </li>
                <li>
                    Responsibilities include: writing new problemsets for the course, holding office hours, answering
                    question on online forum.
                </li>
            </ul>
        ),
        "skills": ["Algorithms", "Competitive Programming", "Teaching"]
    },
    {
        "title": "CS 374 Course Assistant",
        "company": "UIUC Siebel School of Computing and Data Science",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Jan 2024 - May 2024",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Work as course assistant for <a href = "https://cs.illinois.edu/academics/courses/cs374"> CS
                    374</a>: Introduction to Algorithms and Models of Computing.
                </li>
                <li>
                    Responsibilities include: grading homeworks & exams, helping teaching assistants in discussion
                    section, and answering questions on online forum.
                </li>
            </ul>
        ),
        "skills": ["Algorithms", "Teaching"]
    },
    {
        "title": "Knowledge Graph Team Researcher",
        "company": "UIUC PeopleWeave Project",
        "avatar": "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png",
        "time": "Apr 2023 - Dec 2023",
        "location": "Urbana, IL",
        "desp": (
            <ul>
                <li> Mentored by <a href = "https://caesar.web.engr.illinois.edu/">Prof. Matthew Caesar</a> and work
                    in group of six people as part of the <a href = "https://128.174.246.164/about">PeopleWeave
                        Project</a>. The main goal of the team is to discuss and implement a
                    new recommendation algorithm with knowledge graph algorithms and Attention mechanism for
                    users.
                </li>
            </ul>
        ),
        "skills": ["Machine Learning", "Knowledge Graph", "Recommendation Algorithm"]
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
                    href = "https://www.cmu.edu/scs/robotutor/">RoboTutor Team</a> during experiment with the
                    mentorship of the project leader, <a href = "https://www.ri.cmu.edu/ri-faculty/jack-mostow/">Prof.
                        Jack Mostow</a>, and collaboration with a senior student.
                </li>
                <li> Predicted future usage of the app by utilizing machine learning model and identified potential
                    problems of the app and provided solutions to these problems to improve the project.
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
                <Card style = {{margin: "20px 0"}} key = {item.title}>
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
                        <Tag bordered = {false} key = {skill}> {skill} </Tag>
                    ))}
                </Card>
            ))
        }
    </div>
)

export default Exp