import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import UserAvatar from "/imports/ui/components/user/UserAvatar";
import Form from 'react-bootstrap/Form'
import './userAccountPage.less';
import userAccountPageActions from "/imports/ui/actions/userAccountPage";
import {IUser} from "/types/common";

const truncate = (str: string, n: number): string => (str.length > n)
    ? str.substr(0, n-1) + '...'
    : str;

const MainUserPanel = ({ user }: { user: IUser }): React.ReactElement => {
    const [fileName, setFileName] = useState("Select");

    return (
        <Card>
            <Card.Header>Informacje</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs="4" id="avatar-section">
                        <UserAvatar user={user} />
                        <Col className="mb-4 mt-3">
                            <Form.Group>
                                <Form.File
                                    type="file"
                                    className="custom-file-label"
                                    id="inputGroupFile01"
                                    label={fileName}
                                    onChange={(e: React.SyntheticEvent) => {
                                        // @ts-ignore
                                        setFileName(truncate(e.target.files[0].name, 25))
                                        userAccountPageActions.uploadUserAvatar(e, user)
                                    }}
                                    custom
                                />
                            </Form.Group>
                        </Col>
                    </Col>
                    <Col xs="8">

                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default MainUserPanel;
