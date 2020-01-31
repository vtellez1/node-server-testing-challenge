const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server.js');

describe('Users router', function(){
    it('runs the test', function(){
        expect(true).toBe(true);
    })

    describe('GET /', function(){
    it('should return JSON', function(){
        return request(server).get('/api/users')
        .then(res => { 
            expect(res.type).toMatch(/json/i);
            })
        })
    })

    describe('delete /:id', function(){

    it('should return text', function(){
        return request(server).delete('/:id')
        .then(res => { 
            expect(res.type).toMatch(/text/i);
            })
        })

    it('should return 204', async() => {
        await db('users').delete({id: 1})
        let res = await request(server)
        .delete('/api/users/1')
        .send({id:1})
        .set('Content-Type', 'application/json');
        expect(res.status).toBe(204);
        })
    })
})