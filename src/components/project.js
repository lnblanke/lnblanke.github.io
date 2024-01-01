import {Card, Tag, Typography, Image} from "antd";
import Meta from "antd/es/card/Meta";
import {ExportOutlined} from "@ant-design/icons";

const {Title} = Typography

const proj = [
    {
        "title": "Future Pandemic Prediction",
        "desp": "I worked in a group of four and used C++ to create a pandemic prediction system that predicts the trending of pandemic starting at a specific city in US with algorithms like shortest path and maximum flow. We also used Python and Matplotlib library to create a visualization of our prediction.",
        "github": "https://github.com/lnblanke/CS225-Final-Project",
        "image": "/bin/proj_1.png",
        "skills": ["C++", "Python", "Data Structure", "Data Visualization", "Matplotlib"]
    },
    {
        "title": "Music Recommendation",
        "desp": "I collaborated with three other students and created a music recommendation and analysis website. The website is able to recognize the genre of the song that user uploads and recommend similar songs in the database based on user preferences. The frontend is hosted on AWS Amplify, backend is hosted on AWS with API Gateway and Lambda, and the database is hosted on AWS RDS. We used a fully-connected neural network for classification and a KNN model for recommendation. ",
        "link": "https://main.d4taukhpvxu3q.amplifyapp.com/home",
        "github": "https://github.com/lnblanke/music-recommendation",
        "image": "",
        "skills": ["React", "Python", "MySQL", "AWS", "Machine Learning", "PyTorch", "Scikit-Learn", "Neural Network", "KNN"]
    },
    {
        "title": "YouTube Best Collection",
        "desp": "I worked in a group of four and created a website that fetch the YouTube trending dataset and present to user YouTube videos. The functionalities include tag-based search, creating a list of must watch videos, show videos based on criteria, etc. The frontend is hosted on AWS Amplify, and backend is hosted on AWS with API Gateway and Lambda. The database is hosted on AWS RDS.",
        "link": "https://main.d125eebggagy4p.amplifyapp.com/",
        "github": "https://github.com/lnblanke/youtube-best-collection",
        "image": "",
        "skills": ["React", "Python", "MySQL", "AWS"]
    }
]

const Project = () => (
    <div>
        <Title> Projects </Title>

        {
            proj.map((item) => (
                <Card style = {{margin: "20px 0"}} key = {item.title}>
                    <Meta
                        title = {item.title}
                    />

                    <p/>

                    {item.skills.map((skill) => (
                        <Tag bordered = {false} key = {skill}> {skill} </Tag>
                    ))}

                    <p> {item.desp} </p>

                    {
                        item.link ? (<p> Website link: <a href = {item.link}> <ExportOutlined/> </a></p>) : (<div/>)
                    }

                    <p> Project GitHub link: {
                        item.github ?
                            (<a href = {item.github}> <ExportOutlined/> </a>) : "Coming soon"
                    }
                    </p>

                    <Image preview = {false} src = {item.image} style = {{width: "125vh", textAlign: "center"}}/>
                </Card>
            ))
        }
    </div>
)

export default Project