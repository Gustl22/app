import ReactNative, { Alert, Platform } from 'react-native';
import { all, take, takeEvery, put, call, select } from 'redux-saga/effects';

import Firebase from '../../utils/firebase';
import Config from '../../constants/config';

import {
    setNotification,

    SETTINGS_APP_ANALYTICS,
    SETTINGS_APP_NOTIFICATIONS,
} from '../actions/settings/app';

import { getAppNotifications } from '../selectors/settings';


function* handleAnalyticsEnabledChanged(action) {
    const { enabled } = action;

    try {
        const analytics = Firebase.analytics();

        yield call([analytics, analytics.setAnalyticsCollectionEnabled], enabled);

        Alert.alert('Info', 'Firebase-Analytics ' + (enabled ? 'aktiviert' : 'deaktiviert'));
    } catch (error) {
        Alert.alert('Error', error.message);
    }
}

function* handleNotificationEnabledChanged(action) {
    const { enabled } = action;

    const messaging = Firebase.messaging();
    const iid = Firebase.iid();

    if (enabled) {
        // register for messages

        const hasPermissions = yield call([messaging, messaging.hasPermission]);

        if (!hasPermissions) {
            try {

                yield call([messaging, messaging.requestPermission]);

            } catch (error) {
                console.error(error);

                Alert.alert('Error', error.message);

                return;
            }
        }

        // subscribe for topic
        yield call([messaging, messaging.subscribeToTopic], Config.notifications.topics.automatic);

    } else {
        // unsubscribe
        yield call([messaging, messaging.unsubscribeFromTopic], Config.notifications.topics.automatic);

        yield call([iid, iid.deleteToken]);
    }
}

function* initialize() {
    const messaging = Firebase.messaging();

    const hasPermissions = yield call([messaging, messaging.hasPermission]);

    if (!hasPermissions) {
        yield put(setNotification(false));
    } else {
        const receiveNotifications = yield select(getAppNotifications);

        if (receiveNotifications) {
            // subscribe for topic
            yield call([messaging, messaging.subscribeToTopic], Config.notifications.topics.automatic);
        }
    }
}


function* watchOnAnalyticsEnabledChanged() {
    yield takeEvery(SETTINGS_APP_ANALYTICS, handleAnalyticsEnabledChanged)
}

function* watchOnNotificationEnabledChanged() {
    yield takeEvery(SETTINGS_APP_NOTIFICATIONS, handleNotificationEnabledChanged)
}


export default function* settingsSaga() {
    yield all([
        watchOnAnalyticsEnabledChanged(),

        watchOnNotificationEnabledChanged(),

        initialize(),
    ]);
}