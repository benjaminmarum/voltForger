import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import GameObject from '../src/components/GameObjectV2'

// Test if the component renders without crashing:
test('renders GameObject', () => {
    render(<GameObject x={0} y={0} sprite="sprite.png" />);
    const gameObject = screen.getByTestId('game-object');
    expect(gameObject).toBeInTheDocument();
});