import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./repo";
import _ from "lodash";

if (process.argv.length < 3) {
    console.log('Please pass the username as an argument');
}
else {
    let username = process.argv[2];
}

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
