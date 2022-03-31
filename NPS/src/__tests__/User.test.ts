import request from 'supertest'
import {app} from "../app";
import createConnection from '../database'

describe("Users",  ()=>{
    beforeAll(async () => {
        const conncection = await createConnection()
        await conncection.runMigrations()
    })
    it("should be able to create a new user", async () =>{
        const response = await request(app).post('/users').send({
            email: 'henrique@test33adadsadsd3.com',
            name:'Henriqueeeeasdsfdsfsd Assissss'
        })
        expect(response.status).toBe(201)
    })

    it("should not be able to create a user with exists email", async () =>{
        const response = await request(app).post('/users').send({
            email: 'henriqueAssis@test.com',
            name:'Henrique Assis'
        })
        expect(response.status).toBe(400)
    })
})

