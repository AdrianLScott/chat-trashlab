import { conversationsStore } from "@/helpers/conversations-store";
import { getConversations } from "../../conversations";
import { Contact } from "../../contacts";
import { formatDate } from "@/providers/conversations/utils";

jest.mock("@/helpers/conversations-store");

describe("getConversations", () => {
  const mockContacts: Contact[] = [
    {
      id: "1",
      avatar: "avatar1.png",
      name: "John Doe",
      lastOnline: "10:00 a.m.",
    },
    {
      id: "2",
      avatar: "avatar2.png",
      name: "Jane Smith",
      lastOnline: "10:00 a.m.",
    },
  ];

  it("should return an empty array when storedConversations is null", async () => {
    (conversationsStore.getConversations as jest.Mock).mockResolvedValue(null);

    const result = await getConversations(mockContacts);
    expect(result).toEqual([]);
  });

  it("should return an empty array when storedConversations is empty", async () => {
    (conversationsStore.getConversations as jest.Mock).mockResolvedValue({});

    const result = await getConversations(mockContacts);
    expect(result).toEqual([]);
  });

  it("should return formatted conversations when storedConversations is valid", async () => {
    const storedConversations = {
      "1": [{ text: "Hello", timestamp: new Date("2023-01-01T12:00:00Z").getTime() }],
      "2": [{ text: "Hi", timestamp: new Date("2023-01-02T12:00:00Z").getTime() }],
    };
    (conversationsStore.getConversations as jest.Mock).mockResolvedValue(
      storedConversations
    );

    const result = await getConversations(mockContacts);
    expect(result).toEqual([
      {
        id: "2",
        contactId: "2",
        avatar: "avatar2.png",
        name: "Jane Smith",
        lastMessage: "Hi",
        unreadMessages: 0,
        lastMessageTime: formatDate(new Date("2023-01-02T12:00:00Z").getTime()),
      },
      {
        id: "1",
        contactId: "1",
        avatar: "avatar1.png",
        name: "John Doe",
        lastMessage: "Hello",
        unreadMessages: 0,
        lastMessageTime: formatDate(new Date("2023-01-01T12:00:00Z").getTime()),
      },
    ]);
  });

  it("should return an empty array when contacts array is empty", async () => {
    const storedConversations = {
      "1": [{ text: "Hello", timestamp: new Date().getTime() }],
    };
    (conversationsStore.getConversations as jest.Mock).mockResolvedValue(
      storedConversations
    );

    const result = await getConversations([]);
    expect(result).toEqual([]);
  });

  it("should filter out conversations with no matching contacts", async () => {
    const storedConversations = {
      "1": [{ text: "Hello", timestamp:  new Date("2023-01-01T12:00:00Z").getTime() }],
      "3": [{ text: "Hey", timestamp: new Date("2023-01-03T12:00:00Z").getTime() }],
    };
    (conversationsStore.getConversations as jest.Mock).mockResolvedValue(
      storedConversations
    );

    const result = await getConversations(mockContacts);
    expect(result).toEqual([
      {
        id: "1",
        contactId: "1",
        avatar: "avatar1.png",
        name: "John Doe",
        lastMessage: "Hello",
        unreadMessages: 0,
        lastMessageTime: formatDate(storedConversations["1"][0].timestamp),
      },
    ]);
  });

  it("should sort conversations by latest message time", async () => {
    const storedConversations = {
      "1": [{ text: "Hello", timestamp: "2023-01-01T12:00:00Z" }],
      "2": [{ text: "Hi", timestamp: "2023-01-02T12:00:00Z" }],
    };
    (conversationsStore.getConversations as jest.Mock).mockResolvedValue(
      storedConversations
    );

    const result = await getConversations(mockContacts);
    
    expect(result).toEqual([
      expect.objectContaining({
        id: "2",
      }),
      expect.objectContaining({
        id: "1",
      }),
    ]);
  });
});
