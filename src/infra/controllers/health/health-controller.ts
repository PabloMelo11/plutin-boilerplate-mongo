import {
  BaseController,
  Controller,
  IHealthCheckDB,
  Inject,
  Response,
} from 'plutin'

@Controller({
  method: 'get',
  path: 'health',
})
export default class HealthController extends BaseController {
  constructor(@Inject('HealthCheckDB') private healthCheckDB: IHealthCheckDB) {
    super()
  }

  async handle(): Promise<Response> {
    const isOnline = await this.healthCheckDB.check()

    return this.success({
      ok: isOnline,
    })
  }
}
