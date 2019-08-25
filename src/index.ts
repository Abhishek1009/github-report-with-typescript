import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./repo";
import _ from "lodash";

let userService= new GithubApiService();
let userName="Abhishek1009";
userService.getUserInfo(userName,(user:User)=>{
    userService.getRepos(userName,(repos: Repo[])=>{
        // let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
        // let filteredRepos = _.take(sortedRepos, 5);
        user.repos=repos;
        console.log(user);
    });
});
