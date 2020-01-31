const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('Users model', function(){

    describe('test environment', function(){
        it('should use the testing environment', function(){
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('add()', function(){
        beforeEach(async () => {
        await db('users').truncate();
        })
    
        it('adds the user to db', async function(){
            // call add passing the user
            await Users.add({ username: 'sam', password: 'test'});
            //open the db and see that the user is there
            const users = await db('Users');
            expect(users).toHaveLength(1);
        })

        it('should insert provided user to db', async function(){
            const users = await Users.add({ username: 'sam', password: 'test'});
            expect(users.username).toBe('sam');
        })


    })

    describe('remove()', function(){
        beforeEach(async () => {
        await db('users').truncate();
        })
    
        it('removes the user from db', async function(){
            // check that the table is empty

            // add a user

            // check that the user is there

            //delete the user
            
            // call add passing the user
        })
    })

})