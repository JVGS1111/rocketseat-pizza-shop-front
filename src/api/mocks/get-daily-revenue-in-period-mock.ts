import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http
    .get<never, never, GetDailyRevenueInPeriodResponse>("/metrics/daily-receipt-in-period", () => {

        return HttpResponse.json([
            { date: "01/01/2024", receipt: 222 },
            { date: "02/01/2024", receipt: 333 },
            { date: "03/01/2024", receipt: 444 },
            { date: "04/01/2024", receipt: 222 },
            { date: "05/01/2024", receipt: 333 },
            { date: "06/01/2024", receipt: 111 },
            { date: "07/01/2024", receipt: 424 }
        ]);
    })