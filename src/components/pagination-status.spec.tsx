import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import { userEvent } from "@testing-library/user-event";

describe("Pagination", () => {

    it("Should display athe right amount of pages and results", () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={() => { }}
            />
        )

        expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
        expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
    });

    it("Should be possible to navigate to the next page", async () => {
        userEvent.setup();
        const mockFn = vi.fn();
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={mockFn}
            />
        );

        const nextPageButton = wrapper.getByRole("button", {
            name: "Próxima página"
        });

        await userEvent.click(nextPageButton);
        expect(mockFn).toHaveBeenCalledWith(1);
    });


    it("Should be possible to navigate to the previous page", async () => {
        userEvent.setup();
        const mockFn = vi.fn();
        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={mockFn}
            />
        );

        const previousPageButton = wrapper.getByRole("button", {
            name: "Página anterior"
        });

        await userEvent.click(previousPageButton);
        expect(mockFn).toHaveBeenCalledWith(4);
    });

    it("Should be possible to navigate to the first page", async () => {
        userEvent.setup();
        const mockFn = vi.fn();
        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={mockFn}
            />
        );

        const firstPageButton = wrapper.getByRole("button", {
            name: "Primeira página"
        });

        await userEvent.click(firstPageButton);
        expect(mockFn).toHaveBeenCalledWith(0);
    });

    it("Should be possible to navigate to the last page", async () => {
        userEvent.setup();
        const mockFn = vi.fn();
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={mockFn}
            />
        );

        const lastPageButton = wrapper.getByRole("button", {
            name: "Última página"
        });

        await userEvent.click(lastPageButton);
        expect(mockFn).toHaveBeenCalledWith(19);
    });
})