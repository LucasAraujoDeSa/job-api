import FakeJobRepository from "../repositories/fakes/FakeJobRepository"
import ListJobService from "./ListJobsService"
import CreateJobService from "./CreateJobService"

describe('ListJob', () =>{

  let fakeJobRepository : FakeJobRepository
  let listJobService : ListJobService
  let createJobService : CreateJobService


  beforeEach(()=>{
    fakeJobRepository = new FakeJobRepository()
    listJobService = new ListJobService(fakeJobRepository)
    createJobService = new CreateJobService(fakeJobRepository)
  })

  it('should be able to return all jobs', async ()=>{
    const data = {
      title: 'same_title',
      description: 'same_description',
      company_name: 'same_company_name',
      contact: 'same_contact',
    }

    const job1 = await createJobService.execute(data)

    const job2 = await createJobService.execute(data)

    const job3 = await createJobService.execute(data)

    const jobList = await listJobService.execute()

    expect(jobList).toEqual([job1,job2,job3])
  })

})
