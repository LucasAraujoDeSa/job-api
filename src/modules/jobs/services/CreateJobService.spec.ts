import FakeJobRepository from "../repositories/fakes/FakeJobRepository"
import CreateJobService from "./CreateJobService"

describe('createJob', () =>{

  let fakeJobRepository : FakeJobRepository
  let createJobService : CreateJobService


  beforeEach(()=>{
    fakeJobRepository = new FakeJobRepository()
    createJobService = new CreateJobService(fakeJobRepository)
  })

  it('Should return Error if no title provided', async ()=>{
    const data = {
      title: '',
      description: 'same_description',
      company_name: 'same_company_name',
      contact: 'same_contact',
    }

    expect(createJobService.execute(data)).rejects.toEqual(new Error('title is missing'))
  })

  it('Should return Error if no description provided', async ()=>{
    const data = {
      title: 'same_title',
      description: '',
      company_name: 'same_company_name',
      contact: 'same_contact',
    }


    expect(createJobService.execute(data)).rejects.toEqual(new Error('description is missing'))
  })

  it('Should return Error if no description provided', async ()=>{
    const data = {
      title: 'same_title',
      description: 'same_description',
      company_name: '',
      contact: 'same_contact',
    }


    expect(createJobService.execute(data)).rejects.toEqual(new Error('company_name is missing'))
  })

  it('Should return Error if no description provided', async ()=>{
    const data = {
      title: 'same_title',
      description: 'same_description',
      company_name: 'same_company_name',
      contact: '',
    }

    expect(createJobService.execute(data)).rejects.toEqual(new Error('contact is missing'))
  })

  it('Should be able to create a Job', async ()=>{
    const data = {
      title: 'same_title',
      description: 'same_description',
      company_name: 'same_company_name',
      contact: 'same_contact',
    }

    const job = await createJobService.execute(data)
    expect(job).toHaveProperty('title')
  })
})
