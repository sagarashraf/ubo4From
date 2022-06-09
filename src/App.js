import React from "react";
import "./App.css";
import { TableForm } from "./components/tableform/TableForm";
import { Ubo4FormAdvance } from "./components/tableform/Ubo4FormAdvance/Ubo4FormAdvance";
import { Ubo4Form } from "./components/Ubo4Form/Ubo4Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * @author
 * @function
 **/

export const App = (props) => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Ubo4Form />} />
					<Route path='table' element={<TableForm />} />
					<Route path='grids' element={<Ubo4FormAdvance />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
