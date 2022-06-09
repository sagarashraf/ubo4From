import React from "react";
import "./TableForm.css";
import {
	Col,
	Row,
	Table,
	Card,
	Container,
	Form,
	Button,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import CurrencyFormat from "react-currency-format";
import { useState } from "react";

/**
 * @author
 * @function
 **/

export const TableForm = (props) => {
	const [tableData, settableData] = useState([
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
			rev: "rev",
			description: "sdfj",
			hpps: "sdfsdjlk",
			serv: "",
			units: "sdfsdlj",
			charges: "",
			nonCovered: "",
			empty: "",
		});
		settableData([...tableData]);
	};
	// const onChangeTable = (id) => {
	// 	cards.find((c) => c.id === id).like++;
	// 	this.setState({ cardArr: cards });
	// };

	return (
		<div className='form-parent-class'>
			<Container fluid>
				<Row>
					<Col className='div-border' lg={3}>
						<Table
							className='h-100'
							style={{ marginBottom: "0%" }}
							striped
							bordered
							hover>
							<tbody>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='div-border' lg={3}>
						<Table
							className='h-100'
							style={{ marginBottom: "0%" }}
							striped
							bordered
							hover>
							<tbody>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='div-border' lg={6}>
						<Table style={{ marginBottom: "0%" }} striped bordered hover>
							<tbody>
								<tr>
									<td>3a PAT. CNTL #</td>
									<td colSpan={2}>
										<input className='table-input-field' />
									</td>
									<td>4 TYPE OF BILL</td>
								</tr>
								<tr>
									<td>b. MED. REC. #</td>
									<td colSpan={2}>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>5 FED. TAX NO. </td>
									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> 6 STATEMENT COVERS PERIOD </td>
												</tr>
												<tr>
													<td className='w-50'>FROM</td>
													<td>THROUGH</td>
												</tr>
											</tbody>
										</Table>
									</td>
									<td className='p-0 h-100' rowSpan={2}>
										<Form.Control style={{ height: "89px" }} as='textarea' />
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col className='div-border' lg={6}>
						<Table
							className='h-100'
							style={{ marginBottom: "0%" }}
							striped
							bordered
							hover>
							<tbody className='inner-topleft-table'>
								<tr>
									<td className=''>8 PATIENT NAME</td>
									<td className='w-25'>a</td>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td className='w-25'>b</td>
									<td colSpan={2}>
										<input className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='div-border' lg={6}>
						<Table style={{ marginBottom: "0%" }} striped bordered hover>
							<tbody>
								<tr>
									<td className=' w-25'>9 PATIENT ADDRESS</td>
									<td>a</td>
									<td colSpan={6}>
										<input className='table-input-field' />
									</td>
								</tr>
								<tr>
									<td>b</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>c</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>d</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>e</td>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col className='div-border' lg={12}>
						<Table style={{ marginBottom: "0%" }} striped bordered hover>
							<tbody>
								<tr>
									<td>10 BIRTHDATE</td>
									<td>11 SEX</td>
									<td className='p-0' colSpan={4}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={4}> ADMISSION </td>
												</tr>
												<tr>
													<td>12 DATE </td>
													<td>13 HR</td>
													<td>14 TYPE</td>
													<td>15 SRC</td>
												</tr>
											</tbody>
										</Table>
									</td>

									<td>16 DHR</td>
									<td>17 STAT</td>
								</tr>
								<tr>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='div-border' lg={12}>
						<Table style={{ marginBottom: "0%" }} striped bordered hover>
							<tbody>
								<tr>
									<td className='p-0' colSpan={11}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={11}> 6 STATEMENT COVERS PERIOD </td>
												</tr>
												<tr>
													<td>18 </td>
													<td>19 </td>
													<td>20 </td>
													<td>21</td>
													<td>22 </td>
													<td>23 </td>
													<td>24 </td>
													<td>25</td>
													<td>26 </td>
													<td>27 </td>
													<td>28 </td>
												</tr>
											</tbody>
										</Table>
									</td>

									<td style={{ width: "10%" }}>29 ACDT STAT </td>
									<td>30</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col className='div-border' lg={12}>
						<Table style={{ marginBottom: "0%" }} striped bordered hover>
							<tbody>
								<tr>
									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> 31 OCCURRENCE </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>DATE</td>
												</tr>
											</tbody>
										</Table>
									</td>

									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> 32 OCCURRENCE </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>DATE</td>
												</tr>
											</tbody>
										</Table>
									</td>
									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> 33 OCCURRENCE </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>DATE</td>
												</tr>
											</tbody>
										</Table>
									</td>
									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> 34 OCCURRENCE </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>DATE</td>
												</tr>
											</tbody>
										</Table>
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input type='text' className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='div-border' lg={12}>
						<Table style={{ marginBottom: "0%" }} striped bordered hover>
							<tbody>
								<tr>
									<td className='p-0' colSpan={3}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={3}> 35 OCCURRENCE </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>FROM</td>
													<td>THROUGH</td>
												</tr>
											</tbody>
										</Table>
									</td>

									<td className='p-0' colSpan={3}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={3}> 36 OCCURRENCE </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>FROM</td>
													<td>THROUGH</td>
												</tr>
											</tbody>
										</Table>
									</td>

									<td colSpan={2}>
										<td className=''>
											<input className='table-input-field' />
										</td>
									</td>
								</tr>
								<tr>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input type='date' className='table-input-field' />
									</td>
									<td>
										<input value={37} className='table-input-field' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col className='div-border' lg={5}>
						<Table className='h-100' striped bordered hover>
							<tbody>
								<tr>
									<td>
										<Form.Control className='h-100' as='textarea' />
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col className='div-border' lg={7}>
						<Table striped bordered hover>
							<tbody>
								<tr>
									<td></td>
									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> VALUE CODES </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>VALUE</td>
												</tr>
											</tbody>
										</Table>
									</td>

									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> VALUE CODES </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>VALUE</td>
												</tr>
											</tbody>
										</Table>
									</td>
									<td className='p-0' colSpan={2}>
										<Table
											style={{
												marginBottom: "0%",
												fontSize: "10px",
												textAlign: "center",
											}}
											striped
											bordered
											hover
											size='sm'>
											<tbody>
												<tr>
													<td colSpan={2}> VALUE CODES </td>
												</tr>
												<tr>
													<td>CODE</td>
													<td>VALUE</td>
												</tr>
											</tbody>
										</Table>
									</td>
								</tr>
								<tr>
									<td>a</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
								</tr>
								<tr>
									<td>a</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
								</tr>
								<tr>
									<td>a</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
								</tr>
								<tr>
									<td>a</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
									<td>
										<input className='table-input-field' />
									</td>
									<td>
										<CurrencyFormat
											thousandSeparator={true}
											prefix={"$"}
											placeholder='#'
											className='currency-input'
										/>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Table responsive striped bordered hover>
						<thead className=''>
							<tr>
								<th>#</th>
								<th>42 REV CD.</th>
								<th className='w-25'>43 DESCRIPTION</th>
								<th>44 HCPCS/RATE/HPPS CODE</th>
								<th>45 SERV. DATE</th>
								<th>46 SERV. UNITS</th>
								<th>47 TOTAL CHARGES</th>
								<th>48 NON-COVERED CHARGES</th>
								<th> 49 </th>

								<th>#</th>
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
											<input
												value={data.charges}
												className='table-input-field'
											/>
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

										<td>{index}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Row>
				<Button onClick={addRow}>Add row</Button>
			</Container>
		</div>
	);
};
