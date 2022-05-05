import request from 'supertest'
import app from '../app'

test('it responds successfully to GET /offers', () => {
    return request(app).get('/offers?loanType=purchase&zipCode=123').expect(200);
});

test('it has required query params to GET /offers', async () => {
    const response = await request(app).get('/offers');

    expect(response.status).toEqual(400)
    expect(response.body[0].message).toContain("required property 'zipCode'")
});
