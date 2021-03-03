import { inject, injectable } from "tsyringe";
import Job from "../infra/typeorm/entities/Job";
import IJobRepository from "../repositories/IJobRepository";


@injectable()
export default class ListJobService{
  constructor(
    @inject('JobRepository')
    private jobRepository: IJobRepository
  ){}

  public async execute(): Promise<Job[]>{

    const job = await this.jobRepository.find()

    return job
  }
}
