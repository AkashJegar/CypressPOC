const fs = require('fs-extra');
const xlsx = require('xlsx');

function extractTestCases(cypressCode) {
  const testCases = [];
  // Logic to parse Cypress code and extract test cases
  // Modify this based on your Cypress test structure
  // Example: Extract test cases from it() blocks
  const regex = /it\(['"](.+?)['"], \(\) => {([\s\S]+?)\}\);/g;
  let match;
  while ((match = regex.exec(cypressCode)) !== null) {
    const testCase = {
      description: match[1],
      code: match[2].trim(),
    };
    testCases.push(testCase);
  }
  return testCases;
}

function generateExcel(testCases) {
  const workbook = xlsx.utils.book_new();
  const sheetData = [['Test Case Description', 'Cypress Code']];
  testCases.forEach((testCase) => {
    sheetData.push([testCase.description, testCase.code]);
  });
  const worksheet = xlsx.utils.aoa_to_sheet(sheetData);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Cypress Test Cases');
  xlsx.writeFile(workbook,"C:/Users/Akash Jegar/OneDrive - COGNINE/Qualle.reg.xlsx");
}

// Read your Cypress test file (modify the path accordingly)
const cypressCode = fs.readFileSync('D:/AkashJegar/cypress/e2e/Quallelogin.cy.js', 'utf-8');

// Extract test cases
const testCases = extractTestCases(cypressCode);

// Generate Excel sheet
generateExcel(testCases);
