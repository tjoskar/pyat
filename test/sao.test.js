const path = require('path')
const test = require('ava')
const sao = require('sao')

test('Generate same files for ts module as last time', async t => {
  const template = {
    fromPath: path.join(__dirname, '..', 'ts-module')
  }
  const stream = await sao.mockPrompt(template, {
    name: 'my-project',
    description: 'My fine module',
    author: 'Oskar',
    email: 'some@thing.com',
    githubUsername: 'tjoskar',
    keywords: 'nice fantastic awesome'
  })

  t.snapshot(stream.fileList, 'Generated files')
})

test('Generate same answers for ts module as last time', async t => {
  const template = {
    fromPath: path.join(__dirname, '..', 'ts-module')
  }
  const stream = await sao.mockPrompt(template, {
    name: 'my-project',
    description: 'My fine module',
    author: 'Oskar',
    email: 'some@thing.com',
    githubUsername: 'tjoskar',
    keywords: 'nice fantastic awesome'
  })

  t.snapshot(stream.meta.answers, 'Answers')
})
