/* eslint-disable max-lines-per-function */
import { React } from 'react';
import employeeManager from '../services/employeeManager';
const StudentTable = (context) => {
	const { config: { employee, bonus }} = context;
	const employeeDetails = employee.map((employ) =>
		employeeManager.addFields({ ...context, data: { employ, bonus }}));

	/* employeeBonus
	= employeeManager.getBonus({ ...context, data:  });*/

	return 	<table>

		<tr>
			<th>employeeId</th>
			<th>name</th>
			<th>hireDate</th>
			<th>basicPay</th>
			<th>allowance</th>
			<th>monthlySalary</th>
			<th>annualSalary</th>
			<th>bonusPercent</th>
			<th>bonusAmount</th>

		</tr>
		{ employeeDetails.map((val, key) =>
			<tr key={ key }>
				<td>{ val.employeeId }</td>
				<td>{ val.name }</td>
				<td>{ val.hireDate }</td>
				<td>{ val.basic }</td>
				<td>{ val.allowance }</td>
				<td>{ val.monthlySalary }</td>
				<td>{ val.annualSalary }</td>
				<td>{ val.bonusPercent }</td>
				<td>{ val.bonusAmount }</td>

			</tr>) }
	</table>;
};

export default StudentTable;
