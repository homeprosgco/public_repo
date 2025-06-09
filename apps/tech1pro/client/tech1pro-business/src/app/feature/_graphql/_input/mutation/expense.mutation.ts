import {gql} from 'apollo-angular';

const createExpenseGql = gql`
mutation createExpense($expenseInput: ExpenseInput!) {
  createExpense(expenseInput: $expenseInput) {
    expenseLastAdded {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
`;

const updateExpenseGql = gql`
mutation updateExpense($expenseIdInput: String!, $updateExpenseInput: ExpenseInput!) {
  updateExpense(expenseIdInput: $expenseIdInput, updateExpenseInput: $updateExpenseInput) {
    expenseLastUpdated {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
`;

const removeExpenseGql = gql`
mutation removeExpense($expenseIdInput: String!) {
  removeExpense(expenseIdInput: $expenseIdInput) {
    expenses {
      amount
      category
      created
      createdById
      id
      imageURL
      location
      subCategory
      userId
    }
  }
}
`;