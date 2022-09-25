import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  FileItem,
  FilesState,
  IAppContext,
  UploadState,
} from '../@types/interface';

const initAppState: IAppContext = {
  files: {
    loading: true,
    data: [],
  },
  uploadState: { showProgressDialog: false, isUploading: false, files: [] },
  uploadFiles: async ([]) => {},
  closeUploadDialog: () => {},
};

const AppContext = createContext({ ...initAppState });

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<FilesState>({
    ...initAppState.files,
  });
  const [uploadState, setUploadState] = useState<UploadState>({
    ...initAppState.uploadState,
  });

  const getFiles = () => {
    setTimeout(() => {
      setFiles((prev) => ({ ...prev, loading: false }));
    }, 2000);
  };

  const uploadFiles = async (files: File[]) => {
    setUploadState((prev) => ({
      ...prev,
      showProgressDialog: true,
      files: files.map((file) => ({
        name: file.name,
        size: file.size,
        uploaded: 0,
      })),
      isUploading: true,
    }));

    await Promise.all(
      files.map(async (file, i) => {
        let done = 0;
        while (done < file.size) {
          await new Promise((resolve) => setTimeout(resolve, 0));
          done += 2048;
          setUploadState((prev) => {
            prev.files[i].uploaded =
              prev.files[i].size < done ? prev.files[i].size : done;
            return { ...prev };
          });
        }
      })
    );

    setUploadState((prev) => ({ ...prev, isUploading: false }));

    const uploaded: FileItem[] = files.map((file) => ({
      name: file.name,
      size: file.size,
      uploadDate: new Date().toISOString(),
    }));

    setFiles((prev) => ({
      ...prev,
      data: [...uploaded, ...prev.data],
    }));
  };

  const closeUploadDialog = () => {
    setUploadState((prev) => ({
      ...prev,
      files: [],
      showProgressDialog: false,
    }));
  };

  useEffect(getFiles, []);

  return (
    <AppContext.Provider
      value={{ files, uploadState, uploadFiles, closeUploadDialog }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
