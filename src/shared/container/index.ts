import JobRepository from "@/modules/jobs/infra/typeorm/repositories/JobRepository";
import IJobRepository from "@/modules/jobs/repositories/IJobRepository";
import { container } from "tsyringe";

container.registerSingleton<IJobRepository>('JobRepository', JobRepository)
