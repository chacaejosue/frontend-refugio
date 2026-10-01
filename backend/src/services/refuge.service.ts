import type { RefugeProfile } from '../types/refuge.types.js';

export class RefugeService {
  getProfile(): RefugeProfile {
    return {
      name: 'Refugio Angelitos de Edgar',
      responsible: 'Édgar Ortega Carrizo',
      location: 'Santa Cruz de la Sierra, Bolivia',
      description: 'Organización sin fines de lucro dedicada al rescate y cuidado animal.',
      contact: '73107078',
      whatsappUrl: 'https://wa.me/59173107078',
      impact: [
        { year: 2023, animals: 130, detail: 'Aproximadamente 30 gatos y 100 perros' },
        { year: 2024, animals: 300, detail: 'Más de 300 perros y gatos' },
        { year: 2025, animals: 400, detail: 'Más de 400 animales para adopción' },
      ],
      supportOptions: [
        'Donaciones',
        'Alimentos',
        'Medicamentos',
        'Abrigo y materiales',
        'Adopción responsable',
        'Voluntariado',
        'Compartir publicaciones',
      ],
      socialNetworks: {
        instagram: {
          name: '@refugio_angelitos_de_edgar',
          url: 'https://www.instagram.com/refugio_angelitos_de_edgar',
        },
        facebook: {
          name: 'Refugio Angelitos de EDGAR Bolivia',
          url: null,
        },
      },
    };
  }
}
