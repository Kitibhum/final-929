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
                        <dd className="col-12">XXXXXXXXXXXXXX</dd>
                        <dt className="col-6">No.2</dt>
                        <dt className="col-6">LNG222 ACADEMIC LISTENING AND SPEAKING IN INTERNATIONAL</dt>
                        <dd className="col-12">$1,250,375</dd>
                        <dt className="col-6">No.3</dt>
                        <dt className="col-6">CSC209 DATA STRUCTURES</dt>
                        <dd className="col-12"> Somebodyyyyyyyyyyyyyyyyyy</dd>
                    </dl>
                </CardBody>
            </Card>
            <Card>
                <CardHeader className="bg-success text-white">Favorite Movies</CardHeader>
                <CardBody>
                    <dl className="row p-1">
                        <dt className="col-6">No.1</dt>
                        <dt className="col-6">Color Out Of Space</dt>
                        <dd className="col-12">After a meteorite lands in the front yard of their farm, Nathan Gardner and his family find
                            themselves battling a mutant extraterrestrial organism that infects their minds and bodies.</dd>
                        <dt className="col-6">No.2</dt>
                        <dt className="col-6">The Thing</dt>
                        <dd className="col-12">A research team finds an alien being that has fallen from the sky and is starting to hunt them down.</dd>
                        <dt className="col-6">No.3</dt>
                        <dt className="col-6">The Lighthouse</dt>
                        <dd className="col-12">In a remote island, Ephraim Winslow arrives as a lighthouse keeper and assists his elderly supervisor,
                            Thomas Wake. As days pass, Winslow is haunted by strange and mysterious visions.</dd>
                    </dl>
                </CardBody>
            </Card>
            <Card>
                <CardHeader className="bg-danger text-white">Favorite Subjects</CardHeader>
                <CardBody>
                    <dl className="row p-1">
                        <dt className="col-6">No.1</dt>
                        <dt className="col-6">CSC105 Web Application Development</dt>
                        <dd className="col-12">I really love this subject because at this time at this moment i take the Examination of this subject and maybe MAYBE the prof.wll have some sympathy for me and for this massage and pray to god. love Warinthon</dd>
                        <dt className="col-6">No.2</dt>
                        <dt className="col-6">LNG222 ACADEMIC LISTENING AND SPEAKING IN INTERNATIONAL</dt>
                        <dd className="col-12">Easy to collect some mark and very enjoyanble class it just fun time</dd>
                        <dt className="col-6">No.3</dt>
                        <dt className="col-6">CSC209 DATA STRUCTURES</dt>
                        <dd className="col-12"> Somebodyyyyyyyyyyyyyyyyyy</dd>
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