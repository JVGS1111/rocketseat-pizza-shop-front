import { http, HttpResponse } from "msw";
import { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantsMock = http.get<never, never, GetManagedRestaurantResponse>("/managed-restaurant", () => {

    return HttpResponse.json({
        id: "custom-restaurant-id",
        createdAt: new Date(),
        name: "Pizza Shop",
        description: "Customer restaurant description",
        updatedAt: null,
        managerId: "custom-user-id",
    });
})