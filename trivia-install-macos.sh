#!/bin/zsh

projects=(
  "git@github.com:Vyachowski/trivia-webapp.git"
)

for project in "${projects[@]}"; do
  git clone $project
done

echo "Project 'Trivia' was successfully downloaded"

cd trivia-webapp

npm i

echo "Project 'Trivia' was successfully installed"
