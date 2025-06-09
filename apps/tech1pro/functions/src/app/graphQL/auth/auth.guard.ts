import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { FirebaseError } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { FirebaseAuthService } from '../_service/firebase/admin/auth.service';
import { FirestoreService } from '../_service/firebase/admin/firestore.service';
import { AccountService } from '../_service/firebase/admin/firestore/account.service';
import { BeneficiaryService } from '../_service/firebase/admin/firestore/beneficiary.service';
import { CompanyProfileService } from '../_service/firebase/admin/firestore/company-profile.service';
import { CustomerService } from '../_service/firebase/admin/firestore/customer.service';
import { EstimateService } from '../_service/firebase/admin/firestore/estimate.service';
import { ExpenseService } from '../_service/firebase/admin/firestore/expense.service';
import { InvoiceService } from '../_service/firebase/admin/firestore/invoice.service';
import { ItemService } from '../_service/firebase/admin/firestore/item.service';
import { JobLeadService } from '../_service/firebase/admin/firestore/job-lead.service';
import { JobService } from '../_service/firebase/admin/firestore/job.service';
import { PaymentService } from '../_service/firebase/admin/firestore/payment.service';
import { ProjectService } from '../_service/firebase/admin/firestore/project.service';
import { ProposalService } from '../_service/firebase/admin/firestore/proposal.service';
import { ProspectService } from '../_service/firebase/admin/firestore/prospect.service';
import { UserService } from '../_service/firebase/admin/firestore/user.service';
import { WorkServiceService } from '../_service/firebase/admin/firestore/work-service.service';
import { FirebaseAuthIDTokenExpiredException } from '../_service/firebase/exception/firebase-auth-id-token-expired.exception';

const AUTH_RESOLVER_NAME = 'authresolver';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly accountsSvc: AccountService,
    private readonly beneficiariesSvc: BeneficiaryService,
    private readonly companyProfileSvc: CompanyProfileService,
    private readonly customersSvc: CustomerService,
    private readonly estimatesSvc: EstimateService,
    private readonly expensesSvc: ExpenseService,
    private readonly firebaseAuthSvc: FirebaseAuthService,
    private readonly firestoreSvc: FirestoreService,
    private readonly invoicesSvc: InvoiceService,
    private readonly itemsSvc: ItemService,
    private readonly jobLeadsSvc: JobLeadService,
    private readonly jobsSvc: JobService,
    private readonly paymentsSvc: PaymentService,
    private readonly projectsSvc: ProjectService,
    private readonly proposalsSvc: ProposalService,
    private readonly prospectsSvc: ProspectService,
    private readonly workServicesSvc: WorkServiceService,
    private readonly userSvc: UserService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    console.log('AUTH_GUARD');
    console.log(ctx.getArgs());
    console.log(ctx.getArgByIndex(2).res)
    let activate: boolean;

    console.log(`${ctx.getClass().name} -> ${ctx.getHandler().name}`);
    console.log(process.env.NODE_ENV)
    ctx.getContext().auth = this.firebaseAuthSvc;

    if (this.#isDev(ctx)) {
      this.#ctxAddServices(ctx);
    }

    if (AUTH_RESOLVER_NAME === ctx.getClass().name.toLowerCase()
      || this.#isDev(ctx)) {
      activate = true;
    } else {
      let decodedToken: DecodedIdToken;
      try {
        decodedToken = await this.firebaseAuthSvc.verifyIdToken(ctx.getArgByIndex(2).token);
        if (!decodedToken.accountId || !decodedToken.uid) return false;
        const user = await this.userSvc.getUserById(decodedToken.uid);
        console.log(`User Id: ${user.id}`);
        console.log(`Account Id: ${decodedToken.accountId}`);
        //temporary remove once accounts context is implemented
        ctx.getContext().accountId = decodedToken.accountId;
        ctx.getContext().user = user;
        this.#ctxAddServices(ctx);
        activate = true;
      } catch (error) {
        activate = false;
        const firebaseError: FirebaseError = error as FirebaseError;
        console.log(firebaseError.toJSON());
        throw new FirebaseAuthIDTokenExpiredException(error as FirebaseError);
      }
    }
    return activate;
  }

  #services() {
    return {
      accounts: this.accountsSvc,
      beneficiaries: this.beneficiariesSvc,
      companyProfile: this.companyProfileSvc,
      customers: this.customersSvc,
      estimates: this.estimatesSvc,
      expenses: this.expensesSvc,
      db: this.firestoreSvc,
      invoices: this.invoicesSvc,
      items: this.itemsSvc,
      jobLeads: this.jobLeadsSvc,
      jobs: this.jobsSvc,
      payments: this.paymentsSvc,
      projects: this.projectsSvc,
      proposals: this.proposalsSvc,
      prospects: this.prospectsSvc,
      users: this.userSvc,
      workServices: this.workServicesSvc
    }
  }

  #isDev(ctx: GqlExecutionContext) {
    return process.env.NODE_ENV === 'development' && this.#unauthenticatedGraphQLHandlers().includes(ctx.getHandler().name.toLowerCase());
  }

  #unauthenticatedGraphQLHandlers() {
    return ["seedteammembers", "setactiveaccounts", "activeaccounts", "allaccounts", "userprofilebyid", "accountswithusersgreaterthan"];
  }

  #ctxAddServices(ctx: GqlExecutionContext) {
    for (const [key, value] of Object.entries(this.#services())) {
      ctx.getContext()[key] = value
    }
  }

}