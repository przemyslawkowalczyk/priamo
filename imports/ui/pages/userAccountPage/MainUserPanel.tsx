import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import UserAvatar from "/imports/ui/components/user/UserAvatar";
import './userAccountPage.less';
import userAccountPageActions from "/imports/ui/actions/userAccountPage";
import {IUser} from "/types/common";

// @ts-ignore
const MainUserPanel = ({ user }: { user: IUser}) => {
    return (
        <Card>
            <Card.Header>Informacje</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs="4" id="avatar-section">
                        <UserAvatar user={user} />
                        <input id="fileInput" type="file" onChange={e => userAccountPageActions.uploadUserAvatar(e, user)} />
                    </Col>
                    <Col xs="8">

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default MainUserPanel;
