# REDDITECH DOCUMENTATION

## BACK :

### API :

API call method :

```
const config = {
    redirectUrl: 'com.redditech://oauth2redirect/reddit',
    clientId: 'fcafYt6_OhrlQEN6NTTyUQ',
    clientSecret: '',
    scopes: ['identity', 'edit', 'subscribe', 'save', 'submit', 'read', 'modconfig', 'account', 'vote', 'flair', 'mysubreddits'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
        tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
        token: {
            Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ==',
        },
    },
};
```
This returns the user token which we needs to get the user's information, subscribed subreddits, settings...

Knowing the token we can now use reddit's api to call the user information for exemple
```
const options = {
    method: 'GET',
    url: 'https://oauth.reddit.com/api/v1/me',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: "Bearer " + global.Token,
    },
};
```

We can also use the API without needing the the token, we can for exemple get the top post on reddit like this
```
const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/' + 'top' + '.json',
    };
```

Now to get the output we need in json, after adding *options* we are going to do an *axios* call
```
axios.request(options).then(function (res) {
    console.log(res.data)
}).catch(function (error) {
    console.error(error);
});
```
We are now outputing in the console the content from our GET call from the API

Having this we can use a UseState to keep it and call it later
```
const [User, setUser] = useState(
    { all: null }
)
```

For the rest of the application we just use the different api call listed in the reddit documentation listed here : https://www.reddit.com/dev/api/

### NAVIGATION :

In our application we only have a topbar with a **Home**, **Profile** & **Search** button. The rest of the navigation is used in the content of the application like if you click on the subreddit name on post you will be redirected to the subreddit.

We are using stacks for naigation from **react-navigation**
```
<Stack.Screen name="Search" component={Search} />
<Stack.Screen name="Settings" component={Settings} />
<Stack.Screen name="Connection" component={Connection} />
<Stack.Screen name="Subreddit" component={Subreddit} options={{
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }, headerStyle: { backgroundColor: '#ffa31a' }
}} />
```
Here we have multiple Stacks, we can also see that some stacks have specific values added to them for the **Front**

To call those different Stacks in app we mostly use onPress like this
```
onPress={() => navigation.navigate('Search')}
```

## FRONT

Regarding the Front of our application we first got inspired by PornHub Colors and Logo. We decided to use their orange, our 3 colors are
> Orange: #ffa31a
> Black:  #000000
> White:  #ffffff

and our logo:

<img width="150" alt="menu" src="https://user-images.githubusercontent.com/63443236/139917946-6cbcb1e7-8ab8-4315-b152-2ff9cc8472ca.png">

For the UI/UX we Have as I said a TopBar with 3 buttons, on the Home page where we have the feed on the bottom left we have a button to choose how we want to filter our feed.

<img width="300" alt="menu" src="https://user-images.githubusercontent.com/63443236/139919405-733473b8-cc60-4937-a6d3-52aefdbb1b3e.jpg">

