import ICreateJobDTO from "../dtos/ICreateJobDTO";
import Job from "../infra/typeorm/entities/Job";

export default interface IJobRepository{
  create(data: ICreateJobDTO): Promise<Job>
  findOne(id: string): Promise<Job | undefined>
  find(): Promise<Job[]>
}

