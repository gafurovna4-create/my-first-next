export type Student = {
  id: number;
  name: string;
  group: string;
  email: string;
  grade: number;
};

export const students: Student[] = [
  { id: 1, name: "Aziz Karimov", group: "Frontend-12", email: "aziz@example.com", grade: 92 },
  { id: 2, name: "Madina Yusupova", group: "Frontend-12", email: "madina@example.com", grade: 88 },
  { id: 3, name: "Sardor Rahimov", group: "Frontend-13", email: "sardor@example.com", grade: 75 },
  { id: 4, name: "Dilnoza Tosheva", group: "Frontend-13", email: "dilnoza@example.com", grade: 95 },
  { id: 5, name: "Jasur Aliyev", group: "Frontend-12", email: "jasur@example.com", grade: 81 },
];

export function getStudentById(id: number): Student | undefined {
  return students.find((student) => student.id === id);
}