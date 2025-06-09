import { faker } from "@faker-js/faker";
import axios from 'axios';

export const authHeader = {
  "Authorization": "Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJhY2NvdW50SWQiOiJNdGZDOWJlVUJXUDkxaFhXZjBtNCIsImVtYWlsIjoiZGV2YW50ZS5rbGVpbjExQHlhaG9vLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aF90aW1lIjoxNjYxMzk1NzczLCJ1c2VyX2lkIjoiSmdjcEM4SHZCQ29uZHpwTEVRNkhXRm9uN1ZJSiIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGV2YW50ZS5rbGVpbjExQHlhaG9vLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9LCJpYXQiOjE2NjE0NDIzNTcsImV4cCI6MTY2MTQ0NTk1NywiYXVkIjoidGVjaDEtcHJvLWluZnJhc3RydWN0dXJlIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RlY2gxLXByby1pbmZyYXN0cnVjdHVyZSIsInN1YiI6IkpnY3BDOEh2QkNvbmR6cExFUTZIV0ZvbjdWSUoifQ."
}

// export const seedAuthUsers = `
// curl -g \
// -X POST \
// -H "Content-Type: application/json" \
// -d '{"query":"mutation seedAuthUsers { seedAuthUsers {operationResult operationType status statusCode}}"}' \
// http://localhost:3250/tech1-pro-infrastructure/us-central1/api/graphql
// `;

const address = () => {
  return {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCodeByState('FL')
  }
}

const basicContact = () => {
  return {
    displayName: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.number('561-###-####'),
    address: address(),
  }
}

const personalContact = () => {
  return {
    ...basicContact(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
  }
}

const contactType = () => {
  return faker.helpers.arrayElement(['COMPANY', 'INDIVIDUAL']);
}

// add accountId from request to company profile
const companyProfile = () => {
  const { displayName, ...rest } = basicContact();
  return {
    companyName: faker.company.companyName(),
    ...rest,
    serviceCategory: faker.company.catchPhraseNoun(),
    logoURL: imageURLs()[0],
    fax: faker.phone.number(),
    socials: urls(),
    website: faker.internet.domainName(),
    bio: faker.lorem.paragraph()
  }
}

const prospect = () => {
  return {
    ...personalContact(),
    type: contactType()
  }
}

const leadSource = () => faker.helpers.arrayElement(['none', 'craigslist', 'billboard', 'direct mail', 'facebook', 'instagram', 'yelp', 'referral', 'linked in', 'in-house account']);
const jobLeadStatus = () => faker.helpers.arrayElement(['new', 'pending callback', 'images pending', 'visit scheduled', 'estimate submitted', 'proposal submitted', 'converted to job',])
const workCategory = () => faker.helpers.arrayElement(['plumbing', 'electrical', 'concrete', 'power washing', 'painting', 'windows & doors', 'hvac', 'flooring', 'tile installation', 'laminate installation', 'carpet installation']);

/*
add prospectId, createdById
 */
const jobLead = (prospectId: string) => {
  return {
    prospectId,
    leadSource: leadSource(),
    status: jobLeadStatus(),
    notes: faker.lorem.paragraph(),
    imageURLs: faker.image.business(),
    fileURLs: faker.image.imageUrl(),
    category: workCategory(),
    address: address(),
    requestedWorkScope: faker.lorem.paragraph(),
    referenceId: faker.random.numeric(4),
    created: faker.date.recent()
  }
};

const mapTo = (cb: () => any, options = { min: 1, max: 6 }) => Array.from({ length: faker.datatype.number(options) }).map(_ => cb());

const urls = (options = { min: 1, max: 6 }) => mapTo(faker.internet.domainName, options);
const imageURLs = (options = { min: 1, max: 6 }) => mapTo(faker.image.imageUrl, options);

const item = () => {
  const purchasePrice = faker.commerce.price();
  const salePrice = (((parseFloat(purchasePrice) * (Math.random()))) + (parseFloat(purchasePrice))).toFixed(2);
  return {
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    imageURL: faker.image.image(),
    websiteReferences: urls(),
    name: faker.commerce.productName(),
    purchasePrice,
    salePrice,
    sku: faker.random.numeric(7),
    modelNumber: faker.random.alphaNumeric(),
    make: faker.commerce.productAdjective(),
    installLinks: urls(),
    orderLinks: urls()
  }
};

const createLineItem = (item: any) => {
  const { orderLinks, installLinks, websiteReferences, ...rest } = item;
  return rest;
};

const lineItems = () => mapTo(() => {
  return {
    quantity: faker.datatype.number({ min: 1, max: 15 }),
    item: createLineItem(item())
  }
}, { max: 10, min: 0 });

const workService = () => {
  return {
    category: faker.company.catchPhraseDescriptor(),
    description: faker.lorem.text(),
    name: faker.commerce.productName(),
    notes: faker.lorem.text(),
    salePrice: faker.commerce.price(),
    lineItems: lineItems(),
    costGuides: urls(),
    timeToComplete: faker.datatype.number({ min: 20, max: 480 * faker.datatype.number({ min: 1, max: 90 }) })
  }
};

const createLineWorkService = (workService: any) => {
  const { costGuides, ...rest } = workService;
  return rest;
};

const lineWorkServices = () => mapTo(() => {
  return {
    quantity: faker.datatype.number({ min: 1, max: 8 }),
    workService: createLineWorkService(workService())
  }
}, { max: 10, min: 0 });

const proposalStatus = () => faker.helpers.arrayElement(['draft', 'accepted', 'denied', 'expired', 'sent', 'viewed', 'converted to invoice']);

// add prospectId, jobLeadId, category, requestedWorkScope, reference addressId from joblead to mutation
// add createdBy from user request
const proposal = (propsectId: string, createdById: string, jobLeadId: string) => {
  return {
    status: proposalStatus(),
    definedWorkScope: faker.lorem.text(),
    created: faker.date.recent(),
    notes: faker.lorem.text(),
    imageURLs: imageURLs(),
    fileURLs: imageURLs(),
    lineWorkService: lineWorkServices(),
    referencedId: faker.random.numeric(5)
  }
}

const estimateStatus = () => faker.helpers.arrayElement(['draft', 'accepted', 'denied', 'expired', 'sent', 'viewed', 'converted to invoice']);

// add category, addressId, (if)proposalId, prospectId, referenceId, serviceAddressId from joblead
// add createdBy from user request
const estimate = (createdById: string, jobLeadId: string, prospectId: string) => {
  return {
    category: faker.commerce.department(),
    createdById,
    imageURLs: imageURLs(),
    fileURLs: imageURLs(),
    lineItems: lineItems(),
    lineWorkService: lineWorkServices(),
    jobLeadId,
    notes: faker.lorem.text(),
    number: faker.datatype.number({ max: 5000 }),
    prospectId,
    referencedId: faker.random.numeric(5),
    status: estimateStatus(),
    viewedDate: faker.date.recent()
  }
}

// use prospectId to convert prospect to customer after proposal or estimate is accepted
const customer = (prospectId: string) => {
  return {
    prospectId,
    ...prospect()
  };
};

// attach customerId to beneficiary data to identify third party individuals benefiting from the work rendered
const beneficiary = (customerId: string) => {
  return {
    customerId,
    ...prospect(),
  }
};

const jobStatus = () => faker.helpers.arrayElement(['new', 'scheduled', 'in progress', 'on hold', 'complete', 'invoiced']);

// customerId, jobLeadId, category, reqeuestedWorkScope come from joblead - definedWorkScope, address, estimateId, poNumber comes from proposal/estimate
// createdByID comes from request
// assignedToId, jobManagerId added later
const job = (customerId: string, createdById: string, jobLeadId: string, proposalId?: string, estimateId?: string, assignedToId?: string, jobManagerId?: string) => {
  return {
    customerId,
    createdById,
    assignedToId,
    jobLeadId,
    jobManagerId,
    proposalId,
    estimateId,
    status: jobStatus(),
    notes: faker.lorem.text(),
    imageURLs: imageURLs(),
    fileURLs: imageURLs(),
    startDate: faker.date.recent(),
    poNumber: faker.random.numeric(5)
  }
};

// add customerId, category, jobLeadId requestedWorkScope, referenceId from joblead - definedWorkScope, address, estimateId, poNumber comes from proposal/estimate
// add jobIds when building project by attaching jobs
// add estimateIs when building project by attaching estimates
// createdByID comes from request
// assignedToId, projectManagerId, officeTeamMemberIds, fieldTeamMemberIds, startDate added later
// const project = () => {
//   return {
//     status: jobStatus(),
//     imageURLs: imageURLs(),
//     fileURLs: imageURLs(),
//   }
// };

// addUserId, createdById from request or app client
const expense = (userId: string, createdById: string) => {
  return {
    createdById,
    userId,
    created: faker.date.recent(),
    location: faker.company.companyName(),
    amount: faker.commerce.price(),
    category: faker.commerce.department(),
    subCategory: faker.commerce.department(),
    imageURL: urls()[0],
  }
}

const paymentReferenceTypes = ["INVOICE", "JOB", "PROJECT"];

// referenceId, referenceType createdById from request or app client
const payment = (createdById: string) => {
  return {
    created: faker.date.recent(),
    createdById,
    to: faker.name.findName(),
    for: faker.commerce.productName(),
    direction: faker.datatype.boolean() ? 'incoming' : 'outgoing',
    referencedId: faker.random.numeric(5),
    referenceType: faker.helpers.arrayElement(paymentReferenceTypes)
  }

}

const invoiceStatus = () => faker.helpers.arrayElement(['draft', 'sent', 'paid', 'overdue', 'unpaid', 'viewed']);


// add customerId, category, jobLeadId requestedWorkScope, referenceId from joblead - definedWorkScope, address, estimateId, proposalId, lineItems, lineServices, poNumber comes from proposal/estimate
// add jobIds when building project by attaching jobs
// add estimateIs when building project by attaching estimates
// createdById comes from request
// assignedToId, projectManagerId, officeTeamMemberIds, fieldTeamMemberIds, startDate added later
// add jobId or projectId from job or project
// add estimateId from estimate
const invoice = (createdById: string, jobId: string, customerId: string, jobLeadId: string, projectId?: string, estimateId?: string, proposalId?: string) => {
  return {
    createdById,
    jobId,
    customerId,
    jobLeadId,
    projectId,
    estimateId,
    proposalId,
    number: faker.datatype.number(5000),
    status: invoiceStatus(),
    created: faker.date.recent(),
    imageURLs: imageURLs(),
    fileURLs: imageURLs(),
    referenceId: faker.random.numeric(5)
  }
};

// export const seedAuthUsers = `
// curl -g \
// -X POST \
// -H "Content-Type: application/json" \
// -d '{"query":"mutation seedAuthUsers { seedAuthUsers {operationResult operationType status statusCode}}"}' \
// http://localhost:3250/tech1-pro-infrastructure/us-central1/api/graphql
// `;

export const curl = `
curl -g \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJhY2NvdW50SWQiOiJNdGZDOWJlVUJXUDkxaFhXZjBtNCIsImVtYWlsIjoiZGV2YW50ZS5rbGVpbjExQHlhaG9vLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aF90aW1lIjoxNjYxMzk1NzczLCJ1c2VyX2lkIjoiSmdjcEM4SHZCQ29uZHpwTEVRNkhXRm9uN1ZJSiIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGV2YW50ZS5rbGVpbjExQHlhaG9vLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9LCJpYXQiOjE2NjE0NDIzNTcsImV4cCI6MTY2MTQ0NTk1NywiYXVkIjoidGVjaDEtcHJvLWluZnJhc3RydWN0dXJlIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RlY2gxLXByby1pbmZyYXN0cnVjdHVyZSIsInN1YiI6IkpnY3BDOEh2QkNvbmR6cExFUTZIV0ZvbjdWSUoifQ." \
-H "Accept-Encoding": "gzip, deflate, br" \
-H "Accept": "application/json" \
-H "Connection": "keep-alive" \
-d '{"query":"mutation addProspect($prospectInput: ProspectInput!) {addProspect(prospectInput: $prospectInput) {prospectLastAdded { id displayName firstname lastname email phone type } } }","variables":{"prospectInput":{"displayName":"Turner and Sons","email":"Johnpaul_Brakus69@gmail.com","phone":"561-895-1831","address":{"streetAddress":"940 Amalia Stravenue","city":"Klingberg","state":"Wisconsin","zipcode":"42750-0880"},"firstname":"Alisha","lastname":"Jones","type":"INDIVIDUAL"}}}'
-d '{"mutation":"mutation addProspect(prospectInput:){account {id}}"}' \
http://localhost:3250/tech1-pro-infrastructure/us-central1/api/graphql
`;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3250/tech1-pro-infrastructure/us-central1/api/graphql',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJhY2NvdW50SWQiOiJsNjdJcllUQm9aZUNQYnNEWkJmTCIsImVtYWlsIjoibXlyYV9rb2VscGluQHlhaG9vLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYXV0aF90aW1lIjoxNjYxNDY3OTczLCJ1c2VyX2lkIjoibWJKZGFIY1JmZHQxMmpDdkowWllzenhzU0lFUSIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibXlyYV9rb2VscGluQHlhaG9vLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9LCJpYXQiOjE2NjE1MzkxODIsImV4cCI6MTY2MTU0Mjc4MiwiYXVkIjoidGVjaDEtcHJvLWluZnJhc3RydWN0dXJlIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RlY2gxLXByby1pbmZyYXN0cnVjdHVyZSIsInN1YiI6Im1iSmRhSGNSZmR0MTJqQ3ZKMFpZc3p4c1NJRVEifQ.",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "application/json"
  }
});

const testRequest = async () => {
  const data = `{"query": mutation seedAuthUsers { 
    seedAuthUsers {
      operationResult 
      operationType 
      status 
      statusCode
    } 
  }`;
  return await axiosInstance.request({
    method: 'post',
    data
  });
}

const sendRequest = async (data: string, method = 'get') => {
  return await axiosInstance.request({
    method,
    data: `{"query": ${data} }`
  })
}

const postRequest = async (data: string) => {
  return await sendRequest(data, 'post');
}

const log = (text: any) => console.log(JSON.stringify(text, null, 2));

const logResData = (res: any) => {
  log(res.data);
}

export const seedAuthUsers = async () => {
  return await postRequest(`
    mutation seedAuthUsers { 
      seedAuthUsers {
        operationResult 
        operationType 
        status 
        statusCode
      } 
    }`
  );
}

export const seedTeamMembers = async () => {
  const res = await postRequest(`
    mutation seedTeamMembers { 
      seedTeamMembers { 
        accountOwnerId 
        activeAccount 
        created 
        id 
        userIds 
      } 
    }`
  );
  logResData(res.data);
}

export const setActiveAccounts = async () => {
  const res = await postRequest(`
    mutation setActiveAccounts { 
      setActiveAccounts { 
        accountOwnerId 
        activeAccount 
        created 
        id 
        userIds 
      } 
    }`
  );
  logResData(res.data);
}

export const accountData = (res: any) => (res.data.data.account);

export const addBeneficiary = async (customerId: string) => {
  const res = await postRequest(`
    "mutation addBeneficiary($beneficiaryInput: BeneficiaryInput!) {
      addBeneficiary(beneficiaryInput: $beneficiaryInput) {
        beneficiaryLastAdded {
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          addressId
          created
          email
          displayName
          firstname
          lastname
          id
          phone
          prospectId
          type
        }
      }
    }",
    "variables": {
      "beneficiaryInput": ${toString(() => beneficiary(customerId))}
    }
  `);
  return accountData(res);
}

export const updateBeneficiary = async (beneficiaryId: string, beneficiaryInput: any) => {
  const res = await postRequest(`
    "mutation updateBeneficiary($beneficiaryIdInput: String!, $updateBeneficiaryInput: BeneficiaryInput!) {
      updateBeneficiary(beneficiaryIdInput: $beneficiaryIdInput, updateBeneficiaryInput: $updateBeneficiaryInput) {
        beneficiaryLastUpdated {
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          addressId
          created
          email
          displayName
          firstname
          lastname
          id
          phone
          prospectId
          type
        }
      }
    }",
    "variables": {
      "beneficiaryIdInput": ${beneficiaryId},
      "updateBeneficiaryInput": ${beneficiaryInput}
    }
  `);
  return accountData(res);
}

export const updateCustomer = async (customerIdInput: string, customerInput: any) => {
  const res = await postRequest(`
    "mutation updateCustomer($customerIdInput: String!, $updateCustomerInput: CustomerInput) {
      updateCustomer(customerIdInput: $customerIdInput, updateCustomerInput: $updateCustomerInput) {
        customerLastUpdated {
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          addressId
          created
          email
          displayName
          firstname
          lastname
          id
          phone
          prospectId
          type
        }
      }",
      "variables": {
        "customerIdInput": ${customerIdInput},
        "updateCustomerInput": ${customerInput}
      }
    }
  `);
  return accountData(res);
}

export const addCustomer = async (prospectId: string) => {
  const res = await postRequest(`
    "mutation addCustomer($customerInput: CustomerInput!) {
      addCustomer(customerInput: $customerInput) {
        customerLastAdded {
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          addressId
          created
          email
          displayName
          firstname
          lastname
          id
          phone
          prospectId
          type
        }
      }
    }",
    "variables": {
      "customerInput": ${toString(() => customer(prospectId))}
    }
  `);
  return accountData(res);
}

export const addEstimate = async (createdById: string, jobLeadId: string, prospectId: string) => {
  const res = await postRequest(`
    "mutation addEstimate($estimateInput: EstimateInput!) {
      addEstimate(estimateInput: $estimateInput) {
        estimateLastAdded {
          address {
            streetAddress
            city
            state
            zipcode
          }
          category
          created
          createdById
          expires
          fileURLs
          id
          imageURLs
          jobLeadId
          lineItems
          lineWorkServices
          notes
          number
          prospectId
          referenceId
          status
          viewedDate
        }
      }
    }",
    "variables": {
      "estimateInput": ${toString(() => estimate(createdById, jobLeadId, prospectId))}
    }
  `);
  return accountData(res);
}

export const updateEstimate = async (estimateIdInput: string, estimateInput: any) => {
  const res = await postRequest(`
    "mutation updateEstimate($estimateIdInput: String!, $updateEstimateInput: EstimateInput) {
      updateEstimate(estimateIdInput: $estimateIdInput, updateEstimateInput: $updateEstimateInput) {
        estimateLastUpdated {
          address {
            streetAddress
            city
            state
            zipcode
          }
          category
          created
          createdById
          expires
          fileURLs
          id
          imageURLs
          jobLeadId
          lineItems
          lineWorkServices
          notes
          number
          prospectId
          referenceId
          status
          viewedDate
        }
      }
    }",
    "variables": {
      "estimateIdInput": ${estimateIdInput},
      "updateEstimateInput": ${estimateInput}
    }
  `);
  return accountData(res);
}

export const addInvoice = async (createdById: string, jobId: string, customerId: string, jobLeadId: string, estimateId = undefined, proposalId = undefined, projectId = undefined,) => {
  const res = await postRequest(`
    "mutation addInvoice($invoiceInput: InvoiceInput!) {
      addInvoice(invoiceInput: $invoiceInput) {
        invoiceLastAdded {
          address {
            streetAddress
            city
            state
            zipcode
          }
          category
          created
          createdById
          expires
          fileURLs
          id
          imageURLs
          jobLeadId
          lineItems
          lineWorkServices
          notes
          number
          prospectId
          referenceId
          status
          viewedDate
        }
      }
    }",
    "variables": {
      "invoiceInput": ${toString(() => invoice(createdById, jobId, customerId, jobLeadId, estimateId, proposalId, projectId))}
    }
  `);
  return accountData(res);
}

export const updateInvoice = async (invoiceId: string, invoiceInput: any) => {
  const res = await postRequest(`
    "mutation updateInvoice($invoiceIdInput: String, $updateInvoiceInput: InvoiceInput) {
      invoiceLastUpdated(invoiceIdInput: $invoiceIdInput, updateInvoiceInput: $updateInvoiceInput) {
        address {
          streetAddress
          city
          state
          zipcode
        }
        category
        created
        createdById
        expires
        fileURLs
        id
        imageURLs
        jobLeadId
        lineItems
        lineWorkServices
        notes
        number
        prospectId
        referenceId
        status
        viewedDate
      }
    }",
    "variables": {
      "invoiceIdInput": ${invoiceId},
      "updateInvoiceInput": ${invoiceInput}
    }
  `);
  return accountData(res);
}

export const addProspect = async () => {
  const res = await postRequest(`
    "mutation addProspect($prospectInput: ProspectInput!) { 
      addProspect(prospectInput: $prospectInput) {
        id 
        prospectLastAdded { 
          id 
          displayName 
          firstname 
          lastname 
          email 
          phone 
          type 
        } 
      } 
    }",
    "variables":{
      "prospectInput": ${toString(() => prospect())}
    }`
  );
  logResData(res.data);
}

export const updateProspect = async (prospectId: string, prospectInput: any) => {
  const res = await postRequest(`
    "mutation updateProspect($prospectIdInput: String!, $updateProspectInput: ProspectInput) {
      updateProspect(prospectIdInput: $prospectIdInput, updateProspectInput: $updateProspectInput) {
        prospectLastUpdated {
          id 
          displayName 
          firstname 
          lastname 
          email 
          phone 
          type 
        }
      }
    }",
    "variables":{
      "prospectIdInput": ${prospectId},
      "updateProspectInput": ${prospectInput}
    }
  `);
  return accountData(res);
}

export const createCompanyProfile = async () => {
  const res = await postRequest(`
    "mutation createCompanyProfile($companyProfileInput: CompanyProfileInput!) { 
      createCompanyProfile(companyProfileInput: $companyProfileInput) { 
        id 
        companyProfile { 
          bio 
          companyName 
          created 
          logoURL 
          email 
          phone 
          website 
        } 
      }
    }",
    "variables":{
      "companyProfileInput": ${toString(() => companyProfile())}
    }`
  );
  console.log(accountData(res));
  return accountData(res);
}

export const updateCompanyProfile = async (companyIdInput: string, companyProfileInput: any) => {
  const res = await postRequest(`
    "mutation updateCompanyProfile($companyProfileIdInput: String!, $updateCompanyProfileInput: CompanyProfileInput) {
      updateCompanyProfile(companyProfileIdInput: $companyProfileIdInput, updateCompanyProfileInput: $updateCompanyProfileInput) {
        companyProfile {
          bio 
          companyName 
          created 
          logoURL 
          email 
          phone 
          website 
        }
      }
    }",
    "variables":{
      "companyProfileIdInput": ${companyIdInput},
      "updateCompanyProfileInput": ${companyProfileInput}
    }
  `);
  return accountData(res);
}

export const createExpense = async (userId: string, createdById: string) => {
  const res = await postRequest(`
    "mutation createExpense($expenseInput: ExpenseInput!) {
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
    }",
    "variables": {
      "expenseInput": ${toString(() => expense(userId, createdById))}
    }
  `);
  return accountData(res);
}

export const updateExpense = async (expenseId: string, expenseInput: any) => {
  const res = await postRequest(`
    "mutation updateExpense($expenseIdInput: String!, $updateExpenseInput: ExpenseInput) {
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
    }",
    "variables": {
      "expenseId": ${expenseId},
      "updateExpenseInput": ${expenseInput}
    }
  `);
  return accountData(res);
}

export const createItem = async () => {
  const res = await postRequest(`
    "mutation createItem($itemInput: ItemInput!) {
      createExpense(itemInput: $itemInput) {
        itemLastAdded {
          brand
          category
          description
          id
          imageURL
          installLinks
          make
          modelNumber
          name
          orderLinks
          purchasePrice
          salePrice
          sku
          websiteReferences
        }
      }
    }",
    "variables": {
      "itemInput": ${toString(() => item())}
    }
  `);
  return accountData(res);
}

export const updateItem = async (itemId: string, itemInput: any) => {
  const res = await postRequest(`
    "mutaion updateItem($itemIdInput: String!, $updateItemInput: ItemInput) {
      updateItem(itemIdInput: $itemIdInput, updateItemInput: $updateItemInput) {
        itemLastUpdated {
          brand
          category
          description
          id
          imageURL
          installLinks
          make
          modelNumber
          name
          orderLinks
          purchasePrice
          salePrice
          sku
          websiteReferences
        }
      }
    }",
    "variables": {
      "itemIdInput": ${itemId},
      "updateItemInput": ${itemInput}
    }
  `);
  return accountData(res);
}

export const createJob = async (customerId: string, createdById: string, jobLeadId: string, proposalId?: string, estimateId?: string, assignedToId?: string, jobManagerId?: string) => {
  const res = await postRequest(`
    "mutation createJob($jobInput: JobInput!) {
      createJob(jobInput: $jobInput) {
        jobLastAdded {
          customerId
          id
          status
          createdById
          definedWorkScope
          jobLeadId
          imageURLs
          fileURLs
          category
          addressId
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          requestedWorkScope
          created
          assignToId
          startDate
          completedDate
          estimateId
          proposalId
          poNumber
          jobManagerId
          lineItems
          lineWorkServices
        }
      }
    }",
    "variables": {
      "jobInput": ${toString(() => job(customerId, createdById, jobLeadId, proposalId, estimateId, assignedToId, jobManagerId))}
    }`
  );
  return accountData(res);
}

export const updateJob = async (jobIdInput: string, jobInput: any) => {
  const res = postRequest(`
    "mutation updateJob($jobIdInput: String!, $updateJobInput: JobInput) {
      updateJob(jobIdInput: $jobIdInput, updateJobInput: $updateJobInput) {
        jobLastUpdated {
          customerId
          id
          status
          createdById
          definedWorkScope
          jobLeadId
          imageURLs
          fileURLs
          category
          addressId
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          requestedWorkScope
          created
          assignToId
          startDate
          completedDate
          estimateId
          proposalId
          poNumber
          jobManagerId
          lineItems
          lineWorkServices
        }
      }
    }",
    "variables": {
      "jobIdInput": ${jobIdInput},
      "updateJobInput": ${jobInput}
    }
  `);
  return accountData(res);
}

export const createJobLead = async (prospectId: string) => {
  const res = await postRequest(`
    "mutation createJobLead($jobLeadInput: JobLeadInput!) {
      createJobLead(jobLeadInput: $jobLeadInput) {
        jobLeadLastAdded {
          id
          prospectId
          leadSource
          status
          createdById
          category
          addressId
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          requestedWorkScope
          created
          referenceId
        }
      }
    }",
    "variables": {
      "jobLeadInput": ${toString(() => jobLead(prospectId))}
    }`
  );
  return accountData(res);
}

export const updateJobLead = async (jobLeadId: string, jobLeadInput: any) => {
  const res = await postRequest(`
    "mutation updateJobLead($jobLeadIdInput: String!, $updateJobLeadInput: JobLeadInput) {
      updateJobLead(jobLeadIdInput: $jobLeadIdInput, updateJobLeadInput: $updateJobLeadInput) {
        jobLeadLastUpdated {
          id
            prospectId
            leadSource
            status
            createdById
            category
            addressId
            address { 
              streetAddress 
              city 
              state 
              zipcode 
            }
            requestedWorkScope
            created
            referenceId
        }
      }
    }",
    "variables": {
      "jobLeadIdInput": ${jobLeadId},
      "updateJobLeadInput": ${jobLeadInput}
    }
  `);
  return accountData(res);
}

export const createPayment = async (createdById: string) => {
  const res = await postRequest(`
    "mutation createPayment($paymentInput: PaymentInput!) {
      createPayment(paymentInput: $paymentInput) {
        paymentLastAdded {
          id
          created
          to
          referenceId
          referenceType
          createdById
          note
        }
      }
    }",
    "variables": {
      "paymentInput": ${toString(() => payment(createdById))}
    }
  `);
  return accountData(res);
}

export const updatePayment = async (paymentId: string, paymentInput: any) => {
  const res = await postRequest(`
    "mutation updatePayment($paymentIdInput: String!, $updatePaymentInput: PaymentInput) {
      updatePayment(paymentIdInput: $paymentIdInput, updatePaymentInput: $updatePaymentInput) {
        paymentLastUpdated {
          id
          created
          to
          referenceId
          referenceType
          createdById
          note
        }
      }
    }",
    "variables": {
      "paymentIdInput": ${paymentId},
      "updatePaymentInput": ${paymentInput}
    }
  `);
  return accountData(res);
}

export const createProposal = async (propsectId: string, createdById: string, jobLeadId: string) => {
  const res = await postRequest(`
    "mutation createProposal($proposalInput: ProposalInput!) {
      createProposal(proposalInput: $proposalInput) {
        proposalLastAdded {
          id
          prospectId
          status
          category
          requestedWorkScope
          definedWorkScope
          createdById
          address {
            streetAddress
            city
            state
            zipcode
          }
          jobLeadId
          imageURLs
          fileURLs
          referenceId
          created
          lineWorkServices
        }
      }
    }",
    "variables": {
      "proposalInput": ${toString(() => proposal(propsectId, createdById, jobLeadId))}
    }
  `);
  return accountData(res);
}

export const updateProposal = async (proposalId: string, proposalInput: any) => {
  const res = await postRequest(`
    "mutation updateProposal($proposalIdInput: String!, $updateProposalInput: ProposalInput) {
      updateProposal(proposalIdInput: $proposalIdInput, updateProposalInput: $updateProposalInput) {
        proposalLastUpdated {
          id
          prospectId
          status
          category
          requestedWorkScope
          definedWorkScope
          createdById
          address {
            streetAddress
            city
            state
            zipcode
          }
          jobLeadId
          imageURLs
          fileURLs
          referenceId
          created
          lineWorkServices
        }
      }
    }",
    "variables": {
      "proposalIdInput": ${proposalId},
      "updateProposalInput": ${proposalInput}
    }
  `);
  return accountData(res);
}

export const createWorkService = async () => {
  const res = await postRequest(`
    "mutation createWorkService($workServiceInput: WorkServiceInput!) {
      createWorkService(workServiceInput: $workServiceInput) {
        workServiceLastAdded {
          category
          costGuides
          created
          description
          id
          lineItems
          name
          notes
          salePrice
          timeToComplete
        }
      }
    }",
    "variables": {
      "workServiceInput": ${toString(() => workService())}
    }
  `);
  return accountData(res);
}

export const updateWorkService = async (workServiceId: string, workServiceInput: any) => {
  const res = await postRequest(`
    "mutation updateWorkService($workServiceIdInput: String!, $updateWorkServiceInput: WorkServiceInput!) {
      updateWorkService(workServiceIdInput: $workServiceIdInput, updateWorkServiceInput: $updateWorkServiceInput) {
        workServiceLastUpdated {
          category
          costGuides
          created
          description
          id
          lineItems
          name
          notes
          salePrice
          timeToComplete
        }
      }
    }",
    "variables": {
      "workServiceIdInput": ${workServiceId},
      "updateWorkServiceInput": ${workServiceInput}
    }
  `);
  return accountData(res);
}

export const removeBeneficiary = async (beneficiaryId: string) => {
  const res = await postRequest(`
    "mutation removeBeneficiary($beneficiaryIdInput: String!) {
      removeBeneficiary(beneficiaryIdInput: $beneficiaryIdInput) {
        beneficiaries {
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          addressId
          created
          email
          displayName
          firstname
          lastname
          id
          phone
          prospectId
          type
        }
      }
    }",
    "variables": {
      "beneficiaryIdInput": ${beneficiaryId}
    }
  `);
  return accountData(res);
}

export const removeCompanyProfile = async (companyId: string) => {
  const res = await postRequest(`
    "mutation removeCompanyProfile($companyIdInput: CompanyIdInput) {
      removeCompanyProfile(companyIdInput: $companyIdInput) {
        accountId: id
      }
    }",
    "variables": {
      "companyIdInput": ${companyId}
    }
  `);
  return accountData(res);
}

export const removeCustomer = async (customerId: string) => {
  const res = await postRequest(`
    "mutation removeCustomer($customerIdInput: String!) {
      removeCustomer(customerIdInput: $customerIdInput) {
        customers {
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          addressId
          created
          email
          displayName
          firstname
          lastname
          id
          phone
          prospectId
          type
        }
      }
    }",
    "variables": {
      "customerIdInput": ${customerId}
    }
  `);
  return accountData(res);
}

export const removeEstimate = async (estimateId: string) => {
  const res = await postRequest(`
    "mutation removeEstimate($estimateIdInput: String!) {
      removeEstimate(estimateIdInput: $estimateIdInput) {
        estimates {
          address {
            streetAddress
            city
            state
            zipcode
          }
          category
          created
          createdById
          expires
          fileURLs
          id
          imageURLs
          jobLeadId
          lineItems
          lineWorkServices
          notes
          number
          prospectId
          referenceId
          status
          viewedDate
        }
      }
    }",
    "variables": {
      "estimateIdInput": ${estimateId}
    }
  `);
  return accountData(res);
}

export const removeExpense = async (expenseId: string) => {
  const res = await postRequest(`
    "mutation removeExpense($expenseIdInput: String!) {
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
    }",
    "variables": {
      "expenseIdInput": ${expenseId}
    }
  `);
  return accountData(res);
}

export const removeInvoice = async (invoiceId: string) => {
  const res = await postRequest(`
    "mutation removeInvoice($invoiceIdInput: String!) {
      removeInvoice(invoiceIdInput: $invoiceIdInput) {
        invoices {
          address {
            streetAddress
            city
            state
            zipcode
          }
          category
          created
          createdById
          expires
          fileURLs
          id
          imageURLs
          jobLeadId
          lineItems
          lineWorkServices
          notes
          number
          customerId
          referenceId
          status
          viewedDate
        }
      }
    }",
    "variables": {
      "invoiceIdInput": ${invoiceId}
    }
  `);
  return accountData(res);
}

export const removeItem = async (itemId: string) => {
  const res = await postRequest(`
    "mutation removeItem($itemIdInput: String!) {
      removeItem(itemIdInput: $itemIdInput) {
        items {
          brand
          category
          description
          id
          imageURL
          installLinks
          make
          modelNumber
          name
          orderLinks
          purchasePrice
          salePrice
          sku
          websiteReferences
        }
      }
    }",
    "variables": {
      "itemIdInput": ${itemId}
    }
  `);
  return accountData(res);
}

export const removeJob = async (jobId: string) => {
  const res = await postRequest(`
    "mutation removeJob($jobIdInput: String!) {
      removeJob(jobIdInput: $jobIdInput) {
        jobs {
          customerId
          id
          status
          createdById
          definedWorkScope
          jobLeadId
          imageURLs
          fileURLs
          category
          addressId
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          requestedWorkScope
          created
          assignToId
          startDate
          completedDate
          estimateId
          proposalId
          poNumber
          jobManagerId
          lineItems
          lineWorkServices
        }
      }
    }",
    "variables": {
      "jobIdInput": ${jobId}
    }
  `);
  return accountData(res);
}

export const removeJobLead = async (jobLeadId: string) => {
  const res = postRequest(`
    "mutation removeJobLead($jobLeadIdInput: String!) {
      removeJobLead(jobLeadIdInput: $jobLeadIdInput) {
        jobLeads {
          id
          prospectId
          leadSource
          status
          createdById
          category
          addressId
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          }
          requestedWorkScope
          created
          referenceId
        }
      }
    }",
    "variables": {
      "jobLeadIdInput": ${jobLeadId}
    }
  `);
  return accountData(res);
}

export const removePayment = async (paymentId: string) => {
  const res = await postRequest(`
    "mutation removePayment($paymentIdInput: String!) {
      removePayment(paymentIdInput: $paymentIdInput) {
        payments {
          id
          created
          to
          referenceId
          referenceType
          createdById
          note
        }
      }
    }",
    "variables": {
      "paymentIdInput": ${paymentId}
    }
  `);
  return accountData(res);
}

export const removeProposal = async (proposalId: string) => {
  const res = await postRequest(`
    "mutation removeProposal($proposalIdInput: String!) {
      proposals {
        id
          prospectId
          status
          category
          requestedWorkScope
          definedWorkScope
          createdById
          address {
            streetAddress
            city
            state
            zipcode
          }
          jobLeadId
          imageURLs
          fileURLs
          referenceId
          created
          lineWorkServices
      }
    }",
    "variables": {
      "proposalIdInput": ${proposalId}
    }
  `);
  return accountData(res);
}

export const removeProspect = async (prospectId: string) => {
  const res = await postRequest(`
    "mutation removeProspect($prospectIdInput: String!) {
      removeProspect(prospectIdInput: $prospectIdInput) {
        prospects {
          id 
          displayName 
          firstname 
          lastname 
          email 
          phone 
          type 
        }
      }
    }",
    "variables": {
      "prospectIdInput": ${prospectId}
    }
  `);
  return accountData(res);
}

export const removeWorkService = async (workServiceId: string) => {
  const res = await postRequest(`
    "mutation removeWorkService($workServiceIdInput: String!) {
      removeWorkService(workServiceIdInput: $workServiceIdInput) {
        workServices {
          category
          costGuides
          created
          description
          id
          lineItems
          name
          notes
          salePrice
          timeToComplete
        }
      }
    }",
    "variables": {
      "workServiceIdInput": ${workServiceId}
    }
  `);
  return accountData(res);
}

export const getActiveAccounts = async () => {
  const res = await postRequest(`
    query activeAccounts { 
      activeAccounts { 
        accountOwnerId 
        activeAccount 
        created 
        id 
        userIds 
      } 
    }`
  );
  logResData(res.data);
}

export const getCompanyProfile = async () => {
  const res = await postRequest(`
    query accountCompanyProfile { 
      account { 
        accountId: id 
        companyProfile { 
          bio 
          companyName 
          created 
          logoURL 
          email 
          phone 
          website 
          address { 
            streetAddress 
            city 
            state 
            zipcode 
          } 
        } 
      } 
    }`
  );
  return accountData(res)
}

export const getProspects = async () => {
  const res = await postRequest(`
    query accountProspects { 
      account { 
        accountId: id 
        prospects { 
          id 
          displayName 
          firstname 
          lastname 
          email 
          phone 
          type 
        } 
      } 
    }`
  );
  return accountData(res).prospects
}

export const toString = (cb: () => any) => {
  const obj = cb();
  const data = JSON.stringify(obj);
  log(data);
  return data;
}

if (false) {
  testRequest();
  getProspects();
  createCompanyProfile();
  addProspect();
}

const populateDatabase = async () => {

  try {
    // log('Seeding Auth Users...');
    // await seedAuthUsers();
    // log('Seeding Auth Users Complete');
    // log('Seeding Team Members');
    // await seedTeamMembers();
    // log('Seeding Team Members Complete');
    // log('Setting Active Accounts');
    // await setActiveAccounts();
    // log('Setting Active Account Complete');
    // log('Retrieving Active Accounts');
    // await getActiveAccounts();
    // log('Retrieving Active Accounts Complete');
    // log('Seeding New Prospect');
    // await addProspect();
    // log('Seeding New Prospect Complete');
    // log('Adding Company Profile');
    // await createCompanyProfile();
    // log('Adding Company Profile Complete');
    // log('Get Company Profile');
    // const companyProfile = await getCompanyProfile();
    // log('Get Company Profile Complete');
    // log(companyProfile);
    // log('Get Prospects');
    // const prospects = await getProspects();
    // log('Get Prospects Complete');
    // log(prospects);
    // log({ "prospectInput": prospect() });
    // const propsects = await getProspects();
    await testRequest();

  } catch (error) {
    throw error;
  }
}

if (true) {
  populateDatabase().catch(e => log(e));
}



