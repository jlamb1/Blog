const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function directoryShouldNotHaveWhitespace() {
  const dirsWithWhitespace = fs
    .readdirSync(path.resolve(__dirname, './content/blog'))
    .filter(a => a.includes(' '));
  if (dirsWithWhitespace.length < 1) {
    return;
  }
  dirsWithWhitespace.forEach(i => console.error(chalk.red(`⚠️ The post "${i}" contains spaces which is not allowed`)));
  process.exit(1);
}

directoryShouldNotHaveWhitespace();
