import React from "react";
import { Container, Row, Col, Card, Table, Form } from "react-bootstrap";
import { DAYLIST, MONTHLIST, YEARLIST } from "../constant/AppConstants";
import "./CmsClaimsForm.css";
import { CmsDisclaimer } from "./cmsdisclaimer/CmsDisclaimer";

/**
 * @author
 * @function CmsClaimsForm
 **/

export const CmsClaimsForm = (props) => {
	return (
		<Container fluid>
			<div className='mx-3 py-5'>
				<Row>
					<h1>HEALTH INSURANCE CLAIM FORM</h1>
					<h6>APPROVED BY NATIONAL UNIFORM CLAIM COMMITTEE (NUCC) 02/12 </h6>
				</Row>
				<Row>
					<Col>
						<div className=' d-flex justify-content-between'>
							<div className='d-flex'>
								<Table className='mb-0 mx-2' bordered size='sm'>
									<tbody>
										<tr>
											<th>123</th>
											<th>123</th>
											<th>123</th>
										</tr>
									</tbody>
								</Table>
								PICA
							</div>
							<div className='d-flex'>
								PICA
								<Table className='mb-0 mx-2' bordered size='sm'>
									<tbody>
										<tr>
											<th>123</th>
											<th>123</th>
											<th>123</th>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
					</Col>
				</Row>
				<hr />
				<Row className=''>
					<Col sm={8} xs={12}>
						<Card className='fw-bold'>
							<Card.Body className='px-sm-3 py-2'>
								<Form>
									<Row>
										1.
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes '
											as={Col}
											controlId='formGroupEmail'>
											<Form.Label className='form-label-design'>
												MEDICARE
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(Medicaid#)'
												/>
											</Form.Group>
										</Form.Group>
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes'
											as={Col}
											controlId='formGroupEmail'>
											<Form.Label className='  form-label-design'>
												MEDICAID
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(Medicaid#)'
												/>
											</Form.Group>
										</Form.Group>
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes'
											as={Col}
											controlId='formGroupEmail'>
											<Form.Label className='   form-label-design'>
												TRICARE
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(ID#/DoD#)'
												/>
											</Form.Group>
										</Form.Group>
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes'
											as={Col}
											controlId='formGroupEmail'>
											<Form.Label className='  form-label-design'>
												CHAMPVA
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(MemberID#)'
												/>
											</Form.Group>
										</Form.Group>
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes'
											as={Col}
											sm={3}
											controlId='formGroupEmail'>
											<Form.Label className='  form-label-design'>
												GROUP HEALTH PLAN
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(ID#)'
												/>
											</Form.Group>
										</Form.Group>
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes'
											as={Col}
											controlId='formGroupEmail'>
											<Form.Label className='  form-label-design'>
												FECA BLK LUNG
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(ID#)'
												/>
											</Form.Group>
										</Form.Group>
										<Form.Group
											className='px-1 general-fontSize-label-checkboxes'
											as={Col}
											controlId='formGroupEmail'>
											<Form.Label className='  form-label-design'>
												OTHER
											</Form.Label>
											<Form.Group id='formGridCheckbox'>
												<Form.Check
													className='font-italic'
													type='checkbox'
													label='(ID#)'
												/>
											</Form.Group>
										</Form.Group>
									</Row>
								</Form>
							</Card.Body>
						</Card>
					</Col>

					<Col sm={4} xs={12}>
						<Form>
							<Form.Group className='' controlId='formGroupEmail'>
								<Form.Label>
									1a. INSURED"S I.D NUMBER{" "}
									<span style={{ fontSize: "12px" }}>
										(for program in item 1)
									</span>
								</Form.Label>
								<Form.Control
									className='input-field-control'
									type='email'
									placeholder='1243234'
								/>
							</Form.Group>
						</Form>
					</Col>
				</Row>
				<hr />
				<Row className='mt-2'>
					<Col sm={4}>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label>
								2. PATIENT'S NAME{" "}
								<span style={{ fontSize: "12px" }}>
									(Last Name, First Name, Middle Initial)
								</span>
							</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
						</Form.Group>
					</Col>
					<Col sm={4}>
						<Row>
							<Col sm={6} xs={12} className='px-1 pt-1'>
								<Form.Group className='px-1' controlId='formGroupEmail'>
									<Form.Label className='form-label-design '>
										3 .PATIENT'S BIRTH DATE
									</Form.Label>
									<div className='d-flex'>
										<Form.Select
											style={{ fontSize: "14px" }}
											aria-label='Default select example'>
											<option selected disabled>
												DD
											</option>
											{DAYLIST.map((item, i) => {
												return <option>{item}</option>;
											})}
										</Form.Select>
										<Form.Select
											style={{ fontSize: "14px" }}
											aria-label='Default select example'>
											<option selected disabled>
												MM
											</option>
											{MONTHLIST.map((item, i) => {
												return <option>{item}</option>;
											})}
										</Form.Select>
										<Form.Select
											style={{ fontSize: "14px" }}
											aria-label='Default select example'>
											<option selected disabled>
												YY
											</option>
											{YEARLIST.map((item, i) => {
												return <option>{item}</option>;
											})}
										</Form.Select>
									</div>
								</Form.Group>
							</Col>
							<Col sm={6} xs={12} className='px-1 pt-1'>
								<Form.Group className='px-1' controlId='formGroupEmail'>
									<Form.Label className='form-label-design'>SEX</Form.Label>
									<Form.Select
										style={{ fontSize: "13px" }}
										aria-label='Default select example'>
										<option>MALE</option>
										<option>FEMALE</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
					</Col>
					<Col sm={4}>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label>
								4. INSURED'S NAME{" "}
								<span style={{ fontSize: "12px" }}>
									(Last Name, First Name, Middle Initial)
								</span>
							</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row className='mt-2'>
					<Col sm={4}>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label>
								5. PATIENT'S ADDRESS
								<span style={{ fontSize: "12px" }}> (No.S treet)</span>
							</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
						</Form.Group>
					</Col>
					<Col sm={4}>
						<Row className='pt-1'>
							<Form.Group className='px-1' as={Col} controlId='formGroupEmail'>
								<Form.Label className='form-label-design  mb-4'>
									6. PATIENT RELATIONSHIP TO INSURED
								</Form.Label>
								<Row>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Check
											className='font-italic'
											type='checkbox'
											label='Self'
										/>
									</Form.Group>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Check
											className='font-italic'
											type='checkbox'
											label='Spous'
										/>
									</Form.Group>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Check
											className='font-italic'
											type='checkbox'
											label='Child'
										/>
									</Form.Group>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Check
											className='font-italic'
											type='checkbox'
											label='Other'
										/>
									</Form.Group>
								</Row>
							</Form.Group>
						</Row>
					</Col>
					<Col sm={4}>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label>
								7. INSURED'S ADDRESS
								<span style={{ fontSize: "12px" }}>(No., Street)</span>
							</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={4} xs={12}>
						<Row>
							<Col sm={8}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>CITY</Form.Label>
									<Form.Control type='email' placeholder='CITY' />
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>STATE</Form.Label>
									<Form.Control type='email' placeholder='STATE' />
								</Form.Group>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col sm={6}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>ZIP CODE</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										TELEPHONE{" "}
										<span style={{ fontSize: "10px" }}>
											(Include area code)
										</span>
									</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>
						</Row>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label>8. RESERVED FOR NUCC USE</Form.Label>
							<Form.Control as='textarea' rows={5} placeholder='Enter email' />
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Row>
							<Col sm={8}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>CITY</Form.Label>
									<Form.Control type='email' placeholder='CITY' />
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>STATE</Form.Label>
									<Form.Control type='email' placeholder='STATE' />
								</Form.Group>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col sm={6}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>ZIP CODE</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										TELEPHONE{" "}
										<span style={{ fontSize: "10px" }}>
											(Include area code)
										</span>
									</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={4} xs={12}>
						<Row>
							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										9. OTHER INSURED???S NAME
										<span style={{ fontSize: "11px" }}>
											(Last Name, First Name, Middle Initial)
										</span>
									</Form.Label>
									<Form.Control type='text' placeholder='123456' />
								</Form.Group>
							</Col>

							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										a. OTHER INSURED???S POLICY OR GROUP NUMBER
									</Form.Label>
									<Form.Control type='text' placeholder='123456' />
								</Form.Group>
							</Col>
							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>b. RESERVED FOR NUCC USE</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>

							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>c. RESERVED FOR NUCC USE</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>
						</Row>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>10. IS PATIENT???S CONDITION RELATED TO:</Form.Label>
							<Form.Control type='number' placeholder='123456' />
						</Form.Group>

						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label className='mb-3'>
								a. EMPLOYMENT? (Current or Previous)
							</Form.Label>
							<Row>
								<Form.Group as={Col} id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='YES'
									/>
								</Form.Group>
								<Form.Group as={Col} id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='NO'
									/>
								</Form.Group>
							</Row>
						</Form.Group>
						<Row className='mt-2'>
							<Form.Group className='px-1' as={Col} controlId='formGroupEmail'>
								<Form.Label className='form-label-design  '>
									b. AUTO ACCIDENT?
								</Form.Label>
								<Row>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Check
											className='font-italic'
											type='checkbox'
											label='YES'
										/>
									</Form.Group>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Check
											className='font-italic'
											type='checkbox'
											label='NO'
										/>
									</Form.Group>
								</Row>
							</Form.Group>
							<Form.Group className='px-1' as={Col} controlId='formGroupEmail'>
								<Form.Label className='form-label-design mb-1 '>
									PLACE (State)
								</Form.Label>
								<Row>
									<Form.Group as={Col} id='formGridCheckbox'>
										<Form.Control type='text' placeholder='abc' />
									</Form.Group>
								</Row>
							</Form.Group>
						</Row>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label className='mb-3'>c. OTHER ACCIDENT?</Form.Label>
							<Row>
								<Form.Group as={Col} id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='YES'
									/>
								</Form.Group>
								<Form.Group as={Col} id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='NO'
									/>
								</Form.Group>
							</Row>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Row>
							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										11. INSURED'S POLICY GROUP OR FECA NUMBER
									</Form.Label>
									<Form.Control type='text' placeholder='123456' />
								</Form.Group>
							</Col>

							<Col xs={12}>
								<Row className='pt-1'>
									<Form.Group as={Col} controlId='formGroupEmail'>
										<Form.Label className=' '>
											a. INSURED'S BIRTH DATE
										</Form.Label>
										<div className='d-flex'>
											<Form.Select
												style={{ fontSize: "14px" }}
												aria-label='Default select example'>
												<option selected disabled>
													DD
												</option>
												{DAYLIST.map((item, i) => {
													return <option>{item}</option>;
												})}
											</Form.Select>
											<Form.Select
												style={{ fontSize: "14px" }}
												aria-label='Default select example'>
												<option selected disabled>
													MM
												</option>
												{MONTHLIST.map((item, i) => {
													return <option>{item}</option>;
												})}
											</Form.Select>
											<Form.Select
												style={{ fontSize: "14px" }}
												aria-label='Default select example'>
												<option selected disabled>
													YY
												</option>
												{YEARLIST.map((item, i) => {
													return <option>{item}</option>;
												})}
											</Form.Select>
										</div>
									</Form.Group>
									<Form.Group
										className='px-1'
										as={Col}
										controlId='formGroupEmail'>
										<Form.Label className=''>SEX</Form.Label>
										<Form.Select
											style={{ fontSize: "14px" }}
											aria-label='Default select example'>
											<option selected disabled>
												MALE
											</option>
											<option selected disabled>
												FEMALE
											</option>
										</Form.Select>
									</Form.Group>
								</Row>
							</Col>
							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										b. OTHER CLAIM ID{" "}
										<span style={{ fontSize: "11px" }}>
											(Designated by NUCC)
										</span>{" "}
									</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>

							<Col xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label>
										d. INSURANCE PLAN NAME OR PROGRAM NAME
									</Form.Label>
									<Form.Control type='number' placeholder='123456' />
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>d. INSURANCE PLAN NAME OR PROGRAM NAME</Form.Label>
							<Form.Control type='text' placeholder='123456' />
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								10a. CLAIM CODES{" "}
								<span style={{ fontSize: "11px" }}>(Designated by NUCC)</span>{" "}
							</Form.Label>
							<Form.Control type='text' placeholder='123456' />
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label className='mb-4'>
								d. IS THERE ANOTHER HEALTH BENEFIT PLAN?{" "}
							</Form.Label>
							<Row>
								<Form.Group as={Col} id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='YES'
									/>
								</Form.Group>
								<Form.Group as={Col} id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='NO'
									/>
								</Form.Group>
								<Form.Group as={Col} sm={6} id='formGridCheckbox'>
									<span style={{ fontSize: "12px" }}>
										<b>if yes!</b> complete item 9, 9a, and 9d
									</span>
								</Form.Group>
							</Row>
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={8} xs={12}>
						<div className='text-center'>
							<h6 className='fw-bolder'>
								READ BACK OF FORM BEFORE COMPLETING & SIGNING THE FORM
							</h6>
						</div>
						<p className='fw-bold'>
							PATIENT'S OR AUTHORIZED PERSON'S SIGNATURE I authorixe the release
							of any medical or other information necssary to process this
							claim. I also request payment of government benefits either to
							myself or the party who accepts assginment below.
						</p>
						<Row>
							<Col>
								<h6>SIGNED: </h6>{" "}
								<Form.Control type='text' placeholder='123456' />
							</Col>
							<Col>
								<Col>
									<h6>DATED: </h6>{" "}
									<Form.Control type='date' placeholder='123456' />
								</Col>
							</Col>
						</Row>
					</Col>
					<Col sm={4} xs={12}>
						<p className='fw-bold'>
							INSURED'S OR AUTHORIZED PERSON'S SIGNATURE I authorize payment of
							medical benefits to the undersigned physician supplier for
							services described below.
						</p>
						<Row>
							<Col>
								<h6 className='mt-1'>SIGNED: </h6>{" "}
								<Form.Control type='text' placeholder='123456' />
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								14. CURRENT ILLNESS, INJURY, or PREGNANCY (LMP)
							</Form.Label>
							<div className='d-flex'>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										DD
									</option>
									{DAYLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										MM
									</option>
									{MONTHLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										YY
									</option>
									{YEARLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
							</div>
							<div className='d-flex mt-4'>
								<Form.Label className='w-25 pt-1'>Qual:</Form.Label>
								<Form.Control
									className='w-100'
									type='text'
									placeholder='QUAL'
								/>
							</div>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>15. OTHER DATE</Form.Label>
							<div className='d-flex'>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										DD
									</option>
									{DAYLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										MM
									</option>
									{MONTHLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										YY
									</option>
									{YEARLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
							</div>
							<div className='d-flex mt-4'>
								<Form.Label className='w-25 pt-1'>Qual:</Form.Label>
								<Form.Control
									className='w-100'
									type='text'
									placeholder='QUAL'
								/>
							</div>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								16. DATES PATIENT UNABLE TO WORK IN CURRENT OCCUPATION
							</Form.Label>
							<div className='d-flex mb-1'>
								<Form.Label className='w-75 pt-1'>FROM :</Form.Label>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										DD
									</option>
									{DAYLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										MM
									</option>
									{MONTHLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										YY
									</option>
									{YEARLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
							</div>
							<div className='d-flex'>
								<Form.Label className='w-75 pt-1'>To :</Form.Label>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										DD
									</option>
									{DAYLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										MM
									</option>
									{MONTHLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										YY
									</option>
									{YEARLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
							</div>
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								17. NAME OF REFERRING PROVIDER / OTHER SOURCE
							</Form.Label>

							<Form.Control
								className='w-100 mt-2'
								type='text'
								placeholder='QUAL'
							/>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<div className='d-flex'>
								<Form.Label className='w-25 pt-1'>17a:</Form.Label>
								<Form.Control className='w-25' type='text' placeholder='QUAL' />
								<Form.Control
									className='w-100'
									type='text'
									placeholder='QUAL'
								/>
							</div>
							<div className='d-flex mt-2'>
								<Form.Label className='w-25 pt-1'>17b</Form.Label>
								<Form.Label className='w-25 pt-1'>NPI</Form.Label>
								<Form.Control
									className='w-100'
									type='text'
									placeholder='QUAL'
								/>
							</div>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								18. HOSPITALIZATION DATES RELATED TO CURRENT SERVICES
							</Form.Label>
							<div className='d-flex mb-1'>
								<Form.Label className='w-75 pt-1'>FROM :</Form.Label>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										DD
									</option>
									{DAYLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										MM
									</option>
									{MONTHLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										YY
									</option>
									{YEARLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
							</div>
							<div className='d-flex'>
								<Form.Label className='w-75 pt-1'>To :</Form.Label>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										DD
									</option>
									{DAYLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										MM
									</option>
									{MONTHLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
								<Form.Select
									style={{ fontSize: "14px" }}
									aria-label='Default select example'>
									<option selected disabled>
										YY
									</option>
									{YEARLIST.map((item, i) => {
										return <option>{item}</option>;
									})}
								</Form.Select>
							</div>
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={8} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								19. ADDITIONAL CLAIM INFORMATION
								<span style={{ fontSize: "11px" }}>
									(Designated by NUCC)
								</span>{" "}
							</Form.Label>

							<Form.Control className='w-100' type='text' placeholder='QUAL' />
						</Form.Group>
					</Col>
					<Col sm={2} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>20. OUTSIDE LAB?</Form.Label>
							<div className='d-flex justify-content-around'>
								<Form.Group id='formGridCheckbox'>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='YES'
									/>
								</Form.Group>
								<Form.Group id='formGridCheckbox '>
									<Form.Check
										className='font-italic'
										type='checkbox'
										label='No'
									/>
								</Form.Group>
							</div>
						</Form.Group>
					</Col>
					<Col sm={2} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>$ CHARGES</Form.Label>

							<Form.Control className='w-100' type='text' placeholder='QUAL' />
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={8} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								21. DIAGNOSIS OR NATURE OF ILLNESS OR INJURY Relate A-L to
								service line below (24E)
							</Form.Label>

							<Row>
								<Col sm={6} xs={12}>
									<Row>
										<Col sm={6} xs={12}>
											{" "}
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													A.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													E.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													I.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
										</Col>
										<Col sm={6} xs={12}>
											{" "}
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													B.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													F.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													J.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
										</Col>
									</Row>
								</Col>
								<Col sm={6} xs={12}>
									<Row>
										<Col sm={6} xs={12}>
											{" "}
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													C.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													G.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													K.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
										</Col>
										<Col sm={6} xs={12}>
											{" "}
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													D.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													H.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
											<Form.Group
												as={Row}
												className='mb-3'
												controlId='formPlaintextEmail'>
												<Form.Label column sm='3'>
													L.
												</Form.Label>
												<Col sm='9'>
													<Form.Control />
												</Col>
											</Form.Group>
										</Col>
									</Row>
								</Col>
							</Row>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group>
							<Row>
								<Col sm={6} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label>22. RESUBMISSION CODE</Form.Label>
										<Form.Control
											className='w-100'
											type='number'
											placeholder='131241'
										/>
									</Form.Group>
								</Col>
								<Col sm={6} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label>ORIGINAL REF. NO.</Form.Label>

										<Form.Control
											className='w-100'
											type='number'
											placeholder='4235643'
										/>
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>

						<Form.Group>
							<Row className='mt-4 pt-3'>
								<Col sm={12} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label>23. PRIOR AUTHORIZATION NUMBER</Form.Label>

										<Form.Control
											className='w-100'
											type='number'
											placeholder='23553'
										/>
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={3} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label className='mb-4'>
								24. A. DATE(S) OF SERVICE
							</Form.Label>
							<Row>
								<Col style={{ paddingRight: "2px" }} sm={6} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label
											style={{ fontSize: "11px", fontWeight: "bolder" }}>
											From
										</Form.Label>

										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
									</Form.Group>
								</Col>
								<Col style={{ paddingLeft: "2px" }} sm={6} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label
											style={{ fontSize: "11px", fontWeight: "bolder" }}>
											TO
										</Form.Label>

										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
										<Form.Control className='w-100 mb-1' type='date' />
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>
					</Col>
					<Col sm={2} xs={6}>
						<Form.Label className='mb-4'>B.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								PLACE OF SERVICE
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
						</Form.Group>
					</Col>
					<Col sm={2} xs={6}>
						<Form.Label className='mb-4'>C.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								EMG
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
						</Form.Group>
					</Col>
					<Col sm={3} xs={12}>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label>
								D. PROCEDURES, SERVICES /SUPPLIES
								<div className='text-center' style={{ fontSize: "11px" }}>
									(Explain Unusual Circumstances)
								</div>
							</Form.Label>
							<Row>
								<Col style={{ paddingRight: "2px" }} sm={6} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label
											style={{ fontSize: "11px", fontWeight: "bolder" }}>
											CPT/HCPCS
										</Form.Label>

										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
									</Form.Group>
								</Col>
								<Col style={{ paddingLeft: "2px" }} sm={6} xs={12}>
									<Form.Group className='' controlId='formGroupEmail'>
										<Form.Label
											style={{ fontSize: "11px", fontWeight: "bolder" }}>
											MODIFIER
										</Form.Label>

										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
										<Form.Control className='w-100 mb-1' type='text' />
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>
					</Col>
					<Col sm={2} xs={6}>
						<Form.Label className='mb-4'>E.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								DIAGNOSIS POINTER
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={3} xs={6}>
						<Form.Label>F.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								$ CHARGES
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
						</Form.Group>
					</Col>
					<Col sm={2} xs={6}>
						<Form.Label>G.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								DAYS OR UNITS
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
							<Form.Control className='w-100 mb-1' type='number' />
						</Form.Group>
					</Col>
					<Col sm={3} xs={6}>
						<Form.Label>H.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								EPSDT Family Plan
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
						</Form.Group>
					</Col>
					<Col sm={1} xs={6}>
						<Form.Label>I.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								ID QUAL
							</Form.Label>

							<Form.Control
								className='w-100 mb-2 text-center'
								type='text'
								readOnly
								placeholder='NPI'
							/>
							<Form.Control
								className='w-100 mb-2 text-center'
								type='text'
								readOnly
								placeholder='NPI'
							/>
							<Form.Control
								className='w-100 mb-2 text-center'
								type='text'
								readOnly
								placeholder='NPI'
							/>
							<Form.Control
								className='w-100 mb-2 text-center'
								type='text'
								readOnly
								placeholder='NPI'
							/>
							<Form.Control
								className='w-100 mb-2 text-center'
								type='text'
								readOnly
								placeholder='NPI'
							/>
							<Form.Control
								className='w-100 mb-2 text-center'
								type='text'
								readOnly
								placeholder='NPI'
							/>
						</Form.Group>
					</Col>
					<Col sm={3} xs={6}>
						<Form.Label>J.</Form.Label>
						<Form.Group className='' controlId='formGroupEmail'>
							<Form.Label style={{ fontSize: "11px", fontWeight: "bolder" }}>
								RENDERING PROVIDER ID. #
							</Form.Label>

							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
							<Form.Control className='w-100 mb-1' type='text' />
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={3} xs={12}>
						<Row>
							<Col sm={9} xs={12}>
								<Form.Group>
									<Form.Label className='mb-4'>
										25. FEDERAL TAX LD. NUM
									</Form.Label>

									<Form.Control
										className='w-100'
										type='text'
										placeholder='534534534453'
									/>
								</Form.Group>
							</Col>
							<Col className='text-center' sm={2} xs={6}>
								<Form.Group>
									<Form.Label className='mb-4'>SSN</Form.Label>

									<Form.Group className='mt-2' id='formGridCheckbox'>
										<Form.Check className='font-italic' type='checkbox' />
									</Form.Group>
								</Form.Group>
							</Col>
							<Col className='text-center' sm={1} xs={6}>
								<Form.Group>
									<Form.Label className='mb-4'>EIN</Form.Label>

									<Form.Group className='mt-2' id='formGridCheckbox'>
										<Form.Check className='font-italic' type='checkbox' />
									</Form.Group>
								</Form.Group>
							</Col>
						</Row>
					</Col>
					<Col sm={4} xs={12}>
						<Row>
							<Col sm={6} xs={12} style={{ paddingRight: "2px" }}>
								<Form.Group>
									<Form.Label className='mb-4'>
										26. PATIENT ACCOUNT NO.
									</Form.Label>

									<Form.Control
										className='w-100'
										type='text'
										placeholder='QUAL'
									/>
								</Form.Group>
							</Col>
							<Col style={{ paddingRight: "2px" }} sm={6} xs={12}>
								<Form.Group>
									<Form.Label>27. ACCEPT ASSIGNMENT?</Form.Label>

									<div className='d-flex flex-row  justify-content-between'>
										<Form.Group className='mt-2' id='formGridCheckbox'>
											<Form.Check
												className='font-italic'
												type='checkbox'
												label='YES'
											/>
										</Form.Group>
										<Form.Group className='mt-2' id='formGridCheckbox'>
											<Form.Check
												className='font-italic'
												type='checkbox'
												label='NO'
											/>
										</Form.Group>
									</div>
									<span style={{ fontSize: "11px" }}>
										(For govt, claims, see below)
									</span>
								</Form.Group>
							</Col>
						</Row>
					</Col>
					<Col sm={5} xs={12}>
						<Row>
							<Col sm={4} xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label className='mb-4'>28. TOTAL CHARGE </Form.Label>
									<Form.Control type='number' placeholder='$12,34,56' />
								</Form.Group>
							</Col>
							<Col sm={4} xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label className='mb-4'>29. AMOUNT PAID </Form.Label>
									<Form.Control type='number' placeholder='$12,34,56' />
								</Form.Group>
							</Col>
							<Col sm={4} xs={12}>
								<Form.Group className='' controlId='formGroupEmail'>
									<Form.Label className='mb-4'>
										30. Rsvd for
										<span style={{ fontSize: "12px", marginLeft: "2px" }}>
											NUCC Use
										</span>
									</Form.Label>
									<Form.Control type='text' />
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col sm={4} xs={12}>
						<Form.Group>
							<Form.Label>
								31. SIGNATURE OF PHYSICIAN OR SUPPLIER INCLUDING DEGREES OR
								CREDENTIALS. <br />
								<br />
								<span style={{ fontSize: "13px", marginLeft: "2px" }}>
									(I certify that the statements on the reverse apply to this
									bill and are made a part thereof.)
								</span>
								<br />
								<br />
								<br />
								<br />
								<br />
							</Form.Label>

							<Row>
								<Col sm={6} xs={12}>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formPlaintextEmail'>
										<Form.Label column sm='3'>
											Sign:
										</Form.Label>
										<Col sm='9'>
											<Form.Control className='w-100' />
										</Col>
									</Form.Group>
								</Col>
								<Col sm={6} xs={12}>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formPlaintextEmail'>
										<Form.Label column sm='3'>
											Date:
										</Form.Label>
										<Col sm='9'>
											<Form.Control className='w-100' type='date' />
										</Col>
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group>
							<Form.Label>32. SERVICE FACILITY LOCATION INFORMATION</Form.Label>
							<Form.Control
								as='textarea'
								rows={7}
								placeholder='I certify that the statements on the reverse apply to this bill and are made a part thereof.'
							/>

							<Row className='mt-2'>
								<Col sm={6} xs={12}>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formPlaintextEmail'>
										<Form.Label column sm='2'>
											a.
										</Form.Label>
										<Col sm='10'>
											<Form.Control />
										</Col>
									</Form.Group>
								</Col>
								<Col sm={6} xs={12}>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formPlaintextEmail'>
										<Form.Label column sm='2'>
											b.
										</Form.Label>
										<Col sm='10'>
											<Form.Control type='text' />
										</Col>
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>
					</Col>
					<Col sm={4} xs={12}>
						<Form.Group>
							<Form.Label>33. BILLING PROVIDER INFO & PH #</Form.Label>
							<Form.Control className='mb-2' type='text' placeholder='phone#' />
							<Form.Control as='textarea' rows={5} placeholder='123456' />

							<Row className='mt-2'>
								<Col sm={6} xs={12}>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formPlaintextEmail'>
										<Form.Label column sm='2'>
											a.
										</Form.Label>
										<Col sm='10'>
											<Form.Control className='w-100' />
										</Col>
									</Form.Group>
								</Col>
								<Col sm={6} xs={12}>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formPlaintextEmail'>
										<Form.Label column sm='2'>
											b.
										</Form.Label>
										<Col sm='10'>
											<Form.Control type='text' />
										</Col>
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>
					</Col>
				</Row>
				<hr />
				<CmsDisclaimer />
			</div>
		</Container>
	);
};
