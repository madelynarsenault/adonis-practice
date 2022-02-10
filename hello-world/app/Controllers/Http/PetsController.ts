import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PetsController {
    public async index(ctx: HttpContextContract) {
        return 'Get Pets';
    }

    public async store({ request, response}: HttpContextContract){
        response.status(201)
        return {
            message: 'POST pet',
            body: request.body()
        }
    }

    public async show({ params}: HttpContextContract){
        return 'GET pet: ' + params.id;
    }

    public async update({ params}: HttpContextContract){
        return 'PUT pet' + params.id;
    }

    public async destroy({ params}: HttpContextContract){
        return 'DELETE pet' + params.id;
    }
}
