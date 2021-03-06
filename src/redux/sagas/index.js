import { all } from 'redux-saga/effects';

import pagesSagas from './pages';
import searchSagas from './search';
import archiveSagas from './archive';
import articleSagas from './article';
import advertisementSagas from './advertisement';
import analyticsSagas from './analytics';
import environmentSagas from './environment';
import steadySagas from './steady';
import settingsSagas from './settings';


export default function* rootSaga() {
    yield all([
        pagesSagas(),
        searchSagas(),
        archiveSagas(),
        articleSagas(),
        advertisementSagas(),
        analyticsSagas(),
        environmentSagas(),
        steadySagas(),
        settingsSagas(),
    ]);
}