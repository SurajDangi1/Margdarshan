import React, { createContext, useState, useContext } from 'react';


interface FilterContextInterface {
  selectedValues: {
    isFemale: string | null;
    scholarshipStartMonth: string | null;
    scholarshipEndMonth: string | null;
    fatherYearlyIncome: number | null;
    twelvePercentage: number | null;
  };
  updateSelectedValues: (values: {
    isFemale?: string | null;
    scholarshipStartMonth?: string | null;
    scholarshipEndMonth?: string | null;
    fatherYearlyIncome?: number | null;
    twelvePercentage?: number | null;
  }) => void;
}

    
const initialFilterContext: FilterContextInterface = {
  selectedValues: {
    isFemale: null,
    scholarshipStartMonth: null,
    scholarshipEndMonth: null,
    fatherYearlyIncome: null,
    twelvePercentage: null,
  },
  updateSelectedValues: () => {},
};


const FilterContext = createContext(initialFilterContext);


const useFilterContext = () => useContext(FilterContext);

export { FilterContext, useFilterContext };
