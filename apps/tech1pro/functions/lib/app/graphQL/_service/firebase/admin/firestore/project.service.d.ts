import { Project, ProjectInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class ProjectService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "projects";
    constructor(firestoreSvc: FirestoreService);
    addProject(accountId: string, projectInput: ProjectInput): Promise<Project>;
    getLastAddedProject(accountId: string): Promise<Project>;
    getLastUpdatedProject(accountId: string): Promise<Project>;
    getProjects(accountId: string): Promise<Project[]>;
    getProjectById(accountId: string, projectId: string): Promise<Project>;
    getProjectsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Project[]>;
    getProjectsWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Project[]>;
    getProjectsWhereArrayIncludes(accountId: string, whereArrayProperty: string, containsValue: string): Promise<Project[]>;
    updateProject(accountId: string, projectId: string, projectInput: ProjectInput): Promise<Project>;
    deleteProject(accountId: string, projectId: string): Promise<FirebaseFirestore.WriteResult>;
}
