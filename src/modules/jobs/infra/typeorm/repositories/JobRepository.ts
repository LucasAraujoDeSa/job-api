import IJobRepository from "@/modules/jobs/repositories/IJobRepository";
import { getRepository, Like, Repository } from "typeorm";
import Job from "../entities/Job";
import ICreateJobDTO from "../../../dtos/ICreateJobDTO"
import ListJobService from "@/modules/jobs/services/ListJobsService";

export default class JobRepository implements IJobRepository{
  private jobRepository : Repository<Job>
  constructor(){
    this.jobRepository = getRepository(Job)
  }

  public async find(): Promise<Job[]>{
    const jobs = await this.jobRepository.find()

    return jobs
  }

  public async findOne(id:string): Promise<Job | undefined>{
    const job = await this.jobRepository.findOne(id)

    return job
  }

  public async create({
    title,
    description,
    company_name,
    contact
  }: ICreateJobDTO): Promise<Job>{
    const job = this.jobRepository.create({
      title,
      description,
      company_name,
      contact
    })

    await this.jobRepository.save(job)

    return job
  }
}
