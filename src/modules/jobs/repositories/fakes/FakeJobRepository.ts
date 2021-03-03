import { uuid } from "uuidv4";
import Job from "../../infra/typeorm/entities/Job";
import IJobRepository from "../IJobRepository";


interface data{
  title: string,
  description: string,
  company_name: string,
  contact: string,
}


export default class FakeJobRepository implements IJobRepository{
  private Jobs: Job[] = []
  public async find(): Promise<Job[]>{
    const jobs = this.Jobs

    return jobs
  }

  public async findOne(id:string): Promise<Job | undefined>{

    return this.Jobs.find(job => job.id === id)
  }

  public async create({
    title,
    description,
    company_name,
    contact,
  }:data): Promise<Job>{
    const job = new Job()

    Object.assign(job, {
      id: uuid(),
      title,
      description,
      company_name,
      contact,
      created_at:Date.now(),
      updated_at:Date.now()
    })

    this.Jobs.push(job)

    return job
  }
}
