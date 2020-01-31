const request = require('supertest');
const db = require('../database/dbConfig.js');
const server = require('../api/server.js');
const bcrypt = require('bcryptjs');

describe('Auth Router', function(){
    it('runs the test', function(){
        expect(true).toBe(true);
    })

 beforeEach(async ()=> {
    await db('users').truncate();
    })

    describe('POST /register', function(){
    it('should return 201', async () => {
        const user = { username: 'sam', password: 'test' };

        let res = await request(server)
        .post('/api/auth/register')
        .send(user)
        .set('Content-Type', 'application/json');
        expect(res.status).toBe(201);
        })

    it('should return text', function(){
        return request(server).post('/register')
        .then(res => { 
            expect(res.type).toMatch(/text/i);
            })
        })
    })

    describe('POST /login', function(){
    it('should return 200', async() => {

        await db('users').insert({
            username: 'sam', password: bcrypt.hashSync('test', 10)
        })

        const user = { username: 'sam', password: 'test'};

        let res = await request(server)
        .post('/api/auth/login')
        .send(user)
        .set('Content-Type', 'application/json');
        expect(res.status).toBe(200);
    })

    it('should return text', function(){
        return request(server).post('/login')
        .then(res => { 
            expect(res.type).toMatch(/text/i);
            })
        })
    })

})