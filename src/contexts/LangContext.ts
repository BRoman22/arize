import { createContext } from 'react';
import { enLangConfig } from '../constants';

const LangContext = createContext(enLangConfig);

export default LangContext;
