import {gql} from 'apollo-angular';

const expensesGql = gql`
query expenses {
  account {
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

const expenseByIdGql = gql`
query expenseById($expenseId: String!) {
  account {
    expenseById(expenseId: $expenseId) {
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