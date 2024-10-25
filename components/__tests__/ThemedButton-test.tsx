import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedButton } from '../ThemedButton';

jest.mock('@/hooks/useThemeColor', () => ({
  useThemeColor: jest.fn(),
}));

describe('ThemedButton', () => {
  beforeEach(() => {
    (useThemeColor as jest.Mock).mockImplementation((_, colorName) => {
      if (colorName === 'button') return 'blue';
      if (colorName === 'buttonText') return 'white';
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <ThemedButton onPress={() => {}}>Test Button</ThemedButton>
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const buttonText = 'Test Button';
    const onPressMock = jest.fn();

    const { getByText } = render(
      <ThemedButton onPress={onPressMock}>{buttonText}</ThemedButton>
    );
    const button = getByText(buttonText);
    
    fireEvent.press(button);
    
    expect(onPressMock).toHaveBeenCalled();
  });
});