export interface IAppContext {
  files: FilesState;
}

export interface FilesState {
  loading: boolean;
  data: FileItem[];
}

export interface FileItem {
  name: string;
  uploadDate: string;
  size: number;
  downloadUrl?: string;
}
