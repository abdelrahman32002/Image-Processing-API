import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test Endpoints', () => {
  it('Main endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('Api Endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('Image Endpoint', async () => {
    const response = await request.get(
      '/api/images/?name=attack&width=100&height=100'
    );
    expect(response.status).toBe(200);
  });
});
