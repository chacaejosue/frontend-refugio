export type RefugeImpact = {
  year: number;
  animals: number;
  detail: string;
};

export type RefugeProfile = {
  name: string;
  responsible: string;
  location: string;
  description: string;
  contact: string;
  whatsappUrl: string;
  impact: RefugeImpact[];
  supportOptions: string[];
  socialNetworks: {
    instagram: { name: string; url: string };
    facebook: { name: string; url: string | null };
  };
};
