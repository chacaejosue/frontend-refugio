import { getRefugeProfile } from '../services/refuge.service';

const setText = (id: string, value: string) => {
  const element = document.querySelector<HTMLElement>(`#${id}`);
  if (element) element.textContent = value;
};

const loadProfile = async () => {
  try {
    const profile = await getRefugeProfile();
    setText('refuge-name', profile.name);
    setText('refuge-responsible', `Responsable: ${profile.responsible}`);
    setText('refuge-location', profile.location);
    setText('refuge-description', profile.description);
    setText('refuge-contact', profile.contact);

    const whatsapp = document.querySelector<HTMLAnchorElement>('#whatsapp-link');
    if (whatsapp) whatsapp.href = profile.whatsappUrl;

    const instagram = document.querySelector<HTMLAnchorElement>('#instagram-link');
    if (instagram) {
      instagram.href = profile.socialNetworks.instagram.url;
      instagram.textContent = profile.socialNetworks.instagram.name;
    }

    const facebook = document.querySelector<HTMLElement>('#facebook-name');
    if (facebook) facebook.textContent = profile.socialNetworks.facebook.name;

    const impact = document.querySelector<HTMLElement>('#impact-list');
    if (impact) {
      impact.replaceChildren(...profile.impact.map((item) => {
        const article = document.createElement('article');
        article.className = 'rounded-3xl bg-white p-6 shadow-soft';
        const year = document.createElement('p');
        year.className = 'text-xs font-bold uppercase tracking-[.2em] text-teal-800';
        year.textContent = String(item.year);
        const total = document.createElement('p');
        total.className = 'mt-3 font-display text-5xl text-ink';
        total.textContent = `+${item.animals}`;
        const detail = document.createElement('p');
        detail.className = 'mt-2 text-sm leading-6 text-slate-500';
        detail.textContent = item.detail;
        article.append(year, total, detail);
        return article;
      }));
    }
  } catch {
    // La página conserva el contenido institucional estático si la API no está disponible.
  }
};

loadProfile();
