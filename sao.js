module.exports = {
  enforceNewFolder: true,
  gitInit: true,
  npmInstall: true,
  showTip: true,
  move: {
    gitignore: '.gitignore'
  },
  prompts: {
    name: {
      message: 'Name of your project (sorry for asking you twice)',
      default: ':folderName:'
    },
    description: {
      message: 'Description:'
    },
    author: {
      message: 'What is your full name?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your email?',
      default: ':gitEmail:',
      store: true
    },
    githubUsername: {
      message: 'What is your username on github?',
      default: ':gitUser:',
      store: true
    },
    githubRepo: {
      message: 'What is going to be the github repo?',
      default: answers => `https://github.com/${answers.githubUsername}/${answers.name}`
    },
    keywords: {
      message: 'Write some keywords related to your project:'
    }
  }
}
