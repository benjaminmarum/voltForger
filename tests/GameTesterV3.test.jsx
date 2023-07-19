import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Game from '../src/components/GameV2'

// Test if the component renders without crashing:
test('renders Game', () => {
    render(<Game />);
    const game = screen.getByTestId('game');
    expect(game).toBeInTheDocument();
});
