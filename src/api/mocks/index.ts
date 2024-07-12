import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getMonthCanceledOrdersMock } from "./get-month-canceled-orders-mock";
import { getMonthOrderAmountMock } from "./get-month-orders-amount-mock";
import { getMonthRevenueMock } from "./get-month-revenue-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { updateProfileMock } from "./update-profile-mock";
import { getProfileMock } from "./get-profile-mock";
import { getManagedRestaurantsMock } from "./get-managed-restaurants-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { approveOrderMock } from "./approve-order-mock";
import { deliverOrderMock } from "./deliver-order-mock";
import { dispatchOrderMock } from "./dispatch-order-mock";
import { cancelOrderMock } from "./cancel-order-mock";

export const worker = setupWorker(
    signInMock,
    registerRestaurantMock,
    getMonthCanceledOrdersMock,
    getMonthOrderAmountMock,
    getMonthRevenueMock,
    getDayOrdersAmountMock,
    getDailyRevenueInPeriodMock,
    getPopularProductsMock,
    getManagedRestaurantsMock,
    updateProfileMock,
    getProfileMock,
    getOrdersMock,
    getOrderDetailsMock,
    approveOrderMock,
    deliverOrderMock,
    dispatchOrderMock,
    cancelOrderMock
);

export async function enableMSW() {
    if (env.MODE !== "test") {
        return
    }
    await worker.start();
}