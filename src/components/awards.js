import {Card, Typography} from "antd";
import Meta from "antd/es/card/Meta";

const {Title, Text} = Typography

const award = [{
    "title": "RAISE-25 Undergraduate Track First Prize",
    "desp": (
        <Text>
            Competed in <a href = "https://go.rutgers.edu/RAISE-25">
            RAISE-25 Student Informatics, Data Science, and AI Competition </a> hosted by Rutgers University Edward J.
            Bloustein School of Planning and Public Policy with over 100 undergraduate and graduate teams, earning the
            only first prize in undergraduate track.
        </Text>
    )
},
    {
        "title": "2024 ICPC Mid-Central Programming Contest Gold Medal",
        "desp": (
            <Text>
                Participated in 2024 <a href = "https://icpc.global/"> International Collegiate Programming
                Contest(ICPC) </a>
                Mid-Central Programming Contest held in November 2024 and ranked 4/81.
            </Text>
        )
    },
    {
        "title": "The 48th Annual ICPC World Finals Honors",
        "desp": (
            <Text>
                Participated in the 48th annual <a href = "https://worldfinals.icpc.global//"> International Collegiate
                Programming
                Contest(ICPC) World Fianls </a> held in Astana, Kazakhstan in September 15-20 2024 and ranked 69/141.
            </Text>
        )
    },
    {
        "title": "2023 ICPC Mid-Central Programming Contest Gold Medal",
        "desp": (
            <Text>
                Participated in 2023 <a href = "https://icpc.global/"> International Collegiate Programming
                Contest(ICPC) </a>
                Mid-Central Programming Contest held in February 2024 and ranked 3/87.
            </Text>
        )
    },
    {
        "title": "2022 ICPC North America Championship Honorably Mentioned",
        "desp": (
            <Text>
                Participated in 2022 <a href = "https://nac.icpc.global/"> International Collegiate Programming
                Contest(ICPC) North America Championship </a>
                held in May 2023 and ranked 31/51.
            </Text>
        )
    },
    {
        "title": "2022 ICPC Mid-Central Programming Contest Champion",
        "desp": (
            <Text>
                Participated in 2022 <a href = "https://icpc.global/"> International Collegiate Programming
                Contest(ICPC) </a>
                Mid-Central Programming Contest held in February 2023 and ranked 1/100. Proceeded to North America
                Championship (NAC).
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
        "title": "2021 ICPC Mid-Central Programming Contest Gold Medal",
        "desp": (
            <Text>
                Participated in 2021 <a href = "https://icpc.global/"> International Collegiate Programming
                Contest(ICPC) </a> Mid-Central Programming Contest
                held in March 2022 and ranked 4/74.
            </Text>
        )
    },
    {
        "title": "2019 HiMCM Finalist",
        "desp": (
            <Text>
                Collaborated with three classmates in 2019 <a
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
                <Card style = {{margin: "20px 0"}} key = {item.title}>
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