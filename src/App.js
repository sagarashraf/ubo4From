import React from "react";
import "./App.css";
// import { TableForm } from "./components/tableform/TableForm";
import { Ubo4FormAdvance } from "./components/tableform/Ubo4FormAdvance/Ubo4FormAdvance";
// import { Ubo4Form } from "./components/Ubo4Form/Ubo4Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CmsClaimsForm } from "./components/cmsclaims/CmsClaimsForm";

/**
 * @author
 * @function
 **/

export const App = (props) => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					{/* <Route path='/avd' element={<Ubo4Form />} />
					<Route path='table' element={<TableForm />} /> */}
					<Route path='/' element={<Ubo4FormAdvance />} />
					<Route path='cms' element={<CmsClaimsForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
