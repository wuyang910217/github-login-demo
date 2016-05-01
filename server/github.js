ServiceConfiguration.configurations.remove({
    service: "github"
});

ServiceConfiguration.configurations.insert({
    service: "github",
    clientId: '9357fb5499d7d1be1b22',
    loginStyle: "popup",
    secret: '2d7611b135a2d2298059f1ad07f6e72d211db1bf'
});

Accounts.onCreateUser(function (options, user) {
  var accessToken = user.services.github.accessToken,
      result,
      profile;

  result = Meteor.http.get("https://api.github.com/user", {
    headers: {"User-Agent": "Meteor/1.0"},
    params: {
      access_token: accessToken
    }
  });

  if (result.error)
    throw result.error;

  // profile = _.pick(result.data,
  //   "name",  
  //   "login",
  //   "avatar_url",
  //   "url",
  //   "company",
  //   "blog",
  //   "location",
  //   "email",
  //   "bio",
  //   "html_url");

  profile = {
    username : result.data.login,
    name : result.data.name,
    email : result.data.email,
    url : result.data.html_url,
    avatar_url : result.data.avatar_url,
  };
  user.profile = profile;
console.log(user.profile);
  return user;
});