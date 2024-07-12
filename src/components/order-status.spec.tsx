<<<<<<< HEAD
import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
=======
import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
    it("should display the right when the order status is Pending", () => {
        //Pending
        const wrapper = render(<OrderStatus status="pending" />);

        const statusText = wrapper.getByText("Pendente");
        const badgeEl = wrapper.getByTestId('badge');
        expect(statusText).toBeInTheDocument();
        expect(badgeEl).toHaveClass("bg-slate-400");
    });

    it("should display the right text when the order status is Canceled", () => {
        //Canceled
        const wrapper = render(<OrderStatus status="canceled" />);

        const statusText = wrapper.getByText("Cancelado");
        const badgeEl = wrapper.getByTestId('badge');
        expect(statusText).toBeInTheDocument();
        expect(badgeEl).toHaveClass("bg-rose-500");
    });

    it("should display the right text when the order status is delivering", () => {
        //delivering
        const wrapper = render(<OrderStatus status="delivering" />);

        const statusText = wrapper.getByText("Em entrega");
        const badgeEl = wrapper.getByTestId('badge');
        expect(statusText).toBeInTheDocument();
        expect(badgeEl).toHaveClass("bg-amber-500");
    });

    it("should display the right text when the order status is processing", () => {
        //processing
        const wrapper = render(<OrderStatus status="processing" />);

        const statusText = wrapper.getByText("Em preparo");
        const badgeEl = wrapper.getByTestId('badge');
        expect(statusText).toBeInTheDocument();
        expect(badgeEl).toHaveClass("bg-amber-500");
    });

    it("should display the right text when the order status is delivered", () => {
        //processing
        const wrapper = render(<OrderStatus status="delivered" />);

        const statusText = wrapper.getByText("Entregue");
        const badgeEl = wrapper.getByTestId('badge');
        expect(statusText).toBeInTheDocument();
        expect(badgeEl).toHaveClass("bg-emerald-500");
    });
})
>>>>>>> testes
