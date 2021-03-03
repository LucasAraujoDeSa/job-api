import { Router } from "express";
import JobController from "../controllers/JobController";

const jobController = new JobController()

const jobRoutes = Router()

jobRoutes.post('/', jobController.create)
jobRoutes.get('/', jobController.index)
jobRoutes.get('/:id', jobController.show)


export default jobRoutes
