import React from 'react'
import AuctionItem from './AuctionItem'
import { fireEvent, render } from '@testing-library/react'

describe('AuctionItem', () => {

    it('should add given auction to cart', () => {
        // ARRANGE
        const auction = {
            id: 1, title: 'Hello', imgURL: '', price: 0, description: ''
        };
        const spyOnMoveToCart = jest.fn();
        const { container } = render(<AuctionItem {...auction} moveToCart={spyOnMoveToCart} />);
        // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
        const button = container.querySelector('.btn.btn-primary') as HTMLButtonElement;
        // ACT
        fireEvent.click(button);

        // ASSERT
        expect(spyOnMoveToCart).toHaveBeenCalled();
        expect(spyOnMoveToCart).toHaveBeenCalledWith(auction)
    })

});
