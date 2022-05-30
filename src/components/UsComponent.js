import React from "react";
import {
    Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg, CardText,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';


function Contact(props) {
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>About Me</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>About Me</h3>
            <hr />
        </div>
    </div>
    <div className="row row-content">
        <div className="col-12 col-md-6">
            <Card>
                <CardImg src="./assets/images/Kitibhum.png"></CardImg>
                <CardBody>
                    <CardTitle>Dream Bigger Do Biggrt</CardTitle>
                    <CardSubtitle>Kitibhum Supanurat</CardSubtitle>
                    <CardText>King Mongkut's University of Technology Thonburi</CardText>
                </CardBody>
            </Card>

        </div>
        <div className="col-12 col-md-5">
            <Card>
                <CardHeader className="bg-primary text-white">Favorite Subjects</CardHeader>
                <CardBody>
                    <dl className="row p-1">
                        <dt className="col-6">No.1</dt>
                        <dt className="col-6">CSC105 Web Application Development</dt>
                        <dd className="col-12">Good website design for web dev!</dd>
                        <dt className="col-6">No.2</dt>
                        <dt className="col-6">Lovely Breakout room!L</dt>
                        <dd className="col-12">HeyHeyHeyy</dd>
                        <dt className="col-6">No.3</dt>
                        <dt className="col-6">CSC209 DATA STRUCTURES</dt>
                        <dd className="col-12"> GoodGOodGOodGOod!</dd>
                    </dl>
                </CardBody>
            </Card>
            <Card>
                <CardHeader className="bg-success text-white">Favorite Movies</CardHeader>
                <CardBody>
                    <dl className="row p-1">
                        <dt className="col-6">No.1</dt>
                        <dt className="col-6">Toy Story</dt>
                        <dd className="col-12">Lovely toys and funny adventure.</dd>
                        <dt className="col-6">No.2</dt>
                        <dt className="col-6">Minions</dt>
                        <dd className="col-12">Banana Bananana</dd>
                        <dt className="col-6">No.3</dt>
                        <dt className="col-6">Spiderman</dt>
                        <dd className="col-12">Funny Exciting and Thirlling Movie</dd>
                    </dl>
                </CardBody>
            </Card>
            <Card>
                <CardHeader className="bg-danger text-white">Favorite Subjects</CardHeader>
                <CardBody>
                    <dl className="row p-1">
                        <dt className="col-6">No.1</dt>
                        <dt className="col-6">CSC105 Web Application Development</dt>
                        <dd className="col-12">This subject make me know how to be a good web developers so i hope it will very useful for me at the future. </dd>
                        <dt className="col-6">No.2</dt>
                        <dt className="col-6">LNG222 ACADEMIC LISTENING AND SPEAKING IN INTERNATIONAL</dt>
                        <dd className="col-12">Improving English with Breakout Room!!!!</dd>
                        <dt className="col-6">No.3</dt>
                        <dt className="col-6">CSC209 DATA STRUCTURES</dt>
                        <dd className="col-12"> Good and Fun to learning but the exam is so Hardd!</dd>
                    </dl>
                </CardBody>
            </Card>
        </div>
        <div className="col-12">
           
        </div>
    </div>
    {/* <div className="row row-content">
        <div className="col-12">
            <h2>Corporate Leadership</h2>
        </div>
        <div className="col-12">
            <Media list>
                {RenderLeader}
            </Media>
        </div>
    </div> */}
</div>
);
}

export default Contact;