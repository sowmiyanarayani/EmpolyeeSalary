/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-magic-numbers */
const employeeManager = {

	addFields: (context) => {
		const { data: { employ, bonus }} = context;
		const monthlySalary = employeeManager.getMonthlySalary(employ);
		const annualSalary = employeeManager.getMonthlySalary(employ) * 12;
		const bonusPercent = employeeManager.getBonus(monthlySalary, bonus);
		const bonusAmount = bonusPercent * annualSalary;

		return {
			...employ,
			monthlySalary,
			annualSalary,
			bonusPercent,
			bonusAmount,

		};
	},
	getMonthlySalary: ({ basic, allowance }) => basic + allowance,

	getBonus: (monthlySalary, bonus) => bonus.find(({ salary }) =>
		monthlySalary >= salary).bonus,
};

export default employeeManager;
