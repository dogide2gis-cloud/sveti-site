// Должности базы знаний. Руководитель (leader) видит все статьи.
export const ROLES = [
  { id: 'leader', label: 'Руководитель' },
  { id: 'reception', label: 'Админ ресепшен' },
  { id: 'online', label: 'Онлайн-админ' },
  { id: 'trainer', label: 'Тренер' }
] as const;
export const roleLabel = (id: string) => ROLES.find((r) => r.id === id)?.label ?? id;
export const SECTIONS = ['Общее', 'Регламенты', 'Скрипты продаж', 'Шпаргалки', 'Fitbase', 'Обучение', 'Статьи'];
export const sectionOrder = (s: string) => { const i = SECTIONS.indexOf(s); return i < 0 ? 99 : i; };
export const dateRu = (d?: Date) => d ? d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
