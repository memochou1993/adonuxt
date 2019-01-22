'use strict'

const Database = use('Database')

class UserController {
  async show() {
    const users = await Database.table('users')
    return users
  }
}

module.exports = UserController
