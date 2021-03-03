import FakeJobRepository from "../repositories/fakes/FakeJobRepository"
import ShowJobService from "./ShowJobService"
import CreateJobService from "./CreateJobService"
import { uuid } from "uuidv4"

describe('ListJob', () =>{

  let fakeJobRepository : FakeJobRepository
  let showJobService : ShowJobService
  let createJobService : CreateJobService


  beforeEach(()=>{
    fakeJobRepository = new FakeJobRepository()
    showJobService = new ShowJobService(fakeJobRepository)
    createJobService = new CreateJobService(fakeJobRepository)
  })

  it('should be able to return a error if no job exist', async ()=>{

    await expect(showJobService.execute(uuid())).rejects.toEqual(new Error('job do not exist'))
  })

  it('should be able to return a jobs', async ()=>{
    const data = {
      title: 'same_title',
      description: 'same_description',
      company_name: 'same_company_name',
      contact: 'same_contact',
    }

    const job = await createJobService.execute(data)

    const showJob = await showJobService.execute(job.id)

    expect(showJob.title).toEqual(job.title)
  })

})
