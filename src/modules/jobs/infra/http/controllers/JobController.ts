import CreateJobService from "@/modules/jobs/services/CreateJobService";
import ListJobService from "@/modules/jobs/services/ListJobsService";
import ShowJobService from "@/modules/jobs/services/ShowJobService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class JobController{
  public async create(req: Request, res: Response): Promise<Response>{
    const {
      title,
      description,
      company_name,
      contact
    } = req.body

    const createJobService = container.resolve(CreateJobService)

    const job = await createJobService.execute({
      title,
      description,
      company_name,
      contact
    })

    return res.status(201).json(job)
  }

  public async index(req: Request, res: Response): Promise<Response>{
    const listJobService = container.resolve(ListJobService)
    const jobs = await listJobService.execute()

    return res.status(200).json(jobs)

  }

  public async show(req: Request, res: Response): Promise<Response>{
    const {
      id
    } = req.params


    const showJobService = container.resolve(ShowJobService)

    const job = await showJobService.execute(id)

    return res.status(200).json(job)
  }
}
