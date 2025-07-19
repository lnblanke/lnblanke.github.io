import {Avatar, Card, List, Space, Tabs, Typography} from "antd";
import Meta from "antd/es/card/Meta";

const {Title, Link, Text} = Typography

const course_category = [
    "Math",
    "Theory",
    "Artificial Intelligence",
    "Software"
]

const courses = {
    "Math": [
        ["MATH 241", "Calculus III", "https://cs.illinois.edu/academics/courses/math241"],
        ["MATH 257", "Linear Algebra with Computation Applications", "https://cs.illinois.edu/academics/courses/math257"],
        ["CS 357", "Numerical Methods I", "https://cs.illinois.edu/academics/courses/cs357"],
        ["CS 361", "Probability & Statistics for Computer Science", "https://cs.illinois.edu/academics/courses/cs361"]
    ],
    "Theory": [
        ["CS 225", "Data Structures", "https://cs.illinois.edu/academics/courses/cs225"],
        ["CS 233", "Computer Architecture", "https://cs.illinois.edu/academics/courses/cs233"],
        ["CS 341", "System Programming", "https://cs.illinois.edu/academics/courses/cs341"],
        ["CS 374", "Introduction to Algorithms and Models of Computing", "https://cs.illinois.edu/academics/courses/cs374"],
        ["CS 421", "Programming Languages and Compilers", "https://cs.illinois.edu/academics/courses/cs421"],
        ["CS 473", "Algorithms", "https://cs.illinois.edu/academics/courses/cs473"],
        ["CS 476", "Program Verification", "https://cs.illinois.edu/academics/courses/cs476"],
    ],
    "Artificial Intelligence": [
        ["CS 440", "Artificial Intelligence", "https://cs.illinois.edu/academics/courses/cs440"],
        ["CS 441", "Applied Machine Learning", "https://cs.illinois.edu/academics/courses/cs441"],
        ["CS 443", "Reinforcement Learning", "https://cs.illinois.edu/academics/courses/cs443"],
        ["CS 444", "Deep Learning for Computer Vision", "https://cs.illinois.edu/academics/courses/cs444"],
        ["CS 446", "Machine Learning", "https://cs.illinois.edu/academics/courses/cs446"],
        ["CS 447", "Natural Language Processing", "https://cs.illinois.edu/academics/courses/cs447"],
    ],
    "Software": [
        ["CS 222", "Software Design Lab", "https://cs.illinois.edu/academics/courses/cs222"],
        ["CS 411", "Database Systems", "https://cs.illinois.edu/academics/courses/cs411"]
    ]
}

const About = () => (
    <div>
        <Title> About </Title>
        <Space direction = "vertical">
            <Text className = "content">
                I am a first-year PhD student at Siebel School of Computing and Data Science,
                University of Illinois at Urbana-Champaign. My research interests are large language models (LLMs),
                knowledge retrieval, and natural language processing (NLP).
            </Text>

            <Title level = {3}> Education </Title>

            <Card>
                <Meta
                    title = "University of Illinois at Urbana-Champaign"
                    avatar = {<Avatar
                        src = "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png"/>}
                />
                <p> PhD in Computer Science</p>
                <p> Aug 2025 - May 2030 (Expected) </p>
            </Card>

            <Card>
                <Meta
                    title = "University of Illinois at Urbana-Champaign"
                    avatar = {<Avatar
                        src = "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-blue-background.png"/>}
                />
                <p> Bachelor of Science in Computer Science</p>
                <p> Aug 2021 - May 2025 </p>
                <p> GPA: 4.0/4.0 </p>
                <p><a href = "https://commencement.illinois.edu/bronze-tablet-scholars/"> Bronze Tablet Scholar Graduate </a></p>
                <p><a href = "https://students.grainger.illinois.edu/jscholar/about/"> James Scholar Graduate </a></p>
                <Title level = {5}> Coursework </Title>
                <Tabs
                    defaultActiveKey = "math"
                    tabPosition = "left"
                    items = {course_category.map((category, _) => ({
                        label: category,
                        key: category.toLowerCase(),
                        children: <List
                            dataSource = {courses[category]}
                            renderItem = {(item, _) => (
                                <List.Item>
                                    <List.Item.Meta title = {<Link href = {item[2]}> {item[0]} </Link>}
                                                    description = {item[1]}/>
                                </List.Item>
                            )}
                        />
                    }))}
                />
            </Card>
        </Space>
    </div>
)

export default About