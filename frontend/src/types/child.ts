export type Gender = 'M' | 'F';
export type Status = 'ACTIVE' | 'INACTIVE';

export interface Child {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string; // ISO string from API
  guardianName: string;
  guardianPhone: string;
  groupId: string;
  registrationDate: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
