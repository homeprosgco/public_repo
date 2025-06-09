import { Proposal } from "@graphql-schema/*";
import { ServerContext } from "../_interface/server-context.interface";
import { ActivityService } from "../_service/firebase/admin/firestore/activity.service";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
import { CommentService } from "../_service/firebase/admin/firestore/comment.service";
import { NoteService } from "../_service/firebase/admin/firestore/note.service";
export declare class ProposalResolver {
    #private;
    private readonly addressSvc;
    private readonly activitySvc;
    private readonly commentSvc;
    private readonly noteSvc;
    constructor(addressSvc: AddressService, activitySvc: ActivityService, commentSvc: CommentService, noteSvc: NoteService);
    address(proposal: Proposal, ctx: ServerContext): Promise<import("@graphql-schema/*").Address>;
    activities(proposal: Proposal, ctx: ServerContext): Promise<import("@graphql-schema/*").Activity[]>;
    comments(proposal: Proposal, ctx: ServerContext): Promise<import("@graphql-schema/*").Comment[]>;
    notes(proposal: Proposal, ctx: ServerContext): Promise<import("@graphql-schema/*").Note[]>;
}
