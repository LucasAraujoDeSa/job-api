import { inject, injectable } from "tsyringe";
import Job from "../infra/typeorm/entities/Job";
import IJobRepository from "../repositories/IJobRepository";

interface Request{
  title: string,
  description: string,
  company_name: string,
  contact: string,
}

@injectable()
export default class CreateJobService{
  constructor(
    @inject('JobRepository')
    private jobRepository: IJobRepository
  ){}

  public async execute({
    title,
    description,
    company_name,
    contact
  }:Request): Promise<Job>{

    const data = {
      title,
      description,
      company_name,
      contact
    }

    if(!title){
      throw new Error('title is missing')
    }
    if(!description){
      throw new Error('description is missing')
    }
    if(!company_name){
      throw new Error('company_name is missing')
    }
    if(!contact){
      throw new Error('contact is missing')
    }

    const job = await this.jobRepository.create(data)

    return job
  }
}
