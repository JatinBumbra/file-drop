export interface IAppContext {
  files: FilesState;
  uploadState: UploadState;
  uploadFiles: (files: File[]) => Promise<void>;
  closeUploadDialog: () => void;
}

export interface UploadState {
  showProgressDialog: boolean;
  isUploading: boolean;
  files: (FileItem & { uploaded: number })[];
}

export interface FilesState {
  loading: boolean;
  data: FileItem[];
}

export interface FileItem {
  name: string;
  size: number;
  uploadDate?: string;
  downloadUrl?: string;
}
