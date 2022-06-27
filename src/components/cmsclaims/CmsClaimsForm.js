import React from "react";
import { Container, Row, Col, Card, Table, Form } from "react-bootstrap";
import { DAYLIST, MONTHLIST, YEARLIST } from "../constant/AppConstants";
import "./CmsClaimsForm.css";

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
						<Row className='pt-1'>
							<Form.Group className='px-1' as={Col} controlId='formGroupEmail'>
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
							<Form.Group className='px-1' as={Col} controlId='formGroupEmail'>
								<Form.Label className='form-label-design'>SEX</Form.Label>
								<Form.Select
									style={{ fontSize: "13px" }}
									aria-label='Default select example'>
									<option>MALE</option>
									<option>FEMALE</option>
								</Form.Select>
							</Form.Group>
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
										9. OTHER INSURED’S NAME
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
										a. OTHER INSURED’S POLICY OR GROUP NUMBER
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
							<Form.Label>10. IS PATIENT’S CONDITION RELATED TO:</Form.Label>
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
			</div>
		</Container>
	);
};
