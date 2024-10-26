import { logger } from "@/libs/logger";
import { Contact, getContacts } from "@/providers/contacts";
import { useEffect, useState } from "react";

export const useContactsSectionList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();

    // TODO: move to react-query
    async function fetchContacts() {
      try {
        const contacts = await getContacts();
        setContacts(contacts);
      } catch (e) {
        logger.error(`Error fetching contacts ${e}`);
      }
    }
  }, []);

  const sectionList = contacts.reduce<Record<string, Contact[]>>(
    (acc, contact) => {
      const firstLetter = contact.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(contact);
      return acc;
    },
    {}
  );

  const sections = Object.entries(sectionList).map(([title, data]) => ({
    title,
    data,
  }));

  return {
    sections,
  }
};
