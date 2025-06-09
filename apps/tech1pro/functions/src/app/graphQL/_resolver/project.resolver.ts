import { Project } from "@graphql-schema/*";
import { Resolver, ResolveField, Parent, Context } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";
import { ActivityService } from "../_service/firebase/admin/firestore/activity.service";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
import { CommentService } from "../_service/firebase/admin/firestore/comment.service";
import { NoteService } from "../_service/firebase/admin/firestore/note.service";
import { Tech1ProAccountsPath } from "../_service/firebase/util/util";

@Resolver('Project')
export class ProjectResolver {

  #collectionPath(accountId: string, projectId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/projects/${projectId}`
  }

  constructor(
    private readonly addressSvc: AddressService,
    private readonly activitySvc: ActivityService,
    private readonly commentSvc: CommentService,
    private readonly noteSvc: NoteService
  ) { }

  @ResolveField('address')
  async address(@Parent() project: Project, @Context() ctx: ServerContext) {
    const { addressId } = project;
    return this.addressSvc.getAddress(ctx.accountId, (addressId as string));
  }

  @ResolveField('activities')
  async activities(@Parent() project: Project, @Context() ctx: ServerContext) {
    const { id } = project;
    return this.activitySvc.getActivities(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

  @ResolveField('comments')
  async comments(@Parent() project: Project, @Context() ctx: ServerContext) {
    const { id } = project;
    return this.commentSvc.getComments(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

  @ResolveField('notes')
  async notes(@Parent() project: Project, @Context() ctx: ServerContext) {
    const { id } = project;
    return this.noteSvc.getNotes(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

}