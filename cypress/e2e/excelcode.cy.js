
// cypress/integration/extractTestCases.js
 
const fs = require('fs');
 
function extractTestCases(cypressScriptPath) {

  const cypressScriptContent = require('fs').readFileSync('cypressScriptPath', 'utf-8');

  const testCases = [];
 
  const ast = require('@babel/core').parseSync(cypressScriptContent, {

    sourceType: 'module',

    plugins: ['jsx', 'typescript'], // Adjust plugins based on your code

  });
 
  ast.program.body.forEach(node => {

    if (node.type === 'FunctionDeclaration') {

      const testCase = { 'Test Case Name': node.id.name, 'Test Steps': [] };
 
      node.body.body.forEach(stmt => {

        if (stmt.type === 'ExpressionStatement' && stmt.expression.type === 'Literal') {

          testCase['Test Steps'].push(stmt.expression.value);

        }

      });
 
      testCases.push(testCase);

    }

  });
 
  return testCases;

}
 
function writeToExcel(testCases, outputExcelPath) {

  const XLSX = require('xlsx');

  const wb = XLSX.utils.book_new();

  const ws = XLSX.utils.json_to_sheet(testCases);
 
  XLSX.utils.book_append_sheet(wb, ws, 'Test Cases');

  XLSX.writeFile(wb, outputExcelPath);

}
 
describe('Extract and Write Test Cases', () => {

  it('should extract test cases and write to Excel', () => {

    const cypressScriptPath = 'D:\AkashJegar\cypress\e2e\Quallelogin.cy.js';

    const outputExcelPath = '"C:\Users\Akash Jegar\OneDrive - COGNINE\Qualle.reg.xlsx"';
 
    const testCases = extractTestCases(cypressScriptPath);

    writeToExcel(testCases, outputExcelPath);

  });

});
