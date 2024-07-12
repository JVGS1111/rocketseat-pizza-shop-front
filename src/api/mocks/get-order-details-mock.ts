import { http, HttpResponse } from "msw";
import { GetOrderDetailsParams, GetOrderDetailsResponse } from "../get-order-details";

export const getOrderDetailsMock = http
    .get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
        "/orders/:orderId",
        ({ params }) => {

            return HttpResponse.json({
                id: params.orderId,
                customer: {
                    name: 'John Doe',
                    email: "johndoe@example.com",
                    phone: "12323434"
                },
                status: "pending",
                createdAt: new Date().toISOString(),
                totalInCents: 7800,
                orderItems: [
                    {
                        id: "order-item-1",
                        priceInCents: 1800,
                        product: {
                            name: "Pizza Pepperoni",
                        },
                        quantity: 1
                    },
                    {
                        id: "order-item-2",
                        priceInCents: 2000,
                        product: {
                            name: "Pizza Marguerita",
                        },
                        quantity: 1
                    },
                    {
                        id: "order-item-3",
                        priceInCents: 2000,
                        product: {
                            name: "Pizza 3",
                        },
                        quantity: 2
                    }
                ],
            });
        })