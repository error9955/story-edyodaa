import React, { Component } from "react"
import "./card.css"
class Card extends Component{
    render(){
        return(
            <>
         <main className="card">
        <div className="box" > <a target="_blank"
                href=" https://www.edyoda.com/stories/fresh-graduate-or-it-professional-looking-for-a-new-job-7-reasons-to-learn-python-now">
                <img 
                    src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
                    alt="Machine learning Course" width="280px" height="100px"/>
                <h4> Fresh Graduate or IT professional Looking for.....</h4>
                <a className="date">Arman Ahmed |05 May 2022 </a>
                <p>If you are a fresh graduate - or new to IT - looking for the next job, you need to read this.
                    The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the
                    industry and also t.....</p>
            </a>
        </div>


         <div  className="box"> <a target="_blank"
                href="https://www.edyoda.com/stories/from-identity-crisis-to-the-success-story-the-devops-revolution">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/devops_tJSKVcn.jpg"
                    alt="Devops Course" width="280px" height="100px"/>
                <h4>From identity crisis to the Success Story - The DevOps </h4>
                <a className="date">Arman Ahmed |05 May 2022 </a>
                <p>DevOps is a paradigm shift in the way how software products are being built in the modern day
                    Information Technology (IT) organizations. It is becoming the de-facto component in Software
                    Development. Softw... </p>
            </a>
        </div>

        <div  className="box"> <a target="_blank"
                href="https://www.edyoda.com/stories/all-about-aitest-and-how-to-avail-rewards-upto-one-crore">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/MicrosoftTeams-image_5.png"
                    alt="AITEST" width="280px" height="100px"/>
                <h4>All about AITEST and how to avail rewards up to INR 1.... </h4>
                <a className="date">EdYoda|05 May 2022 </a>
                <p>Ever since 2019, after a solid hit from the falling rate of economic growth, the job market seems to
                    be challenging. With the technology-enabled disruption continuing to play its part, companies are
                    becoming far.... </p>
            </a>
        </div>

        <div  className="box"> <a target="_blank" href="https://www.edyoda.com/stories/what-is-web-scraping">
                <img 
                    src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2_Ctzrh0e.png"
                    alt="WEB Scraping" width="280px" height="100px"/>
                <h4>What is Web Scraping? </h4>
                <a className="date">Zan Clancy |10 March 2022 </a>
                <p>Simply put, web scraping is one of the tools developers use to gather and analyze information from
                    the Internet.Some websites and platforms offer application programm... </p>
            </a>
        </div>

        <div  className="box"> <a target="_blank"
                href="https://www.edyoda.com/stories/breaking-the-myths-around-cybersecurity ">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/5_9jUbbUb.png"
                    alt="Cyber Security Course" width="280px" height="100px"/>
                <h4> Breaking the Myths around Cybersecurity</h4>
                <a className="date">EdYoda |05 May 2022 </a>
                <p>As the dependency on online platforms is increasing daily, cybersecurity is becoming an important
                    concern for all companies today. The number of cyberattacks is even increasi.... </p>
            </a>
        </div>

        <div  className="box"> <a target="_blank" href="https://www.edyoda.com/stories/why-do-database-systems-exist">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/database_blog_900_350_P1WwWCj.png"
                    alt="Data System" width="280px" height="100px"/>
                <h4> Why do Database Systems Exist ?</h4>
                <a className="date">Piyanjal Dutta |08 Feb 2022 </a>
                <p>A couple of days back, I was having a code review of my program which scraps the keyword insights
                    from trending Tweets. But then, my colleague asked me a very interesti....</p>
            </a>
        </div>

        <div  className="box" > <a target="_blank"
                href="https://www.edyoda.com/stories/importance-of-data-backup-and-recovery-in-the-it-industry">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/7_WsnOXes.png" alt="WEB Scraping"
                    width="280px" height="100px"/>
                <h4>Importance of Data Backup and Recovery in the IT industry</h4>
                <a className="date">Varsha |18 March 2022 </a>
                <p>A business must always introspect the areas where they lack in order to bring about a positive change
                    in the work environment..... </p>
            </a>
        </div>

        <div  className="box"> <a target="_blank"
                href="https://www.edyoda.com/stories/lamp-stack-vs-mean-stack-choosing-the-right-platform-for-your-web-application-development">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/Mean_Stack_vs_LAMP_stack.png"
                    alt="Mean Stack" width="280px" height="100px"/>
                <h4>LAMP Stack Vs MEAN stack: Choosing the right platform fo..</h4>
                <a className="date">Edyoda|10 May 2022 </a>
                <p>In today’s dynamic world, rapid web application development with a smooth user interface that can
                    adapt to specific featur.... </p>
            </a>
        </div>

        <div  className="box" > <a target="_blank"
                href="https://www.edyoda.com/stories/what-is-income-share-agreement">
                <img  src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1_Ol9zdTB.png"
                    alt="Income Share Agreement" width="280px" height="100px"/>
                <h4>What is Income Share Agreement?</h4>
                <a className="date">Zan Clancy |12 Oct 2022 </a>
                <p>The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised,
                    eh? It was first introduced by Milton Friedman, an Americo scienti.... </p>
            </a>
        </div> 
    </main>    
            </>
        )
    }
}

export default Card