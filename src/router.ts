import { Router } from 'express'

const router = Router();

router.get('/', (req,res) => {
    res.send('Desde metodo GET')
})

router.post('/', (req,res) => {
    res.json('Desde metodo POST')
})

router.put('/', (req,res) => {
    res.json('Desde metodo PUT')
})

router.patch('/', (req,res) => {
    res.json('Desde metodo PATCH')
})

router.delete('/', (req,res) => {
    res.json('Desde metodo DELETE')
})

export default router