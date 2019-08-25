import { Repo } from "./repo";

export class User{
    id:number;
    login : string;
    fullName:string;
    repoCount:number;
    followerCount:number;
    repos?: Repo[];
    constructor(userResponse:any){
        this.id=userResponse.id;
        this.login=userResponse.login;
        this.fullName=userResponse.name;
        this.repoCount=userResponse.public_repos;
        this.followerCount=userResponse.followers;

    }
}