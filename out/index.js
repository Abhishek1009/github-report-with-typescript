"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var userService = new GithubApiService_1.GithubApiService();
userService.getUserInfo("Abhishek1009", function (user) {
    userService.getRepos("Abhishek1009", function (repos) {
        user.repos = repos;
        console.log(user);
    });
});
