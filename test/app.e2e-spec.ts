import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UserModule } from '../src/user/user.module';
import { UserDTO } from 'src/user/user.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('users CRUD', async () => {
    const server = request(app.getHttpServer());

    const currentGetAllRequest = await server.get('/user').expect(200);
    const currentSize = currentGetAllRequest.body.length;

    const newUser: UserDTO = {
      name: 'Mateo',
      surname: 'Perz',
      email: 'Mateo@test.com.ar',
      password: 'asd123',
    };
    const newUserRequest = await server
      .post('/user')
      .type('form')
      .send(newUser)
      .expect(201);
    expect(newUserRequest.body.name).toBe(newUser.name);
    expect(newUserRequest.body.id).toBe(`${currentSize}`);
    const postNewRequest = await server.get('/user').expect(200);
    const postNewSize = postNewRequest.body.length;
    expect(postNewSize).toBe(currentSize + 1);

    const id = newUserRequest.body.id;
    const getUserByIdRequest = await server.get(`/user/${id}`).expect(200);
    expect(getUserByIdRequest.body.id).toBe(id);

    const updateUser: UserDTO = {
      id: newUserRequest.body.id,
      name: 'Mateo Aguilera',
      surname: 'Perz',
      email: 'Mateo@test.com.ar',
      password: 'asd123',
    };
    const updateUserRequest = await server
      .put(`/user/${updateUser.id}`)
      .expect(200)
      .type('form')
      .send(updateUser);
    expect(updateUserRequest.body.name).toEqual(updateUser.name);

    await server.delete(`/user/${updateUser.id}`).expect(200);
    const postDeleteGetAllRequest = await server.get('/user').expect(200);
    const postDeleteSize = postDeleteGetAllRequest.body.length;
    expect(postDeleteSize).toBe(currentSize);
  });
});
