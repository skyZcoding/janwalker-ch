import type File from "./File";

export default interface Directory {
  uid: string;
  name: string;
  active: boolean;
  files: File[];
  subdirectories: Directory[];
  permissions: string;
}
