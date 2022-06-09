import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	InputGroup,
	Alert,
	Table,
} from "react-bootstrap";
import "./Ubo4AdvnceForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * @author
 * @function Ubo4AdvnceForm
 **/

export const Ubo4AdvnceForm = (props) => {
	const [pagenumber, setpagenumber] = useState(1);
	const [totalpages, settotalpages] = useState(1);
	const [tableData, settableData] = useState([
		{
			rev: "",
			description: "1",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "2",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "3",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "4",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "5",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
		{
			rev: "rev",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		},
	]);
	const addRow = () => {
		tableData.push({
			rev: "",
			description: "",
			hpps: "",
			serv: "",
			units: "",
			charges: "",
			nonCovered: "",
			empty: "",
		});
		settableData([...tableData]);
	};
	const deleteRow = (id) => {
		let idx = id - 1;
		for (var i = 0; i < tableData.length; i++) {
			if (i === idx) {
				tableData.splice(i, 1);
				settableData([...tableData]);
				break;
			}
		}
	};
	return (
		<Container fluid className='mx-auto px-0'>
			<Row className='justify-content-center'>
				<Row>
					<Col className='px-2' lg={6}>
						<Form>
							<Row className='mb-1'>
								<Form.Group
									className='px-1'
									condition-codes
									as={Col}
									md='12'
									controlId='validationCustom01'>
									<Form.Control
										required
										type='text'
										placeholder='1'
										className='mb-2'
									/>
									<Form.Control
										required
										type='text'
										placeholder='B'
										className='mb-2'
									/>

									<Row className='px-2'>
										<Form.Group
											className='mb-2 px-1'
											as={Col}
											xs='6'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='C' />
										</Form.Group>
										<Form.Group
											className='px-1'
											as={Col}
											xs='3'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='D' />
										</Form.Group>
										<Form.Group
											className='px-1'
											as={Col}
											xs='3'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='E' />
										</Form.Group>
									</Row>
									<Row className='px-2'>
										<Form.Group
											className='mb-2 px-1'
											as={Col}
											xs='5'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='F' />
										</Form.Group>
										<Form.Group
											className='px-1'
											as={Col}
											xs='4'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='G' />
										</Form.Group>
										<Form.Group
											as={Col}
											className='px-1'
											xs='3'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='H' />
										</Form.Group>
									</Row>
								</Form.Group>
							</Row>
						</Form>
					</Col>
					<Col className='px-2' lg={6}>
						<Form>
							<Row className='mb-3 '>
								<Form.Group
									className='px-1'
									as={Col}
									md='12'
									controlId='validationCustom01'>
									<Form.Control
										required
										type='text'
										placeholder='2'
										className='mb-2'
									/>
									<Form.Control
										required
										type='text'
										placeholder='B'
										className='mb-2'
									/>

									<Row className='px-2'>
										<Form.Group
											className='mb-2 px-1'
											as={Col}
											xs='6'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='C' />
										</Form.Group>
										<Form.Group
											className='px-1'
											as={Col}
											xs='3'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='D' />
										</Form.Group>
										<Form.Group
											className='px-1'
											as={Col}
											xs='3'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='E' />
										</Form.Group>
									</Row>
									<Row className='px-2'>
										<Form.Group
											className='mb-2 px-1'
											as={Col}
											xs='3'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='F' />
										</Form.Group>
										<Form.Group
											className='px-1'
											as={Col}
											xs='9'
											controlId='validationCustom02'>
											<Form.Control required type='text' placeholder='G' />
										</Form.Group>
									</Row>
								</Form.Group>
							</Row>
						</Form>
					</Col>
				</Row>
			</Row>
		</Container>
	);
};
