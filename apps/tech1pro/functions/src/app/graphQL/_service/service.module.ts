import { Global, Module } from '@nestjs/common';
import { FirebaseAdminService } from './firebase/admin.service';
import { FirebaseAuthService } from './firebase/admin/auth.service';
import { FirestoreService } from './firebase/admin/firestore.service';
import { AccountService } from './firebase/admin/firestore/account.service';
import { ActivityService } from './firebase/admin/firestore/activity.service';
import { AddressService } from './firebase/admin/firestore/address.service';
import { BeneficiaryService } from './firebase/admin/firestore/beneficiary.service';
import { CommentService } from './firebase/admin/firestore/comment.service';
import { CompanyProfileService } from './firebase/admin/firestore/company-profile.service';
import { CustomerService } from './firebase/admin/firestore/customer.service';
import { EstimateService } from './firebase/admin/firestore/estimate.service';
import { ExpenseService } from './firebase/admin/firestore/expense.service';
import { InvoiceService } from './firebase/admin/firestore/invoice.service';
import { ItemService } from './firebase/admin/firestore/item.service';
import { JobLeadService } from './firebase/admin/firestore/job-lead.service';
import { JobService } from './firebase/admin/firestore/job.service';
import { NoteService } from './firebase/admin/firestore/note.service';
import { PaymentService } from './firebase/admin/firestore/payment.service';
import { ProjectService } from './firebase/admin/firestore/project.service';
import { ProposalService } from './firebase/admin/firestore/proposal.service';
import { ProspectService } from './firebase/admin/firestore/prospect.service';
import { UserService } from './firebase/admin/firestore/user.service';
import { WorkServiceService } from './firebase/admin/firestore/work-service.service';

@Global()
@Module({
  providers: [
    AccountService,
    ActivityService,
    AddressService,
    BeneficiaryService,
    CommentService,
    CompanyProfileService,
    CustomerService,
    EstimateService,
    ExpenseService,
    FirebaseAdminService,
    FirebaseAuthService,
    FirestoreService,
    InvoiceService,
    ItemService,
    JobLeadService,
    JobService,
    NoteService,
    PaymentService,
    ProjectService,
    ProposalService,
    ProspectService,
    UserService,
    WorkServiceService
  ],
  exports: [
    AccountService,
    ActivityService,
    AddressService,
    BeneficiaryService,
    CommentService,
    CompanyProfileService,
    CustomerService,
    EstimateService,
    ExpenseService,
    FirebaseAdminService,
    FirebaseAuthService,
    FirestoreService,
    InvoiceService,
    ItemService,
    JobLeadService,
    JobService,
    NoteService,
    PaymentService,
    ProjectService,
    ProposalService,
    ProspectService,
    UserService,
    WorkServiceService
  ]
})
export class ServiceModule { }
