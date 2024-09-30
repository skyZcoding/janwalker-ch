import type File from "./File";

export default interface Directory {
  name: string;
  active: boolean;
  files: File[];
  subdirectories: Directory[];
}
