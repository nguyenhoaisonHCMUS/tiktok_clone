import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoute = {};

export { privateRoute, publicRoute };
