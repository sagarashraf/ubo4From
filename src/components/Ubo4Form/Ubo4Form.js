import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./Ubo4Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * @author
 * @function Ubo4Form
 **/

export const Ubo4Form = (props) => {
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
		<Container fluid className='font-style'>
			<Row>
				<Col className='grid-column-pr' md={3} sm={3} xs={12}>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='w-50'>
									<input className='input-field-general' />
								</td>
								<td className='w-25'>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row1Col3R4C1'>
									<input className='input-field-general' />
								</td>
								<td className='Row1Col3R4C2'>
									<input className='input-field-general' />
								</td>
								<td className='Row1Col3R4C3'>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-spacing' md={3} sm={3} xs={12}>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row1Col3bR3C1'>
									<input className='input-field-general' />
								</td>
								<td className='Row1Col3bR3C2'>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row1Col3bR4C1'>
									<input className='input-field-general' />
								</td>
								<td className='Row1Col3bR4C2'>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-pl' md={6} sm={6} xs={12}>
					{" "}
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row1Col6cR1C1'>
									<div className='fw-bold'>3a PAT. CNTL #</div>
								</td>
								<td className=''>
									<input className='input-field-general' />
								</td>
								<td className='Row1Col6cR1C3 bg-black text-light'>
									<div className='fw-bold'>4 TYPE OF BILL</div>
								</td>
							</tr>
							<tr>
								<td className='Row1Col6cR1C1 bg-light'>
									<div className='fw-bold'>b. MED . REC . #</div>
								</td>
								<td className='bg-light'>
									<input className='input-field-general' />
								</td>
								<td className='Row1Col6cR1C3'>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Row>
						<Col style={{ paddingRight: "0px" }} xs={3}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr>
										<td className='bg-light'>
											<div className='fw-bold'>5 FED. TAX NO</div>
										</td>
									</tr>
									<tr>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' xs={7}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td className='from-through-columns bg-light ' colSpan={2}>
											<p className='mb-0'>6 ST ATEMENT CO VERS PERIOD</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>FROM</div>
												<div>THROUGH</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col style={{ paddingLeft: "0px" }} xs={2}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td>
											<input className=' h-100 input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col className='grid-column-pr' md={5} xs={12}>
					<Table className='table-bottom-margin ' bordered hover size='sm'>
						<tbody>
							<tr className='h-100'>
								<td className='Row2Col5R1C1 bg-light'>
									<div className='fw-bold'>8 PATIENT NAME </div>
								</td>
								<td className='Row2Col5R1C2  bg-light'>
									<div className='fw-bold'>a </div>
								</td>
								<td>
									<input className=' input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table className='table-bottom-margin' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row2Col5R2C1 bg-light'>
									<div className='fw-bold'>b </div>
								</td>
								<td>
									<input className=' h-100 input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-pl' md={7} xs={12}>
					<Table className='table-bottom-margin ' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row2Col7R1C1 bg-light'>
									<div className='fw-bold'>9 PATIENT ADDRESS </div>
								</td>
								<td className='Row2Col7R1C2 bg-light'>
									<div className='fw-bold'>a </div>
								</td>
								<td>
									<input className='  input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table className='table-bottom-margin ' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row2Col7R2C1 bg-light'>
									<div className='fw-bold'>b </div>
								</td>
								<td className='Row2Col7R2C2'>
									<input className=' input-field-general' />
								</td>
								<td className='Row2Col7R2C3 bg-light'>
									<div className='fw-bold'>c </div>
								</td>
								<td className='Row2Col7R2C4'>
									<input className='  input-field-general' />
								</td>
								<td className='Row2Col7R2C5 bg-light'>
									<div className='fw-bold'>d </div>
								</td>
								<td className='Row2Col7R2C6'>
									<input className='  input-field-general' />
								</td>
								<td className='Row2Col7R2C7 bg-light'>
									<div className='fw-bold'>e </div>
								</td>
								<td className='Row2Col7R2C8'>
									<input className='  input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='grid-column-pr' md={2} xs={12}>
					<Table className='table-bottom-margin h-100' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='Row3Col2R1C1'>
									<div className='fw-bold'>10 BIRTH DATE </div>
								</td>
								<td>
									<div className='fw-bold'>11 SEX </div>
								</td>
							</tr>
							<tr>
								<td>
									<input type='date' className='  input-field-general' />
								</td>
								<td>
									<select className='input-field-general'>
										<option>MALE</option>
										<option>FEMALE</option>
									</select>
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-spacing' md={3} xs={12}>
					<Table className='table-bottom-margin ' hover size='sm'>
						<tbody>
							<td className='Admission label-color ' colSpan={2}>
								<p className='Admission-label '>ADMISSION</p>
								<p className=' mb-0 d-flex justify-content-around'>
									<div style={{ width: "38%" }}>12 DATE.</div>
									<div>13 HR </div>
									<div>14 TYPE</div>
									<div>15 SRC</div>
								</p>
							</td>
							<td>
								<div className='font-style-state'>16 DHR</div>
							</td>
							<td>
								<div className='font-style-state'>17 STAT</div>
							</td>
						</tbody>
					</Table>
					<Table className='table-bottom-margin ' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='w-25'>
									<input type='date' className='input-field-general' />
								</td>
								<td className=''>
									<input className=' input-field-general' />
								</td>
								<td className=''>
									<input className='input-field-general' />
								</td>
								<td className=''>
									<input className=' input-field-general' />
								</td>
								<td className=''>
									<input className='input-field-general' />
								</td>
								<td className=''>
									<input className=' input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-spacing' md={5} xs={12}>
					<Table className='table-bottom-margin ' hover size='sm'>
						<tbody>
							<td className='condition-codes bg-light' colSpan={2}>
								<p className='condition-codes-label'>CONDITION CODES</p>
								<p className=' mb-0 d-flex justify-content-around'>
									<div>18</div>
									<div>19</div>
									<div>20</div>
									<div>21</div>
									<div>22</div>
									<div>23</div>
									<div>24</div>
									<div>25</div>
									<div>26</div>
									<div>27</div>
									<div>28</div>
								</p>
							</td>
						</tbody>
					</Table>
					<Table bordered className='table-bottom-margin ' hover size='sm'>
						<tbody>
							<tr>
								<td>
									<input
										type='number'
										min='0'
										className='input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className='input-field-general'
									/>
								</td>

								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
								<td>
									<input
										type='number'
										min='0'
										className='input-field-general'
									/>
								</td>

								<td>
									<input
										type='number'
										min='0'
										className=' input-field-general'
									/>
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-pl' md={2} xs={6}>
					<Table
						className='table-bottom-margin h-100 '
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='ACDTSTATE bg-light'>
									<div className='fw-bold' style={{ fontSize: "11px" }}>
										29 ACDT STATE
									</div>
								</td>
								<td className='bg-light'>
									<input
										placeholder='30'
										className=' bg-light h-100 input-field-general'
									/>
								</td>
							</tr>
							<tr>
								<td className='w-25'>
									<input className='  input-field-general' />
								</td>
								<td>
									<input className='  input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col md={6} xs={12}>
					<Row>
						<Col className='grid-column-pr' md={3} xs={6}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td className='from-through-columns bg-light' colSpan={2}>
											<p className='mb-0'>31 OCCURRENCE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={3} xs={6}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td
											className='from-through-columns bg-black text-light '
											colSpan={2}>
											<p className='mb-0'>32 OCCURRENCE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={3} xs={6}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td className='from-through-columns bg-light' colSpan={2}>
											<p className='mb-0'>33 OCCURRENCE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={3} xs={6}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td
											className='from-through-columns bg-black text-light'
											colSpan={2}>
											<p className='mb-0'>34 OCCURRENCE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Col>

				<Col md={5} xs={12}>
					<Row>
						<Col className='grid-column-spacing' md={6} xs={12}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td className='from-through-columns bg-light' colSpan={3}>
											<p className='mb-0'>35 OCCURRENCE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>FROM</div>
												<div>THROUGH</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={6} xs={12}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td className='from-through-columns bg-light' colSpan={3}>
											<p className='mb-0'>36 OCCURRENCE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>FROM</div>
												<div>THROUGH</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Col>
				<Col className='grid-column-pl' md={1} xs={12}>
					<Table className='table-bottom-margin h-100' bordered hover size='sm'>
						<tbody>
							<tr>
								<td className='bg-light'>
									<input placeholder='37' className='  input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='  input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='  input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='grid-column-pr' sm={5} xs={12}>
					<textarea
						class='form-control h-100'
						id='exampleFormControlTextarea1'></textarea>
				</Col>
				<Col sm={7} xs={12}>
					<Row>
						<Col className='grid-column-spacing' sm={4}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td style={{ width: "5%" }}></td>
										<td className='from-through-columns bg-light' colSpan={2}>
											<p className='mb-0'>39 VALUE CODES</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>AMOUNT</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td>a</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td style={{ width: "5%" }}>b</td>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td style={{ width: "5%" }}>c</td>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td style={{ width: "5%" }}>d</td>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' sm={4}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td
											className='from-through-columns bg-black text-white'
											colSpan={2}>
											<p className='mb-0'>40 VALUE CODES</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>AMOUNT</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-pl' sm={4}>
							<Table
								className='table-bottom-margin h-100'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr className='h-100'>
										<td className='from-through-columns bg-light' colSpan={2}>
											<p className='mb-0'>41 VALUE CODES</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>AMOUNT</div>
											</p>
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr className='h-100'>
										<td className='w-50'>
											<input type='number' className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Table
					className='table-bottom-margin'
					style={{ fontSize: "12px" }}
					responsive
					striped
					bordered
					size='sm'
					hover>
					<thead>
						<tr>
							<th>#</th>
							<th>42 REV CD.</th>
							<th className='main-table-3nd-column'>43 DESCRIPTION</th>
							<th className='main-table-4nd-column'>44 HCPCS/RATE/HPPS CODE</th>
							<th>45 SERV. DATE</th>
							<th>46 SERV. UNITS</th>
							<th className='main-table-7nd-column'>47 TOTAL CHARGES</th>
							<th className='main-table-8nd-column'>48 NON-COVERED CHARGES</th>
							<th> 49 </th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{tableData?.map((data, index) => {
							index = index + 1;

							return (
								<tr>
									<td>{index}</td>
									<td>
										<input value={data.rev} className='table-input-field' />
									</td>
									<td>
										<input
											value={data.description}
											className='table-input-field'
										/>
									</td>
									<td>
										<input value={data.hpps} className='table-input-field' />
									</td>
									<td>
										<input value={data.serv} className='table-input-field' />
									</td>
									<td>
										<input value={data.units} className='table-input-field' />
									</td>
									<td>
										<input value={data.charges} className='table-input-field' />
									</td>
									<td>
										<input
											value={data.nonCovered}
											className='table-input-field'
										/>
									</td>
									<td>
										<input value={data.empty} className='table-input-field' />
									</td>

									<td className='text-center'>
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
										PAGE <u className=' text-danger fw-bold'>{pagenumber}</u> of{" "}
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
								<input type='number' className='input-field-general' />
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
			</Row>
			<Row>
				<Col md={6} xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						striped
						size='sm'>
						<thead>
							<tr>
								<th>#</th>
								<th className='PayerName bg-light'>50 PAYER NAME</th>
								<th className='HealthPlan bg-light'>51 HEALTH PLAN ID</th>
								<th className='bg-light'>52 REL INFO</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>A</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>B</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>C</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col md={6} xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						striped
						size='sm'>
						<thead>
							<tr>
								<th className='bg-light'>53 ASG BEN.</th>
								<th className='PriorPay bg-light'>54 PRIOR PAYMENTS</th>
								<th className='EstAmount bg-light'>55 EST. AMOUNT DUE</th>
								<th className='bg-light'>56 NPI</th>
								<th className='nextNpi bg-light'>22222</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td rowSpan={3}> 57 OTHER PRV ID</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>A</td>
							</tr>

							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
								<td>B</td>
							</tr>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
								<td>C</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='grid-column-pr' md={8} xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						striped
						size='sm'>
						<thead>
							<tr>
								<th className='insuredName bg-light'>58 INSURED’S NAME</th>
								<th className='bg-light'>59 P. REL</th>
								<th className='insuredId bg-light'>60 INSURED ’S UNI QUE ID</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>

							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-pl' md={4} xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						striped
						size='sm'>
						<thead>
							<tr>
								<th className='bg-light'>61 GROUP NAME</th>

								<th className='bg-light'>62 INSURANCE GROUP NO.</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
							</tr>

							<tr>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						striped
						size='sm'>
						<thead>
							<tr>
								<th className='bg-light'>63 TREATMENT AUTHORIZATION CODES</th>

								<th className='bg-light'>64 DOCUMENT CONTR OL NUMBER.</th>
								<th className='bg-light'>65 EMPLOYER NAME.</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
							</tr>

							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
							</tr>
							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>

								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='DX66 bg-light fw-bold'>66 DX</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>

							<tr>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='grid-column-pr' md={8} xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='Admit-dx fw-bold bg-light'>69 ADMIT DX</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className='ReasonDx fw-bold bg-light'>
									70 PATIENT REASON DX
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className='PpsCode fw-bold bg-light'>71 PPS CODE</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className='grid-column-pl' md={4} xs={12}>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='Eci fw-bold bg-light'>72 ECI</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td>
									<input placeholder='73' className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col md={8} xs={12}>
					<Row>
						<Col className='grid-column-pr' md={3} xs={6}>
							<Table className='table-bottom-margin ' bordered hover size='sm'>
								<tbody>
									<tr className=''>
										<td
											className='from-through-columns fw-bold bg-light'
											colSpan={2}>
											<p className='mb-0'>74 PRINCIPAL PROCEDURE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className=''>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input type='date' className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
							<Table className='table-bottom-margin' bordered hover size='sm'>
								<tbody>
									<tr className=''>
										<td
											className='from-through-columns text-light bg-black  '
											colSpan={2}>
											<p className='mb-0'>C OTHER PROCEDURE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className=''>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={3} xs={6}>
							<Table className='table-bottom-margin ' bordered hover size='sm'>
								<tbody>
									<tr className=''>
										<td
											className='from-through-columns fw-bold text-light bg-black'
											colSpan={2}>
											<p className='mb-0'>A OTHER PROCEDURE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className=''>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
							<Table className='table-bottom-margin' bordered hover size='sm'>
								<tbody>
									<tr className=''>
										<td
											className='from-through-columns fw-bold bg-light'
											colSpan={2}>
											<p className='mb-0'>D. OTHER PROCEDURE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className=''>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={3} xs={6}>
							<Table className='table-bottom-margin ' bordered hover size='sm'>
								<tbody>
									<tr className=''>
										<td
											className='from-through-columns fw-bold bg-light'
											colSpan={2}>
											<p className='mb-0'>B. OTHER PROCEDURE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className=''>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
							<Table className='table-bottom-margin' bordered hover size='sm'>
								<tbody>
									<tr className=''>
										<td
											className='from-through-columns fw-bold bg-black text-white'
											colSpan={2}>
											<p className='mb-0'>E. OTHER PROCEDURE</p>
											<p className=' mb-0 d-flex justify-content-around'>
												<div>CODE</div>
												<div>DATE</div>
											</p>
										</td>
									</tr>
									<tr className=''>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={3} xs={6}>
							<textarea
								placeholder='75'
								class='form-control h-100'
								id='exampleFormControlTextarea1'></textarea>
						</Col>
					</Row>
					<Row>
						<Col className='grid-column-pr' md={6} xs={12}>
							<Table
								style={{ fontSize: "12px" }}
								className='table-bottom-margin'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr>
										<td>REMARKS</td>
									</tr>
									<tr>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>

									<tr>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
						<Col className='grid-column-spacing' md={6} xs={12}>
							<Table
								style={{ fontSize: "12px" }}
								className='table-bottom-margin'
								bordered
								hover
								size='sm'>
								<tbody>
									<tr>
										<td>18CC a</td>
										<td className='CC81Next'>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>

									<tr>
										<td>b</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr>
										<td>c</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
									<tr>
										<td>d</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
										<td>
											<input className='input-field-general' />
										</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Col>
				<Col md={4} xs={12}>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='Atendings'>76 ATTENDING</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className='Qual'>QUAL</td>
								<td className='QualNext'>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "12px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className=''>FIRST</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className=''>LAST</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='Atendings fw-bold bg-light'>77 ATTENDING</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className='Qual fw-bold bg-light'>QUAL</td>
								<td className='QualNext'>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className=''>FIRST</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className=''>LAST</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='Atendings fw-bold bg-light'>78 ATTENDING</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className='Qual fw-bold bg-light'>QUAL</td>
								<td className='QualNext'>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className=''>FIRST</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className=''>LAST</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className='Atendings fw-bold bg-light'>79 ATTENDING</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className='Qual fw-bold bg-light'>QUAL</td>
								<td className='QualNext'>
									<input className='input-field-general' />
								</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
					<Table
						style={{ fontSize: "13px" }}
						className='table-bottom-margin'
						bordered
						hover
						size='sm'>
						<tbody>
							<tr>
								<td className=''>FIRST</td>
								<td>
									<input className='input-field-general' />
								</td>
								<td className=''>LAST</td>
								<td>
									<input className='input-field-general' />
								</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
};
