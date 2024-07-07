## Components structure

1) Components are independents block without data fetching or business logic. They are able just to render the result with given props.
2) Composites are having business logic and fetching data themselves and they are able to render components.
3) Pages providing a basic template for the sign-up page, game page, leaderboard pages.

## Git conventions

1) feat / fix / refactor/ chore / docs – simple convention for git commits.

Best solution is to have atomic commits, like:
```git
git commit -am 'feat: add new modal window for leaderboard'
```

But also appropriate:
```git
git commit -am 'feat: add new modal window for leaderboard; feat: add button component; fix: add correct main layout for mobile devices; refactor: add typecript types'
```

2) Just two branches for deploy and developing process (main and develop)
