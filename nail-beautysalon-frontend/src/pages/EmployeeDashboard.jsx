import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../context/AuthContext';

function EmployeeDashboard() {
    const { user, logout } = useAuth();

    return (
        <main className="employee-dashboard">

            <Container>

                <div className="dashboard-header">

                    <div>
                        <p className="dashboard-eyebrow">
                            EMPLOYEE PORTAL
                        </p>

                        <h1>
                            Welcome, {user?.name}
                        </h1>

                        <p>
                            Manage your salon activities from your
                            employee dashboard.
                        </p>
                    </div>

                    <Button
                        className="logout-button"
                        onClick={logout}
                    >
                        Logout
                    </Button>

                </div>

                <Row className="g-4">

                    <Col md={4}>
                        <Card className="dashboard-card">
                            <Card.Body>
                                <h3>Appointments</h3>

                                <p>
                                    View and manage salon appointments.
                                </p>

                                <Button className="dashboard-button">
                                    View Appointments
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="dashboard-card">
                            <Card.Body>
                                <h3>My Profile</h3>

                                <p>
                                    View your employee information.
                                </p>

                                <Button className="dashboard-button">
                                    View Profile
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="dashboard-card">
                            <Card.Body>
                                <h3>Account</h3>

                                <p>
                                    Manage your account information.
                                </p>

                                <Button className="dashboard-button">
                                    Account Settings
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </main>
    );
}

export default EmployeeDashboard;