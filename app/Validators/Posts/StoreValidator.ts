import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'title' })]),
    slug: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'slug' })]),
    content: schema.string({ trim: true }),
  })

  public messages = {}
}
