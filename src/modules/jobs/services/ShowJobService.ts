import { inject, injectable } from "tsyringe";
import Job from "../infra/typeorm/entities/Job";
import IJobRepository from "../repositories/IJobRepository";



@injectable()
export default class ShowJobService{
  constructor(
    @inject('JobRepository')
    private jobRepository: IJobRepository
  ){}

  public async execute(id: string): Promise<Job>{

    const job = await this.jobRepository.findOne(id)

    if(!job){
      throw new Error('job do not exist')
    }


    return job
  }
}
