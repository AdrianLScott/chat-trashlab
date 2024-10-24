const conversations = [{
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "John Doe",
  lastMessage: "Hello",
  unreadMessages: 1,
  lastMessageTime: "10:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Jane Doe",
  lastMessage: "Hi",
  unreadMessages: 0,
  lastMessageTime: "9:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Alice Queen",
  lastMessage: "Hey",
  unreadMessages: 2,
  lastMessageTime: "8:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Bob Smith",
  lastMessage: "Sup",
  unreadMessages: 0,
  lastMessageTime: "7:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Charlie Brown",
  lastMessage: "Yo",
  unreadMessages: 0,
  lastMessageTime: "6:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "David Smith",
  lastMessage: "Hola",
  unreadMessages: 0,
  lastMessageTime: "5:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Eve Brown",
  lastMessage: "Bonjour",
  unreadMessages: 0,
  lastMessageTime: "4:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Frank Adam",
  lastMessage: "Ciao",
  unreadMessages: 0,
  lastMessageTime: "3:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Grace Carter",
  lastMessage: "Hallo this is a large message that should be truncated",
  unreadMessages: 0,
  lastMessageTime: "2:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Heidi Ewing",
  lastMessage: "Salut",
  unreadMessages: 0,
  lastMessageTime: "1:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Ivy Brown",
  lastMessage: "Namaste",
  unreadMessages: 0,
  lastMessageTime: "12:00 AM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Jack Doe",
  lastMessage: "Privet",
  unreadMessages: 0,
  lastMessageTime: "11:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Kate Smith",
  lastMessage: "Nihao",
  unreadMessages: 0,
  lastMessageTime: "10:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Liam Brown",
  lastMessage: "Konnichiwa",
  unreadMessages: 0,
  lastMessageTime: "9:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Mia Doe",
  lastMessage: "Annyeonghaseyo",
  unreadMessages: 0,
  lastMessageTime: "8:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Noah Smith",
  lastMessage: "Sawasdee",
  unreadMessages: 0,
  lastMessageTime: "7:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Olivia Brown",
  lastMessage: "Salam",
  unreadMessages: 0,
  lastMessageTime: "6:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Peter Doe",
  lastMessage: "Shalom",
  unreadMessages: 0,
  lastMessageTime: "5:00 PM",
}, {
  avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
  name: "Quinn Smith",
  lastMessage: "Zdravstvuyte",
  unreadMessages: 0,
  lastMessageTime: "4:00 PM",
}]

export type Conversation = {
  avatar: string;
  name: string;
  lastMessage: string;
  unreadMessages: number;
  lastMessageTime: string;
}

export const getConversations = async (): Promise<Conversation[]> => {
  return conversations;
}