import React from 'react';
import { SavedCatsContextType } from '../utils/types';

export const SavedCatsContext = React.createContext<SavedCatsContextType | null>(null);

