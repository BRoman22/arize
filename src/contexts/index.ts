import { createContext } from 'react';
import { enLangConfig } from '../constants';

export const LangContext = createContext({} as typeof enLangConfig);
