import React, { PureComponent } from 'react';
import ReactNative, { Image, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import FeatherIcon from 'react-native-vector-icons/Feather';

import ModalSteadyLogin from '../../../../navigation/modals/steady/login';
import ModalStateContainer from '../../../../components/modalstatecontainer';


export class SteadyLoggedOutView extends PureComponent {

    static propTypes = {};

    modalSteadyLogin = undefined;


    refModalSteadyLogin = ref => this.modalSteadyLogin = ref;

    handleSteadyLoginPress = e => {
        this.modalSteadyLogin && this.modalSteadyLogin.open();
    };


    render() {
        const { styles, constants, t } = this.props;

        return (
            <TouchableOpacity onPress={this.handleSteadyLoginPress} style={styles.container}>
                <FeatherIcon name={'unlock'} size={20} color={constants.colors.text.negative} style={styles.locked} />
                <Text style={styles.text}>{t('adaway')}</Text>
                <Svg viewBox={'0 0 175.7 73.7'} width={100} height={40}>
                    <Path
                        fill={constants.colors.text.negative}
                        d={'M63,38.4c2.2,0.5,3.6-0.4,4.8-1.7c2.2-2.7,3.1-5.9,2.9-9.3c0-0.8-0.5-1.5-0.9-2.6 C65.5,28.6,64.1,33.3,63,38.4 M151.7,58.1c-3.6-0.6-6.9-0.6-10.1,0.5c-2.1,0.7-2.9,2.1-2.6,4.3c0.2,1.8,1,3.4,2.4,4.6 c1.6,1.4,3.5,1.5,5.2,0.1c0.6-0.5,1.1-1.1,1.6-1.7C149.7,63.6,150.8,61,151.7,58.1 M127,29.2c-0.2-0.8-0.4-1.7-0.7-2.5 c-0.9-2.4-2.6-2.7-4.3-0.8c-0.9,1-1.7,2.3-2.2,3.6c-2.1,4.6-3,9.6-3.3,14.6c-0.1,1.1,0.1,2.3,0.4,3.4c0.3,1.3,1.2,1.5,2.2,0.6 c0.6-0.6,1.2-1.4,1.6-2.2c2.6-5,4.4-10.3,6.2-15.6C126.8,29.9,126.9,29.5,127,29.2 M86.4,44.6c0.1,0.7,0.2,1.9,0.5,2.9 c0.3,1.2,1.2,1.4,2,0.5c0.7-0.8,1.3-1.7,1.8-2.6c2.5-4.8,4.1-10,5.9-15c0.7-1.9,0.3-3.5-0.5-5.1c-0.8-1.6-2.2-1.9-3.5-0.7 c-1,1-1.8,2.2-2.4,3.4C87.8,33.2,86.9,38.6,86.4,44.6 M94.7,44.5c-0.3,0.9-0.6,1.7-1,2.6c-0.5,1-0.9,2.1-1.5,3 c-3.2,5.3-7.7,4-10.6,0.8c-1.1-1.2-1.7-2.7-2.7-4.3c-0.5,0.6-1.1,1.3-1.7,1.9c-2.3,2.6-4.9,4.6-8.3,5.3c-5.6,1.2-10.2-1-12.7-6.2 c-0.1-0.3-0.3-0.6-0.6-1.1c-0.4,0.5-0.7,0.8-1,1.2c-0.7,1-1.4,1.9-2.2,2.8c-2.4,2.7-5.3,3.7-8.8,2.5c-3.6-1.3-5.6-4-5.8-7.7 c-0.1-3.5,0.2-7,0.6-10.4c0.3-2.7,0.8-5.5,1.3-8.3c-1.2-0.6-2.7-0.7-3.2-2.2c-0.3-1-0.6-1.9,0.1-3c0.8,0,1.6,0,2.5,0 c1.7-0.1,1.7-0.1,2.2-1.7c0.7-2.5,1.3-5.1,2.1-7.6C45,7.8,45,8.5,48.7,9.4c1.8,0.4,2.1,0.7,3.5,2c-0.9,2.8-1.7,5.6-2.7,8.8 c1-0.1,1.7-0.1,2.4-0.1c2.2-0.2,3.2,0.5,3.4,2.8c0.1,0.8-0.1,1.7-0.1,2.8h-6.9c-0.3,0.9-0.6,1.5-0.7,2.2 c-0.8,4.5-1.7,8.9-2.3,13.4c-0.3,1.8-0.1,3.7,0.2,5.5c0.4,2.3,2,3,3.7,1.6c3-2.4,5.6-5.2,5.8-9.5c0.3-5.1,1.9-9.9,4.7-14.2 c0.2-0.4,0.5-0.7,0.7-1c2-2.6,4.4-4.2,7.8-3.1c3-2.3,5.6-1.6,7.2,1.8c1.1,2.3,1,4.7,0.6,7.1c-0.4,2.5-1.3,4.9-2.7,7.1 c-2.8,4.4-5.4,5.6-10.5,4.7c-0.3,2.7,0.2,5.1,2.2,7c1.7,1.6,3.8,1.7,6,0.7c3.6-1.7,5.9-4.7,7.6-8.1c0.6-1.2,0.4-2.8,0.7-4.2 c0.6-3.8,1.6-7.5,3.5-10.9c1-1.7,2.2-3.3,3.7-4.7c2-1.9,4.6-2.4,7.1-1.4c2.1,0.8,4.1,1.9,6,3.1c1.9,1.2,3.4,2.9,2.5,5.4 c0.9,0.8,1.7,1.4,2.4,2c0.9,0.8,1.2,1.8,0.7,3.1c-1.2,3.4-2.1,6.8-2.2,10.4c0,0.7,0,1.4,0,2.1c0.2,1.4,1.1,1.9,2.2,0.9 c1.9-1.6,3.3-3.5,3.4-6.1c0.2-4.4,1.1-8.6,3.1-12.5c0.9-1.8,2-3.6,3.3-5.2c2.5-2.8,5.6-3.8,9.2-2.3c1.2,0.5,2.3,1,3.8,1.6 c0.4-1.9,0.7-3.7,1.1-5.4c0.9-3.9,1.7-7.8,2.8-11.6c0.9-3.3,1.5-3.4,4.8-2.5c1.4,0.4,2.8,0.8,3.7,1.7c-1.6,6.6-3.4,12.9-4.7,19.3 c-1.3,6.3-2.1,12.6-3.1,18.9c-0.1,0.9-0.2,1.9,0,2.8c0.3,1.8,1.4,2.3,2.9,1.2c0.4-0.3,0.8-0.6,1.1-1c1.6-2.3,3.2-4.6,3.5-7.6 c0.4-5,1.4-10,2.8-14.8c0.3-1.1,0.8-2.1,1.2-3.2c0.4-0.8,1-1.2,1.9-0.9c2.3,0.7,4.4,1.7,5.7,3.3c-1.3,5.1-2.6,10-3.7,14.9 c-0.4,1.7-0.5,3.5-0.7,5.3c-0.1,0.6-0.1,1.2,0,1.7c0.1,0.6,0.4,1.4,0.8,1.5c0.5,0.1,1.2-0.3,1.6-0.8c0.7-0.9,1.4-2,1.9-3 c1.2-2.8,2.4-5.6,3.5-8.5c1.2-3.2,2.2-6.4,3.3-9.7c2.2-0.4,4.2,0.2,6.1,1.2c0.9,0.5,1.3,1.2,1.2,2.3c-0.5,3.6-0.8,7.2-1.5,10.7 c-0.9,4.4-2.1,8.7-3.2,13c-0.1,0.4-0.2,0.8-0.1,1.3c5.5-5.7,8.9-12.5,11.7-19.7c2,0.3,2.2,0.6,1.8,2.3c-2,7.4-5.5,14-10.6,19.7 c-1.1,1.2-2.5,2.3-4,3.1c-1,0.6-1.7,1.2-2.1,2.2c-1.3,3-2.8,5.8-4.9,8.2c-1.7,2-3.7,3.8-6.4,4.3c-0.8,0.2-1.7,0.3-2.5,0.2 c-4.9-0.9-8.5-3.5-10.7-7.9c-0.7-1.3-0.8-3-0.8-4.5c0.1-2.7,1.5-4.5,4.1-5.4c1.1-0.4,2.2-0.7,3.3-0.7c3.5,0,7,0.1,10.4,0.2 c0.8,0,1.7,0.1,2.8,0.2c0.9-3.9,1.8-7.6,2.6-11.4c-0.1,0-0.2-0.1-0.3-0.1c-0.6,1.1-1.1,2.2-1.7,3.3c-0.5,0.8-1,1.6-1.6,2.3 c-3.1,4-8.4,2.6-10.4-0.3c-0.4-0.6-0.8-1.1-1.3-1.9c-2.2,3.3-4.4,6.5-9.1,5.3c-3.2-0.8-5.1-3-6.3-7.5c-0.4,1-0.6,1.7-1,2.4 c-0.9,1.7-1.7,3.6-2.9,5.1c-1.9,2.4-4.6,2.7-7.3,1.2c-2.1-1.2-3.4-3-4.4-5.4c-0.6,0.6-1,1.1-1.4,1.6c-1.7,2.2-3.9,3.3-6.7,2.6 c-2.8-0.6-4.6-2.5-5.5-5.1c-0.2-0.7-0.4-1.3-0.6-2C95,44.6,94.9,44.5,94.7,44.5'}
                    />
                    <Path
                        fill={constants.colors.text.negative}
                        d={'M27,21.5c3.3-4.9,3.5-10,2.1-15.6c-0.7,0.2-1.4,0.3-1.9,0.5c-6.3,2.6-10.9,7-14.3,12.9 c-0.2,0.4-0.4,0.8-0.5,1.2c-0.9,2.6-0.2,4.4,2.3,5.3c2,0.8,4.2,1.2,6.4,1.8c2.4,0.6,4.7,1.2,6.7,2.6c4.3,3,5.2,7.3,4.6,12.1 c-0.4,3.2-2.1,5.7-4.6,7.7c-5.7,4.3-12.1,6.2-19.2,5.3c-2.1-0.3-3.9-1.1-4.5-3.6c-0.1-0.5-0.7-1-1.1-1.5c-2.3-2.2-2.4-4-0.3-6.2 c1.6-1.8,3.7-2.8,6-3.4c0.6-0.2,1.3,0,2,0c0,0.1,0.1,0.3,0.1,0.4c-0.6,0.4-1.2,0.9-1.8,1.4c-1.1,0.9-2.2,1.8-3.1,2.9 c-1.2,1.5-0.6,2.8,1.3,2.9c2.2,0,4.4-0.1,6.6-0.5c3-0.5,5.8-1.4,8.4-2.9c1.4-0.9,2.8-2,3.8-3.3c1.7-2.2,1.2-4.3-1.1-5.8 c-1.2-0.7-2.6-1.2-3.9-1.7c-2.4-0.8-4.8-1.4-7.1-2.2c-1.5-0.5-3.1-1.1-4.5-1.8c-4.7-2.4-6.3-6.3-4.8-11.4c0.5-1.5,1.1-2.9,1.9-4.3 C9,9.6,12.6,5.9,17.2,3.2c2.4-1.4,5.1-2.7,7.9-1.8c3.3,1.1,6.5,2.5,9.5,4.1c2,1,2.7,3,2.4,5.3c-0.6,4.3-2.3,8-5.4,11.1 C29.7,23.6,28.4,23.5,27,21.5'}
                    />
                </Svg>

                <ModalStateContainer ref={this.refModalSteadyLogin} modal={<ModalSteadyLogin />} key={'modal.steady.login'} />
            </TouchableOpacity>
        );
    }

}


export default SteadyLoggedOutView;