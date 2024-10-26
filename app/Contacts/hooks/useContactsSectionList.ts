import { useThemeColor } from "@/hooks/useThemeColor";
import { Contact, getContacts } from "@/providers/contacts";
import { useEffect, useState } from "react";

export const useContactsSectionList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res);
    });
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
