import { Project, ProjectInput } from "@graphql-schema/";
import { Injectable } from "@nestjs/common";
import { FirebaseError } from "firebase-admin";
import { createdISOStringDate, Tech1ProAccountsPath } from "../../util/util";
import { FirestoreService } from "../firestore.service";
import { throwFirestoreServerException } from "./_error/_util";

interface ProjectCreated extends Omit<Project, "created"> {
  created: string;
}

interface ProjectUpdated extends Omit<Project, "updated"> {
  updated: string;
}

const createProject = ({
  address,
  addressId,
  category,
  created,
  createdById,
  customerId,
  definedWorkScope,
  jobLeadId,
  status,
  activities,
  comments,
  fileURLs,
  imageURLs,
  notes,
  requestedWorkScope
}: ProjectInput) => {
  return {
    address,
    addressId,
    category,
    created,
    createdById,
    customerId,
    definedWorkScope,
    jobLeadId,
    status,
    activities,
    comments,
    fileURLs,
    imageURLs,
    notes,
    requestedWorkScope
  } as Project;
}

@Injectable()
export class ProjectService {

  readonly collectionName = 'projects';

  constructor(
    private readonly firestoreSvc: FirestoreService,
  ) { }

  #collectionPath(accountId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/${this.collectionName}`
  }

  async addProject(accountId: string, projectInput: ProjectInput) {
    try {
      const { address, comments, activities, ...rest } = createProject(projectInput);

      return await this.firestoreSvc.addDocument<Project>(this.#collectionPath(accountId), {
        addressId: (address && address.id) ? address.id : undefined,
        ...rest,
        created: createdISOStringDate()
      }) as Project;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getLastAddedProject(accountId: string) {
    try {
      const sortProjectsByCreatedDate = await this.firestoreSvc.getLastDocumentAdded<ProjectCreated>(this.#collectionPath(accountId));
      return sortProjectsByCreatedDate[0] as Project;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getLastUpdatedProject(accountId: string) {
    try {
      const sortProjectsByUpdatedDate = await this.firestoreSvc.getLastDocumentUpdated<ProjectUpdated>(this.#collectionPath(accountId));
      return sortProjectsByUpdatedDate[0] as Project;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProjects(accountId: string) {
    try {
      return await this.firestoreSvc.getDocuments<Project>(this.#collectionPath(accountId)) as Project[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProjectById(accountId: string, projectId: string) {
    try {
      return await this.firestoreSvc.getDocument<Project>(`${this.#collectionPath(accountId)}/${projectId}`) as Project;
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError))
    }
  }

  async getProjectsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined) {
    try {
      return await this.firestoreSvc.getDocumentsCreatedBetween(accountId, afterISODateString, beforeISODateString) as Project[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProjectsWhereEqual(accountId: string, whereProperty: string, whereValue: any) {
    try {
      return await this.firestoreSvc.getDocumentsWhereEqual(this.#collectionPath(accountId), whereProperty, whereValue) as Project[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async getProjectsWhereArrayIncludes(accountId: string, whereArrayProperty: string, containsValue: string) {
    try {
      return await this.firestoreSvc.getDocumentWhereArrayIncludes(this.#collectionPath(accountId), whereArrayProperty, containsValue) as Project[];
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async updateProject(accountId: string, projectId: string, projectInput: ProjectInput) {
    try {
      const { address, comments, activities, ...rest } = createProject(projectInput);
      return await this.firestoreSvc.updateDocument<Project>(`${this.#collectionPath(accountId)}/${projectId}`, {
        ...rest,
        updated: createdISOStringDate()
      }) as Project;

    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

  async deleteProject(accountId: string, projectId: string) {
    try {
      return this.firestoreSvc.deleteDocument(`${this.#collectionPath(accountId)}`, projectId);
    } catch (error) {
      return throwFirestoreServerException((error as FirebaseError));
    }
  }

}