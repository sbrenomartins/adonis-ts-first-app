import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { login, password } = request.all()

    const token = await auth.attempt(login, password, {
      expiresIn: '1 day',
    })

    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
