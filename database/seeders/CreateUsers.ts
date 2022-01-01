import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: 'admin@gmail.com',
        username: 'admin',
        password: 'admin',
        role: 'admin',
        name: 'Admin',
      },
      {
        email: 'normal@gmail.com',
        username: 'normal',
        password: 'normal',
        role: 'normal',
        name: 'Breno Martins',
      },
    ])
  }
}
