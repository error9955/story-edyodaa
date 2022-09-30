import React, { Component } from "react"
import "./trending.css"
class Trending extends Component {
    render() {
        return (
            <>
                <h1 className="trendingPost">Trending Posts</h1>
                <div>
                    <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" />
                </div>
                <div className="latestpost">
                    <h1>  Latests Posts </h1>
                </div>

                <div className="filter">
                    <img className="filterIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="Filter Icon" />
                    <h3 className="filterbycategory">Filter by Category</h3>
                </div>
                <div className="Courses">
                    <div className="coursesName" >All</div>
                    <div className="coursesName" >Artificial Intelligence</div>
                    <div className="coursesName">Cloud Computing</div>
                    <div className="coursesName">DevOps</div>
                    <div className="coursesName">Programming Languages</div>
                    <div className="coursesName">Mobile Application Development</div>
                    <div className="coursesName">Technology and Tools</div>
                    <div className="coursesName">Get a Job in a Tech Company</div>
                    <div className="coursesName">Others</div>
                </div>
            </>
        )
    }
}

export default Trending