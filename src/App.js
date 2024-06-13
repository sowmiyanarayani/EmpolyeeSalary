import { React } from 'react';
import './App.scss';
import EmployeeTable from './components/EmployeeTable';

const App = (context) =>
	<div className="App">
		<EmployeeTable { ...context }/>
	</div>;

export default App;
