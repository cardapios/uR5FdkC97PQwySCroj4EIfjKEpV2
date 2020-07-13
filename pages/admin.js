import { AdminPage, loadCMS } from '@cardapios/template/dist/admin';
import { language } from '../content/language.json';

export default AdminPage({ CMS: loadCMS(language) });
