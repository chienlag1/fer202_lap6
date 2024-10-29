import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';


function StudentDetails() {

    const [student, setStudent] = useState();

    const studentId = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        const getStudentDetails = async () => {
            try {
                const res = await fetch(`https://student-api-nestjs.onrender.com/students/${studentId.id}`, {
                    method: 'GET'
                });
                const dataRes = await res.json();
                setStudent(dataRes.data);
            } catch (error) {
                console.log(error);
            }
        };

        getStudentDetails();
    }, []);


    console.log('student: ', student);

    return (
        <Container>
            <Row className='text-center'>
                <h1>Student Details</h1>
            </Row>
            <Row className='mt-5 justify-content-center'>
                {
                    student && (
                        <>
                            <Col>
                                <p>Student Name:</p>
                                <p>Student Code:</p>
                                <p>Active:</p>
                            </Col>
                            <Col>
                                <p>{student.name}</p>
                                <p>{student.studentCode}</p>
                                <p>{student.isActive === true ? 'true' : 'false'}</p>
                            </Col>
                        </>
                    )
                }
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' onClick={() => navigate('/')}>Back</Button>
                </div>
            </Row>

        </Container>
    )
}

export default StudentDetails;