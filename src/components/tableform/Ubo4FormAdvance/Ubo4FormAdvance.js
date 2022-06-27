import React, { useState } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import "./Ubo4FormAdvance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";
/**
 * @author
 * @function Ubo4FormAdvance
 **/

export const Ubo4FormAdvance = (props) => {
	const [pagenumber, setpagenumber] = useState(1);
	const [totalpages, settotalpages] = useState(1);
	const [num, setNum] = useState(2.2);
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
		<Container>
			<Row className='justify-content-center'>
				<Row>
					<Col className='px-2' lg={6}>
						<Row>
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

									<Col xs={3} className='mb-2 px-1'>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
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
					</Col>
					<Col className='px-2' lg={6}>
						<Row>
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
									<Col xs={3} className='mb-2 px-1'>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
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
					</Col>
				</Row>
				<Row>
					<Col className='px-2 mb-2' lg={12} xs={12}>
						<Row>
							<Form.Group
								className=' px-1'
								as={Col}
								xs='3'
								controlId='validationCustom02'>
								<div className=' label-color-simple'>3a PAT. CNTL #</div>
							</Form.Group>
							<Col xs={6} className=' px-1'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>

							<Form.Group
								className=' px-1 '
								as={Col}
								xs='3'
								controlId='validationCustom02'>
								<div className=' label-color-simple'>4 TYPE OF BILL</div>
							</Form.Group>
						</Row>
						<Row className='mt-1'>
							<Form.Group
								className=' px-1 '
								as={Col}
								xs='3'
								controlId='validationCustom02'>
								<div className=' label-color-simple'>b. MED .REC . #</div>
							</Form.Group>

							<Col xs={6} className=' px-1'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>

							<Col xs={3} className=' px-1'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col xs={3}>
						<Row className='px-0'>
							<Form.Group
								className=' tax-No-5'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<div className=' label-color-simple'>5 FED. TAX NO</div>
							</Form.Group>

							<Col xs={12} className=' px-1 mt-1'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
						</Row>
					</Col>
					<Col className='px-2' xs={6}>
						<Row className='text-center px-1'>
							<Form.Group
								className='px-1 mb-1 '
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<div className='label-color'>
									<p style={{ marginBottom: "0.75%" }} className='tag-6'>
										6 STATEMENT COVERS PERIOD
									</p>

									<p className=' tag-6-from-through '>
										<div>FROM</div>
										<div>THROUGH</div>
									</p>
								</div>
							</Form.Group>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
						</Row>
					</Col>
					<Col className='px-0' xs={3}>
						<Form.Group
							className=' tag-7  h-100'
							as={Col}
							xs='12'
							controlId='validationCustom02'>
							<textarea
								class='form-control h-100 '
								id='exampleFormControlTextarea1'></textarea>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col className='px-2' lg={12} xs={12}>
						<Row className='mt-2'>
							<Col lg={4} md={12} xs={12}>
								<Row>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='5'
										controlId='validationCustom02'>
										<div className='label-color-simple'>8 PATIENT NAME</div>
									</Form.Group>

									<Form.Group
										className=' px-1'
										as={Col}
										xs='1'
										controlId='validationCustom02'>
										<div className='label-color-simple'>B</div>
									</Form.Group>
									<Form.Group
										className='mb-2 px-1'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='text' placeholder='C' />
									</Form.Group>
								</Row>
								<Row>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='2'
										controlId='validationCustom02'>
										<div className='label-color-simple'>b</div>
									</Form.Group>
									<Form.Group
										className='mb-2 px-1'
										as={Col}
										xs='10'
										controlId='validationCustom02'>
										<Form.Control required type='text' placeholder='E' />
									</Form.Group>
								</Row>
							</Col>
							<Col lg={8} md={12} xs={12}>
								<Row>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<div className='label-color-simple'>9 PATIENT ADDRESS</div>
									</Form.Group>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='1'
										controlId='validationCustom02'>
										<div className='label-color-simple'>a.</div>
									</Form.Group>

									<Form.Group
										className='mb-2 px-1'
										as={Col}
										xs='7'
										controlId='validationCustom02'>
										<Form.Control required type='text' placeholder='' />
									</Form.Group>
								</Row>
								<Row>
									<Form.Group
										className=' px-1'
										as={Col}
										xs='1'
										controlId='validationCustom02'>
										<div className=' label-color-simple'>B.</div>
									</Form.Group>

									<Form.Group
										className='mb-2 px-1'
										as={Col}
										xs='2'
										controlId='validationCustom02'>
										<Form.Control required type='text' placeholder='' />
									</Form.Group>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='1'
										controlId='validationCustom02'>
										<div className='label-color-simple'>c.</div>
									</Form.Group>
									<Form.Group
										className='mb-2 px-1'
										as={Col}
										xs='2'
										controlId='validationCustom02'>
										<Form.Control required type='text' placeholder='' />
									</Form.Group>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='1'
										controlId='validationCustom02'>
										<div className='label-color-simple'>d.</div>
									</Form.Group>
									<Col xs={2} className=' px-1'>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className=' px-1 '
										as={Col}
										xs='1'
										controlId='validationCustom02'>
										<div className='label-color-simple'>e.</div>
									</Form.Group>
									<Form.Group
										className='mb-2 px-1'
										as={Col}
										xs='2'
										controlId='validationCustom02'>
										<Form.Control required type='text' placeholder='' />
									</Form.Group>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm={3} xs={12}>
						<Row>
							<Form.Group
								className=' px-1 mb-1 '
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<div className='label-color-simple'>10 BIRTH DATE</div>
							</Form.Group>

							<Form.Group
								className=' px-1 mb-1 '
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<div className='label-color-simple'>11 SEX</div>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group
								className='mb-2 px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
							<Form.Group
								className='mb-2 px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<select className='form-control'>
									<option>MALE</option>
									<option>FEMALE</option>
								</select>
							</Form.Group>
						</Row>
					</Col>
					<Col sm={6} xs={12}>
						<Row className='text-center px-1'>
							<Form.Group
								className='px-1 mb-1 '
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<div className='label-color'>
									<p className='tag-6'>ADMISSION</p>

									<p className=' tag-6-from-through '>
										<div>12 DATE.</div>
										<div>13 HR</div>
										<div>14 TYPE</div>
										<div>15 SRC</div>
									</p>
								</div>
							</Form.Group>
							<Form.Group
								className='px-1'
								as={Col}
								xs='3'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
							<Col xs={3} className=' px-1'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>

							<Col xs={3} className=' px-1 '>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={3} className=' px-1 '>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
						</Row>
					</Col>
					<Col sm={3} xs={12}>
						<Row className='text-center'>
							<Form.Group
								className=' px-1 mb-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<div className='label-color-simple'>16 DHR</div>
							</Form.Group>
							<Form.Group
								className=' px-1 mb-1 '
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<div className='label-color-simple'>17 STAT</div>
							</Form.Group>
						</Row>
						<Row>
							<Col xs={6} className=' px-1 '>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={6} className=' px-1'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm={10} xs={12}>
						<Row className='mb-1 text-center px-1'>
							<Form.Group
								className='px-1  mb-1'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<div className='label-color'>
									<p className='tag-6'>CONDITION CODES</p>

									<p className=' tag-6-from-through '>
										<div>12 DATE.</div>
										<div>13 HR</div>
										<div>14 TYPE</div>
										<div>15 SRC</div>
										<div>14 TYPE</div>
										<div>15 SRC</div>
										<div>14 TYPE</div>
										<div>15 SRC</div>
										<div>14 TYPE</div>
										<div>15 SRC</div>
										<div>14 TYPE</div>
									</p>
								</div>
							</Form.Group>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Col xs={1} className=' px-1 condition-codes'>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
						</Row>
					</Col>
					<Col sm={2} xs={12}>
						<Row>
							<Form.Group
								className=' px-1 mb-1 '
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<div className='label-color-simple'>16 DHR</div>
							</Form.Group>
							<Form.Group
								className=' px-1 mb-1 '
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<div className='label-color-simple'>17 STAT</div>
							</Form.Group>
						</Row>

						<Row>
							<Col xs={6} className=' px-1 '>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>

							<Col xs={6} className=' px-1 '>
								<CurrencyInput
									className='input-field-control '
									id='input-example'
									name='input-name'
									placeholder='1000'
									defaultValue={1000}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm={6} xs={12}>
						<Row>
							<Col xs={6}>
								<Row className='text-center'>
									<Form.Group
										className=' mb-1 px-1'
										as={Col}
										xs='12'
										controlId='validationCustom02'>
										<div className=' label-color'>
											<p className='tag-6  '>31 OCCURRENCE</p>

											<p className=' tag-6-from-through '>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</div>
									</Form.Group>
									<Col xs={6} className=' px-1 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='px-1'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Col xs={6} className=' px-1 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='px-1'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
								</Row>
							</Col>
							<Col xs={6}>
								<Row className='text-center'>
									<Form.Group
										className='mb-1  label-color'
										as={Col}
										xs='12'
										controlId='validationCustom02'>
										<div className=' label-color'>
											<p className='tag-6  '>32 OCCURRENCE</p>

											<p className=' tag-6-from-through '>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</div>
									</Form.Group>
									<Col xs={6} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='px-0'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Col xs={6} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='px-0'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col sm={6} xs={12}>
						<Row>
							<Col xs={6}>
								<Row className='text-center px-1'>
									<Form.Group
										className='mb-1 label-color'
										as={Col}
										xs='12'
										controlId='validationCustom02'>
										<div className=' label-color'>
											<p className='tag-6  '>33 OCCURRENCE</p>

											<p className=' tag-6-from-through '>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</div>
									</Form.Group>
									<Col xs={6} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='px-0'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>

									<Col xs={6} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='mb-1 px-0'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
								</Row>
							</Col>
							<Col xs={6}>
								<Row className='text-center px-0'>
									<Form.Group
										className='mb-1 label-color'
										as={Col}
										xs='12'
										controlId='validationCustom02'>
										<div className=' label-color'>
											<p className='tag-6  '>34 OCCURRENCE</p>

											<p className=' tag-6-from-through '>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</div>
									</Form.Group>
									<Col xs={6} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className=' px-0'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Col xs={6} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='px-0'
										as={Col}
										xs='6'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col sm={10} xs={12}>
						<Row>
							<Col xs={6}>
								<Row className='text-center px-1'>
									<Form.Group
										className=' mb-1 label-color'
										as={Col}
										xs='12'
										controlId='validationCustom02'>
										<p className='tag-6  '>31 OCCURRENCE</p>

										<p className=' tag-6-from-through '>
											<div>CODE</div>
											<div>FROM</div>
											<div>THROUGH</div>
										</p>
									</Form.Group>
									<Col xs={4} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className=' mb-1 px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Form.Group
										className=' mb-1 px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Col xs={4} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='mb-1 px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Form.Group
										className='px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
								</Row>
							</Col>
							<Col xs={6}>
								<Row className='text-center px-1'>
									<Form.Group
										className=' mb-1 label-color'
										as={Col}
										xs='12'
										controlId='validationCustom02'>
										<p className='tag-6  '>31 OCCURRENCE</p>

										<p className=' tag-6-from-through '>
											<div>CODE</div>
											<div>FROM</div>
											<div>THROUGH</div>
										</p>
									</Form.Group>
									<Col xs={4} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className=' mb-1 px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Form.Group
										className=' mb-1 px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Col xs={4} className=' px-0 mb-1 '>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='1000'
											defaultValue={1000}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</Col>
									<Form.Group
										className='mb-1 px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
									<Form.Group
										className='px-0'
										as={Col}
										xs='4'
										controlId='validationCustom02'>
										<Form.Control required type='date' />
									</Form.Group>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col className='px-0' sm={2} xs={12}>
						<Form.Group
							className='mb-1 px-1'
							as={Col}
							xs='12'
							controlId='validationCustom02'>
							<Form.Control required type='text' />
						</Form.Group>
						<Form.Group
							className='px-1 '
							as={Col}
							xs='12'
							controlId='validationCustom02'>
							<Form.Control className='h-100' as='textarea' required />
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col className='px-1' sm={5} xs={12}>
						<Form.Group
							className='px-1 h-100'
							as={Col}
							xs='12'
							controlId='validationCustom02'>
							<Form.Control className='h-100' as='textarea' required />
						</Form.Group>
					</Col>
					<Col className='px-1' sm={7} xs={12}>
						<Table
							borderless
							className='table-bottom-margin h-100'
							hover
							size='sm'>
							<tbody>
								<tr className='h-100'>
									<td style={{ width: "5%" }}></td>
									<td className='from-through-columns bg-light' colSpan={2}>
										<Form.Group
											className=' mb-1 label-color'
											as={Col}
											xs='12'
											controlId='validationCustom02'>
											<div className='label-color'>
												<p className='tag-6 '>31 OCCURRENCE</p>

												<p className=' tag-6-from-through '>
													<div>CODE</div>
													<div>DATE</div>
												</p>
											</div>
										</Form.Group>
									</td>
								</tr>
								<tr className='h-100'>
									<td>a</td>
									<td>
										<Col className=' px-0 mb-1 '>
											<CurrencyInput
												className='input-field-control '
												id='input-example'
												name='input-name'
												placeholder='1000'
												defaultValue={1000}
												allowDecimals={true}
												decimalsLimit={2}
												disableGroupSeparators={true}
												onValueChange={(value, name) =>
													console.log(value, name)
												}
											/>
										</Col>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='date' />
										</Form.Group>
									</td>
								</tr>
								<tr className='h-100'>
									<td style={{ width: "5%" }}>b</td>
									<td>
										<Col className=' px-0 mb-1 '>
											<CurrencyInput
												className='input-field-control '
												id='input-example'
												name='input-name'
												placeholder='1000'
												defaultValue={1000}
												allowDecimals={true}
												decimalsLimit={2}
												disableGroupSeparators={true}
												onValueChange={(value, name) =>
													console.log(value, name)
												}
											/>
										</Col>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='date' />
										</Form.Group>
									</td>
								</tr>
								<tr className='h-100'>
									<td style={{ width: "5%" }}>c</td>
									<td>
										<Col className=' px-0 mb-1 '>
											<CurrencyInput
												className='input-field-control '
												id='input-example'
												name='input-name'
												placeholder='1000'
												defaultValue={1000}
												allowDecimals={true}
												decimalsLimit={2}
												disableGroupSeparators={true}
												onValueChange={(value, name) =>
													console.log(value, name)
												}
											/>
										</Col>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='date' />
										</Form.Group>
									</td>
								</tr>
								<tr className='h-100'>
									<td style={{ width: "5%" }}>d</td>
									<td>
										<Col className=' px-0 mb-1 '>
											<CurrencyInput
												className='input-field-control '
												id='input-example'
												name='input-name'
												placeholder='1000'
												defaultValue={1000}
												allowDecimals={true}
												decimalsLimit={2}
												disableGroupSeparators={true}
												onValueChange={(value, name) =>
													console.log(value, name)
												}
											/>
										</Col>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='date' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table responsive borderless size='sm' hover>
							<thead>
								<tr className='main-table-design label-color'>
									<th>#</th>
									<th>42 REV CD.</th>
									<th className='custom-width-18'>43 DESCRIPTION</th>
									<th className='custom-width'>44 HCPCS/RATE/HPPS CODE</th>
									<th>45 SERV. DATE</th>
									<th>46 SERV. UNITS</th>
									<th className='custom-width-13'>47 TOTAL CHARGES</th>
									<th className='custom-width'>48 NON-COVERED CHARGES</th>
									<th> 49 </th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{tableData?.map((data, index) => {
									index = index + 1;

									return (
										<tr>
											<td className='px-0'>{index}</td>
											<td>
												<CurrencyInput
													className='input-field-control '
													id='input-example'
													name='input-name'
													placeholder='100'
													defaultValue={100}
													allowDecimals={true}
													decimalsLimit={2}
													disableGroupSeparators={true}
													onValueChange={(value, name) =>
														console.log(value, name)
													}
												/>
											</td>
											<td className='px-0'>
												<Form.Group controlId='validationCustom02'>
													<Form.Control
														value={data.description}
														required
														rows='1'
														as='textarea'
													/>
												</Form.Group>
											</td>
											<td className='px-0'>
												<CurrencyInput
													className='input-field-control '
													id='input-example'
													name='input-name'
													placeholder='100'
													defaultValue={100}
													allowDecimals={true}
													decimalsLimit={2}
													disableGroupSeparators={true}
													onValueChange={(value, name) =>
														console.log(value, name)
													}
												/>
											</td>
											<td className='px-0'>
												<Form.Group controlId='validationCustom02'>
													<Form.Control
														value={data.serv}
														required
														type='date'
													/>
												</Form.Group>
											</td>
											<td className='px-0'>
												<CurrencyInput
													className='input-field-control '
													id='input-example'
													name='input-name'
													placeholder='100'
													defaultValue={index}
													allowDecimals={true}
													decimalsLimit={2}
													disableGroupSeparators={true}
													onValueChange={(value, name) =>
														console.log(value, name)
													}
												/>
											</td>
											<td className='px-0'>
												<CurrencyInput
													className='input-field-control '
													id='input-example'
													name='input-name'
													placeholder='100'
													defaultValue={100}
													allowDecimals={true}
													decimalsLimit={2}
													disableGroupSeparators={true}
													onValueChange={(value, name) =>
														console.log(value, name)
													}
													prefix='$'
												/>
											</td>
											<td className='px-0'>
												<CurrencyInput
													className='input-field-control '
													id='input-example'
													name='input-name'
													placeholder='100'
													defaultValue={100}
													allowDecimals={true}
													decimalsLimit={2}
													disableGroupSeparators={true}
													onValueChange={(value, name) =>
														console.log(value, name)
													}
													prefix='$'
												/>
											</td>
											<td className='px-0'>
												<Form.Group controlId='validationCustom02'>
													<Form.Control
														value={data.empty}
														required
														type='text'
													/>
												</Form.Group>
											</td>

											<td className='text-center px-0'>
												<FontAwesomeIcon
													onClick={() => deleteRow(index)}
													style={{ color: "red", fontSize: "13px" }}
													icon={faXmark}
												/>
											</td>
										</tr>
									);
								})}
								<tr className='h-100'>
									<td></td>
									<td></td>
									<td colSpan={2}>
										<div
											style={{ fontSize: "15px" }}
											className='fw-bold d-flex justify-content-between'>
											<div className='letter-spacing-pageof'>
												PAGE{" "}
												<u className=' text-danger fw-bold'>{pagenumber}</u> of{" "}
												<u className=' text-danger fw-bold'>{totalpages}</u>{" "}
											</div>
											<div>
												<label style={{ fontSize: "18px" }} className='fw-bold'>
													CREATION DATE
												</label>
											</div>
										</div>
									</td>
									<td>
										<input type='text' className='input-field-general' />
									</td>
									<td>
										<label style={{ fontSize: "18px" }} className='fw-bold'>
											TOTALS
										</label>
									</td>
									<td>
										<label
											style={{ fontSize: "18px" }}
											className=' text-danger fw-bold'>
											550. 00
										</label>
									</td>
									<td>
										<label style={{ fontSize: "18px" }} className='  fw-bold'>
											00. 00
										</label>
									</td>
									<td></td>
									<td>
										<FontAwesomeIcon
											onClick={() => addRow()}
											style={{ color: "blue", fontSize: "20px" }}
											icon={faPlusCircle}
										/>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col sm={5} xs={12}>
						<Table borderless responsive size='sm'>
							<thead className='second-general-tables label-color'>
								<tr>
									<th>#</th>
									<th className=' '>50 PAYER NAME</th>
									<th className=' '>51 HEALTH PLAN ID</th>
									<th className=''>52 REL INFO</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>A</td>
									<td>
										<Form.Group controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td>
										<Form.Group controlId='validationCustom02'>
											<select className='form-control'>
												<option>YES</option>
												<option>No</option>
											</select>
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>B</td>
									<td>
										<Form.Group controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td>
										<Form.Group controlId='validationCustom02'>
											<select className='form-control'>
												<option>YES</option>
												<option>No</option>
											</select>
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>C</td>
									<td>
										<Form.Group controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td>
										<Form.Group controlId='validationCustom02'>
											<select className='form-control'>
												<option>YES</option>
												<option>No</option>
											</select>
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col sm={7} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<thead>
								<tr className='second-general-tables label-color'>
									<th className=''>53 ASG BEN.</th>
									<th className=''>54 PRIOR PAYMENTS</th>
									<th className=''>55 EST.AMOUNT DUE</th>
									<th className='custom-width-5'>56 NPI</th>
									<th className=''>22222</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<select className='form-control'>
												<option>YES</option>
												<option>No</option>
											</select>
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td rowSpan={3}> 57 OTHER PRV ID</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>A</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<select className='form-control'>
												<option>YES</option>
												<option>No</option>
											</select>
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>

									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>B</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<select className='form-control'>
												<option>YES</option>
												<option>No</option>
											</select>
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
											prefix='$'
										/>
									</td>

									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>C</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>

				<Row>
					<Col className='grid-column-pr' md={8} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<thead>
								<tr className='second-general-tables label-color'>
									<th className=''>58 INSURED’S NAME</th>
									<th>59 P. REL</th>
									<th>60 INSURED ’S UNIQUE ID</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='grid-column-pl' md={4} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<thead>
								<tr className='second-general-tables label-color'>
									<th>61 GROUP NAME</th>

									<th>62 INSURANCE GROUP NO</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>

									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>

									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>

									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col sm={4} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<thead>
								<tr className='second-general-tables label-color'>
									<th>63 TREATMENT AUTHORIZATION CODES</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col sm={4} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<thead>
								<tr className='second-general-tables label-color'>
									<th>64 DOCUMENT CONTROL NUMBER </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>

								<tr>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>
								<tr>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col sm={4} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<thead>
								<tr className='second-general-tables label-color'>
									<th>65 EMPLOYER NAME</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col sm={7} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<tbody>
								<tr>
									<td className='  '>
										<Form.Group
											className=' px-1 mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>66 DX</div>
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col sm={5} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<tbody>
								<tr>
									<td className=' fw-bold'>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col className='' sm={12} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<tbody>
								<tr>
									<td className='custom-width-13'>
										<Form.Group
											className=' px-1 mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>69 ADMIT DX</div>
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
									<td className='custom-width-18'>
										<Form.Group
											className='  mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>70 PATIENT REASON DX</div>
										</Form.Group>
									</td>
									<td>
										<Form.Group className='' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td className='custom-width-13'>
										<Form.Group
											className='  mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>71 PPS CODE</div>
										</Form.Group>
									</td>

									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md={12} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<tbody>
								<tr>
									<td className=''>
										<Form.Group
											className='  mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>71 PPS CODE</div>
										</Form.Group>
									</td>
									<td>
										<CurrencyInput
											className='input-field-control '
											id='input-example'
											name='input-name'
											placeholder='100'
											defaultValue={100342342}
											allowDecimals={true}
											decimalsLimit={2}
											disableGroupSeparators={true}
											onValueChange={(value, name) => console.log(value, name)}
										/>
									</td>
									<td>
										<Form.Group className='' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='' controlId='validationCustom02'>
											<Form.Control placeholder='73' required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col sm={3} xs={6}>
						<Row className='text-center px-1'>
							<Form.Group
								className='px-1 mb-1 label-color'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<p className='tag-6'>74 PRINCIPAL PROCEDURE</p>

								<p className=' tag-6-from-through '>
									<div>CODE</div>
									<div>DATE</div>
								</p>
							</Form.Group>
							<Col xs={6} className='px-1'>
								<CurrencyInput
									className='input-field-control mb-1 '
									id='input-example'
									name='input-name'
									placeholder='100'
									defaultValue={100342342}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>

							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
							<Form.Group
								className='px-1 mb-1 label-color'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<p className='tag-6'>C OTHER PROCEDURE</p>

								<p className=' tag-6-from-through '>
									<div>CODE</div>
									<div>DATE</div>
								</p>
							</Form.Group>
							<Col xs={6} className='px-1'>
								<CurrencyInput
									className='input-field-control mb-1 '
									id='input-example'
									name='input-name'
									placeholder='100'
									defaultValue={100342342}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
						</Row>
					</Col>
					<Col sm={3} xs={6}>
						<Row className='text-center px-1'>
							<Form.Group
								className='px-1 mb-1 label-color'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<p className='tag-6'>A OTHER PROCEDURE</p>

								<p className=' tag-6-from-through '>
									<div>CODE</div>
									<div>DATE</div>
								</p>
							</Form.Group>
							<Col xs={6} className='px-1'>
								<CurrencyInput
									className='input-field-control mb-1 '
									id='input-example'
									name='input-name'
									placeholder='100'
									defaultValue={100342342}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
							<Form.Group
								className='px-1 mb-1 label-color'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<p className='tag-6'>D. OTHER PROCEDURE</p>

								<p className=' tag-6-from-through '>
									<div>CODE</div>
									<div>DATE</div>
								</p>
							</Form.Group>
							<Col xs={6} className='px-1'>
								<CurrencyInput
									className='input-field-control mb-1 '
									id='input-example'
									name='input-name'
									placeholder='100'
									defaultValue={100342342}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
						</Row>
					</Col>
					<Col sm={3} xs={6}>
						<Row className='text-center px-1'>
							<Form.Group
								className='px-1 mb-1 label-color'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<p className='tag-6'>B. OTHER PROCEDURE</p>

								<p className=' tag-6-from-through '>
									<div>CODE</div>
									<div>DATE</div>
								</p>
							</Form.Group>
							<Col xs={6} className='px-1'>
								<CurrencyInput
									className='input-field-control mb-1 '
									id='input-example'
									name='input-name'
									placeholder='100'
									defaultValue={100342342}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
							<Form.Group
								className='px-1 mb-1 label-color'
								as={Col}
								xs='12'
								controlId='validationCustom02'>
								<p className='tag-6'>E. OTHER PROCEDURE</p>

								<p className=' tag-6-from-through '>
									<div>CODE</div>
									<div>DATE</div>
								</p>
							</Form.Group>
							<Col xs={6} className='px-1'>
								<CurrencyInput
									className='input-field-control mb-1 '
									id='input-example'
									name='input-name'
									placeholder='100'
									defaultValue={100342342}
									allowDecimals={true}
									decimalsLimit={2}
									disableGroupSeparators={true}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</Col>
							<Form.Group
								className='px-1'
								as={Col}
								xs='6'
								controlId='validationCustom02'>
								<Form.Control required type='date' />
							</Form.Group>
						</Row>
					</Col>
					<Col sm={3} xs={6}>
						<Form.Group
							className='px-1 h-100'
							as={Col}
							xs='12'
							controlId='validationCustom02'>
							<Form.Control className='h-100' required as='textarea' />
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm={6} xm={12}>
						<Row>
							<Col className='px-1' sm={12} xm={12}>
								<Table className='table-bottom-margin' borderless size='sm'>
									<tbody>
										<tr>
											<td className='w-25'>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>76 ATTENDING</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>QUAL</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
								<Table
									className='table-bottom-margin'
									borderless
									hover
									size='sm'>
									<tbody>
										<tr>
											<td className=''>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>FIRST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td className=''>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>LAST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col className='px-1' sm={12} xm={12}>
								<Table className='table-bottom-margin' borderless size='sm'>
									<tbody>
										<tr>
											<td className='w-25'>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>76 ATTENDING</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>QUAL</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
								<Table
									className='table-bottom-margin'
									borderless
									hover
									size='sm'>
									<tbody>
										<tr>
											<td className=''>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>FIRST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td className=''>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>LAST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group className='' controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Col>
					<Col sm={6} xm={12}>
						<Row>
							<Col className='px-1' sm={12} xm={12}>
								<Table className='table-bottom-margin' borderless size='sm'>
									<tbody>
										<tr>
											<td className='w-25'>
												<Form.Group
													className='  mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>76 ATTENDING</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>QUAL</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
								<Table
									className='table-bottom-margin'
									borderless
									hover
									size='sm'>
									<tbody>
										<tr>
											<td className=''>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>FIRST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td className=''>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>LAST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col className='px-1' sm={12} xm={12}>
								<Table className='table-bottom-margin' borderless size='sm'>
									<tbody>
										<tr>
											<td className='w-25'>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>76 ATTENDING</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>QUAL</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
								<Table
									className='table-bottom-margin'
									borderless
									hover
									size='sm'>
									<tbody>
										<tr>
											<td className=''>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>FIRST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
											<td className=''>
												<Form.Group
													className=' px-1 mb-1 label-color-simple'
													controlId='validationCustom02'>
													<div>LAST</div>
												</Form.Group>
											</td>
											<td>
												<Form.Group
													className='px-1'
													controlId='validationCustom02'>
													<Form.Control required type='text' />
												</Form.Group>
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className='px-1' md={6} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<tbody>
								<tr>
									<td>
										<Form.Group
											className=' px-1 mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>REMARK</div>
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='px-1' md={6} xs={12}>
						<Table className='table-bottom-margin' borderless size='sm'>
							<tbody>
								<tr>
									<td className='custom-width-10'>
										<Form.Group
											className=' px-1 mb-1 label-color-simple'
											controlId='validationCustom02'>
											<div>18CC a</div>
										</Form.Group>
									</td>
									<td className=''>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>

								<tr>
									<td>b</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>c</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
								<tr>
									<td>d</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
									<td>
										<Form.Group className='px-1' controlId='validationCustom02'>
											<Form.Control required type='text' />
										</Form.Group>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Row>
		</Container>
	);
};
