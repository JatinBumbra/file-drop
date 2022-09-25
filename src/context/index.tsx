import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FilesState, IAppContext } from '../@types/interface';

const initAppState: IAppContext = {
  files: {
    loading: true,
    data: [],
  },
};

const AppContext = createContext({ ...initAppState });

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<FilesState>({
    ...initAppState.files,
  });

  const getFiles = () => {
    setTimeout(() => {
      setFiles((prev) => ({ ...prev, loading: false }));
    }, 2000);
  };

  useEffect(getFiles, []);

  return (
    <AppContext.Provider value={{ files }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
