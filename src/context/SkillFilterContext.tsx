import { createContext, useContext, useState, ReactNode } from 'react';

interface SkillFilterContextType {
    selectedSkill: string | null;
    setSelectedSkill: (skill: string | null) => void;
}

const SkillFilterContext = createContext<SkillFilterContextType | undefined>(undefined);

export const SkillFilterProvider = ({ children }: { children: ReactNode }) => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    return (
        <SkillFilterContext.Provider value={{ selectedSkill, setSelectedSkill }}>
            {children}
        </SkillFilterContext.Provider>
    );
};

export const useSkillFilter = () => {
    const context = useContext(SkillFilterContext);
    if (!context) {
        throw new Error('useSkillFilter must be used within a SkillFilterProvider');
    }
    return context;
};
