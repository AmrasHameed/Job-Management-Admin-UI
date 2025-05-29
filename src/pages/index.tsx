import JobListing from '@/components/JobListing';
import Navigation from '@/components/Navigation';
import SearchAndFilter from '@/components/SearchAndFilter';
import { useCallback, useState } from 'react';

interface JobFilters {
  searchQuery: string;
  location: string | null;
  jobType: string | null;
  salary: [number, number];
}

const DEFAULT_FILTERS: JobFilters = {
  searchQuery: "",
  location: null,
  jobType: null,
  salary: [20, 80],
};

const isEqual = (obj1: JobFilters, obj2: JobFilters): boolean => {
    return (
      obj1.searchQuery === obj2.searchQuery &&
      obj1.location === obj2.location &&
      obj1.jobType === obj2.jobType &&
      obj1.salary[0] === obj2.salary[0] &&
      obj1.salary[1] === obj2.salary[1]
    );
  };

export default function Home() {
  const [filters, setFilters] = useState<JobFilters>(DEFAULT_FILTERS);
  
  const handleFilterChange = useCallback((newFilters: JobFilters): void => {
    setFilters((prevFilters) => {
      if (isEqual(prevFilters, newFilters)) {
        return prevFilters;
      }
      console.log("Filters changed:", newFilters);
      return newFilters;
    });
  }, []);
  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <Navigation />
      <SearchAndFilter onFilterChange={handleFilterChange} />
      <JobListing filters={filters}/>
    </div>
  );
}
