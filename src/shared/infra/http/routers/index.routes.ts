import jobRoutes from "@/modules/jobs/infra/http/routes/JobRoutes.routes";
import { Router } from "express";

const router = Router()

router.get('/', (req,res)=>{
  res.send('ola user')
})

router.use('/job', jobRoutes)

export default router
