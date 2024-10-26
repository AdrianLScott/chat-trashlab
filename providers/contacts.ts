export type Contact = {
  id: string;
  avatar: string;
  name: string;
  lastOnline: string;
};

const contacts: Contact[] = [
  {
    id: "0",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Aaron Johnson",
    lastOnline: "10:00 a.m.",
  },
  {
    id: "1",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Alice Smith",
    lastOnline: "10:00 a.m.",
  },
  {
    id: "2",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Bob Doe",
    lastOnline: "9:00 a.m.",
  },
  {
    id: "3",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Charlie Brown",
    lastOnline: "8:00 a.m.",
  },
  {
    id: "4",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "David Smith",
    lastOnline: "7:00 a.m.",
  },
  {
    id: "5",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Eve Brown",
    lastOnline: "6:00 a.m.",
  },
  {
    id: "6",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Frank Adam",
    lastOnline: "5:00 a.m.",
  },
  {
    id: "7",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Grace Carter",
    lastOnline: "4:00 a.m.",
  },
  {
    id: "8",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Hannah Queen",
    lastOnline: "3:00 a.m.",
  },
  {
    id: "9",
    avatar: `https://avatar.iran.liara.run/public?${Math.random()}`,
    name: "Ivy King",
    lastOnline: "2:00 a.m.",
  },
];

export const getContacts = async (): Promise<Contact[]> => {
  return contacts;
};
