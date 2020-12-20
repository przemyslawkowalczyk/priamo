import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const helloCard = () => (
    <Card>
        <Card.Header >
            Witamy
        </Card.Header>
        <Card.Body>
            <Image src="/pictures/teacher-pic.png" />
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi delectus est repudiandae. Assumenda consequuntur, distinctio ea illum,
                inventore libero molestias nobis nulla, odit omnis quae quo quos sapiente tempore tenetur!
            </p>
        </Card.Body>
    </Card>
);

export default helloCard;

