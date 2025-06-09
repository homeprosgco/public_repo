export interface AppUser {
  id: string;
  chats: string[];
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  status: string;
  profilePictureUrl: string;
  lastLogin: string;
  onlineStatus: string;
  created: string;
  updated: string;
  tenant: string;
  isDeleted: boolean;
}
