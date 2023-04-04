import Navbar from "../../components/Navbar/navbar"
import './about.css'

function About(){
    return(
        <div className="Ab">
            <Navbar/>
            <div className="About">
                <p>Hi I am Akshay Mathilakath Nair, For the assignment round of the selection process for <b>Dev code</b> Internship I have created a NEWS website that incorporates all the mentioned features in the following ways-<br></br><br></br><br></br><b>Component lifecycle : </b> As i have used functional components for this project I have made use of the useEffect Hook in react as a substitute for lifecycle functions. Hence cleanup function are implemented within useEffect functions by giving a return statement within useEffect etc.<br></br><br></br><b>Router : </b>The React browser Router has also been implemented within this project as it is used to navigate between the various pages like Login,Register,Home,About page etc.<br></br><br></br><b>Context : </b>The react Context feature has also been implemented as it has been used for storing the details of the currently signed in user which is taken from firebase as this information is to be used all over project within different components.<br></br><br></br><b>Hooks : </b>As functional components have been used throughout this project Hooks like useState,useEffect,useContext,useNavigate,useRef etc have been repeatedly used.<br></br><br></br><b>Token : </b><br></br><br></br><b>Rest API : </b>For this NEWS website I have used a free API service - newsapi.org hence making use of a REST API and collecting information in the form of JSON.<br></br><br></br><b>Axios : </b>Axios has also been used to get the required JSON data from the API - Axios.get()<br></br><br></br><b>Firebase Login : </b>This feature also has been Implemented as the firebase login with Email and password has been using for authentication also the user details has been stored within the collection - 'users' using firestore <br></br><br></br><b>Pagination : </b>This feature has also been implemented as the daily NEWS has been split into group of 10 news at a time with the ability to move to previous and load more news from the next page.</p>
                <div className="Socials">
                    <a href='https://www.instagram.com/akshay.nair_/'>Instagram</a>
                    <a href='https://github.com/akshaynair5'>GitHub Acc</a>
                    <a href='https://github.com/akshaynair5/devcode_assigment'>Files for this project</a>
                    <a href='https://www.linkedin.com/in/akshay-nair-a3a4aa230'>LinkDln</a>
                </div>
            </div>
        </div>
    )
}
export default About