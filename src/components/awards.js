import {Card, Typography} from "antd";
import Meta from "antd/es/card/Meta";

const {Title, Text} = Typography

const award = [
    {
        "title": "Champion of 2023 ICPC Mid-Central Programming Contest",
        "desp": (
            <Text>
                Participated in 2023 <a href = "https://icpc.global/"> International Collegiate Programming
                Contest(ICPC) </a>
                Mid-Central Programming Contest held in February 2023 and ranked 1/100.
            </Text>
        )
    },
    {
        "title": "Grainger College of Engineering Dean's List",
        "desp": (
            <Text>
                The award is given to students who have overall GPA ranking top 20% in the college.
            </Text>
        )
    },
    {
        "title": "Grainger College of Engineering James Scholar",
        "desp": (
            <Text>
                <a href = "https://students.grainger.illinois.edu/jscholar/about/"> The James Scholar Honors
                    Program </a> in the Grainger College of Engineering recognizes the talents of
                academically outstanding students, promotes curricular/co-curricular growth, and helps prepare students
                to stand out in their future endeavors.
            </Text>
        )
    },
    {
        "title": "Gold Medal of 2022 ICPC Mid-Central Programming Contest",
        "desp": (
            <Text>
                Participated in 2022 International Collegiate Programming Contest(ICPC) Mid-Central Programming Contest
                held in March 2022 and ranked 4/74.
            </Text>
        )
    },
    {
        "title": "2019 HiMCM Finalist",
        "desp": (
            <Text>
                I collaborated with three classmates in 2019 <a
                href = "https://www.comap.com/highschool/contests/"> HiMCM </a> contest.
                The goal of the contest is create a mathematical model to solve the given problem using relevant
                theories and models. Our team won Finalist among all global submissions by placing top 64 over 791
                teams.
            </Text>
        )
    }
]

const Award = () => (
    <div>
        <Title> Awards </Title>

        {
            award.map((item) => (
                <Card style = {{margin: "20px 0"}} hoverable key = {item.title}>
                    <Meta
                        title = {item.title}
                    />

                    <p/>

                    <Text> {item.desp} </Text>
                </Card>
            ))
        }
    </div>
)

export default Award