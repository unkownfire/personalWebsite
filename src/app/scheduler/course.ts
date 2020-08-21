export interface Course {
  code: string;
  courseId: string;
  name: string;
  termInd?: string;
  description: string;
  prerequisites?:string;
  sections?: Array<Object>;
  
}
export interface Section {
  number: string;
  classNumber: number;
  gradBasis: string;
  acadCareer: string;
  display: string;

}
