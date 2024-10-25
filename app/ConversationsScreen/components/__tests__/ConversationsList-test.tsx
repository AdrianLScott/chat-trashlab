import React from 'react';
import { render } from '@testing-library/react-native';
import { Conversation } from '@/providers/conversations';
import { ConversationsList } from '../ConversationsList';
import { CONVERSATIONS_LIST_LOADER_TEST_ID } from '../contants';

describe('ConversationsList', () => {
  const mockConversations: Conversation[] = [
    {
      id: '1',
      avatar: 'avatar1.png',
      lastMessage: 'Hello',
      lastMessageTime: '10:00 AM',
      name: 'John Doe',
      unreadMessages: 2,
    },
    {
      id: '2',
      avatar: 'avatar2.png',
      lastMessage: 'Hi',
      lastMessageTime: '11:00 AM',
      name: 'Jane Doe',
      unreadMessages: 0,
    },
  ];

  it('shows loading indicator when isLoading is true', () => {
    const { getByTestId } = render(<ConversationsList conversations={[]} isLoading={true} />);
    expect(getByTestId(CONVERSATIONS_LIST_LOADER_TEST_ID)).toBeTruthy();
  });

  it('shows empty component when conversations is empty and isLoading is false', () => {
    const { getByText } = render(<ConversationsList conversations={[]} isLoading={false} />);
    expect(getByText('No messages yet.')).toBeTruthy();
  });

  it('renders list of conversations correctly', () => {
    const { getByText } = render(<ConversationsList conversations={mockConversations} isLoading={false} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Doe')).toBeTruthy();
  });

  it('renders header component', () => {
    const { getByText } = render(<ConversationsList conversations={mockConversations} isLoading={false} />);
    expect(getByText('Conversations')).toBeTruthy();
  });
});