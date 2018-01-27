#!/usr/bin/env node

const path = require('path')
const inquirer = require('inquirer')
const sao = require('sao')

async function cli() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What do you want to call your project?'
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type of project do you want to create?',
      choices: [
        {
          name: 'Typescript module',
          value: 'ts-module'
        }
      ]
    }
  ])

  sao({
    template: path.join(__dirname, answers['type']),
    targetPath: path.resolve(answers['name'])
  })
}

cli()
