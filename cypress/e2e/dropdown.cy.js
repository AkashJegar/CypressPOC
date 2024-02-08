// cypress/integration/todo_app_spec.js

// URL of the To-Do list application
const todoAppUrl = 'https://your-todo-app-url';

// Cypress test
describe('To-Do List Application Test', () => {
  beforeEach(() => {
    // Visit the To-Do list application before each test
    cy.visit(todoAppUrl);
  });

  it('should add and verify tasks in the to-do list', () => {
    // Alias the input field and the task list
    cy.get('.task-input').as('taskInput');
    cy.get('.task-list').as('taskList');

    // Array of tasks to add
    const tasksToAdd = ['Buy groceries', 'Finish homework', 'Go to the gym'];

    // Loop through the tasks array and add each task
    tasksToAdd.forEach((task) => {
      // Type the task in the input field and press Enter
      cy.get('@taskInput').type(`${task}{enter}`);

      // Add assertions to verify the task is added to the list
      cy.get('@taskList').contains(task).should('exist');
    });

    // Verify the count of tasks in the list
    cy.get('@taskList').children().should('have.length', tasksToAdd.length);

    // Verify the text content of a specific element
    cy.get('.task-summary').invoke('text').should('contain', `Total tasks: ${tasksToAdd.length}`);
  });

  it('should mark tasks as completed', () => {
    // Alias the task list
    cy.get('.task-list').as('taskList');

    // Array of tasks to mark as completed
    const tasksToComplete = ['Buy groceries', 'Go to the gym'];

    // Loop through the tasks array and mark each task as completed
    tasksToComplete.forEach((task) => {
      // Click on the task to mark it as completed
      cy.get('@taskList').contains(task).click();

      // Add assertions to verify the task is marked as completed
      cy.get('@taskList').contains(task).should('have.class', 'completed');
    });

    // Verify the count of completed tasks in the list
    cy.get('@taskList').find('.completed').should('have.length', tasksToComplete.length);
  });

  // You can add more test cases for different scenarios or functionalities
});
