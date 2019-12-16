import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Card from '../Card.js';
import cards from '../../data/card-data.json';

let testCard = {
    id: 1,
    ...cards.cards[0]
};

describe('Card', () => {
    test('that it matches the existing snapshot', () => {
        const {asFragment} = render(
            <Card cardData={testCard}></Card>
        )

        expect(asFragment()).toMatchSnapshot();
    });
    afterEach(cleanup);
});