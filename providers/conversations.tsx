const conversations = [{
  id: '1',
  contactId: '1',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "John Doe",
  lastMessage: "Hello",
  unreadMessages: 1,
  lastMessageTime: "10:00 a.m.",
}, {
  id: '2',
  contactId: '2',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Jane Doe",
  lastMessage: "Hi",
  unreadMessages: 0,
  lastMessageTime: "9:00 a.m.",
}, {
  id: '3',
  contactId: '3',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Alice Queen",
  lastMessage: "Hey",
  unreadMessages: 2,
  lastMessageTime: "8:00 a.m.",
}, {
  id: '4',
  contactId: '4',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Bob Smith",
  lastMessage: "Sup",
  unreadMessages: 0,
  lastMessageTime: "7:00 a.m.",
}, {
  id: '5',
  contactId: '5',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Charlie Brown",
  lastMessage: "Yo",
  unreadMessages: 0,
  lastMessageTime: "6:00 a.m.",
}, {
  id: '6',
  contactId: '6',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "David Smith",
  lastMessage: "Hola",
  unreadMessages: 0,
  lastMessageTime: "5:00 a.m.",
}, {
  id: '7',
  contactId: '7',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Eve Brown",
  lastMessage: "Bonjour",
  unreadMessages: 0,
  lastMessageTime: "4:00 a.m.",
}, {
  id: '8',
  contactId: '8',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Frank Adam",
  lastMessage: "Ciao",
  unreadMessages: 0,
  lastMessageTime: "3:00 a.m.",
}, {
  id: '9',
  contactId: '9',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Grace Carter",
  lastMessage: "Hallo this is a large message that should be truncated",
  unreadMessages: 0,
  lastMessageTime: "2:00 a.m.",
}, {
  id: '10',
  contactId: '10',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Heidi Ewing",
  lastMessage: "Salut",
  unreadMessages: 0,
  lastMessageTime: "1:00 a.m.",
}, {
  id: '11',
  contactId: '11',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Ivy Brown",
  lastMessage: "Namaste",
  unreadMessages: 0,
  lastMessageTime: "12:00 a.m.",
}, {
  id: '12',
  contactId: '12',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Jack Doe",
  lastMessage: "Privet",
  unreadMessages: 0,
  lastMessageTime: "11:00 PM",
}, {
  id: '13',
  contactId: '13',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Kate Smith",
  lastMessage: "Nihao",
  unreadMessages: 0,
  lastMessageTime: "10:00 PM",
}, {
  id: '14',
  contactId: '14',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Liam Brown",
  lastMessage: "Konnichiwa",
  unreadMessages: 0,
  lastMessageTime: "9:00 PM",
}, {
  id: '15',
  contactId: '15',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Mia Doe",
  lastMessage: "Annyeonghaseyo",
  unreadMessages: 0,
  lastMessageTime: "8:00 PM",
}, {
  id: '16',
  contactId: '16',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Noah Smith",
  lastMessage: "Sawasdee",
  unreadMessages: 0,
  lastMessageTime: "7:00 PM",
}, {
  id: '17',
  contactId: '17',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Olivia Brown",
  lastMessage: "Salam",
  unreadMessages: 0,
  lastMessageTime: "6:00 PM",
}, {
  id: '18',
  contactId: '18',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Peter Doe",
  lastMessage: "Shalom",
  unreadMessages: 0,
  lastMessageTime: "5:00 PM",
}, {
  id: '19',
  contactId: '19',
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Quinn Smith",
  lastMessage: "Zdravstvuyte",
  unreadMessages: 0,
  lastMessageTime: "4:00 PM",
}]

export type Conversation = {
  id: string;
  avatar: string;
  name: string;
  lastMessage: string;
  unreadMessages: number;
  lastMessageTime: string;
}

export const getConversations = async (): Promise<Conversation[]> => {
  return conversations;
}