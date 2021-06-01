export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  selectContact?: (id: number) => void;
  unselectContact?: (id: number) => void;
}
