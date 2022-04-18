import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img from '../../images/photoGov.jpg';

const AboutUs = () => {
    return (
        <div className="container mt-5">
            <Card className="text-center">
                <Card.Header>
                    <img src={img} alt="" />
                </Card.Header>
                <Card.Body>
                    <Card.Title>Md. Saiful Islam Arif</Card.Title>
                    <Card.Text>
                        Education(2019): B.Sc in Computer Science and Engineering.
                    </Card.Text>
                    <Card.Text>
                        Career Objectives: An exciting and creative position in a service organization Where there is
                        opportunity to work with people in an environment excellence and thus build
                        a better career and fulfill mission vision objective and goal of the organization
                        in the light of my efforts and skills in competitive atmosphere.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default AboutUs;