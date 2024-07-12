<<<<<<< HEAD
import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '81237127123',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
=======
import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>("/me", () => {

    return HttpResponse.json({
        id: "1",
        createdAt: new Date(),
        email: "johndoe@example.com",
        phone: "83838383",
        role: "manager",
        name: "John Doe",
        updatedAt: null
    });
})
>>>>>>> testes
