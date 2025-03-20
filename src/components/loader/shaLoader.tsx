import React, {FC, Fragment} from 'react';
import {Platform, View, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {IShaLoaderProps} from './interface';
import styles from './styles';
import ShaView from '../view/shaView';

const ShaLoader: FC<IShaLoaderProps> = props => {
  const {
    children,
    loading,
    loadingText,
    loaderColor,
    customIndicator,
    type = 'obscure',
    overlayType = 'flat',
    ...properties
  } = props;

  if (type === 'overlay') {
    return (
      <Fragment>
        {loading ? (
          overlayType === 'flat' ? (
            <ShaView style={styles.overlayContainer}>
              <ActivityIndicator
                color={loaderColor ?? 'white'}
                size={Platform.OS === 'android' ? 'large' : 'small'}
                style={styles.overlayIndicator}
              />
              <Text style={styles.loadingText}>
                {loadingText ?? 'Loading...'}
              </Text>
            </ShaView>
          ) : (
            <ShaView style={styles.circularLoaderParentContainer}>
              <ShaView style={styles.circularLoaderContainer}>
                {customIndicator ? (
                  customIndicator
                ) : (
                  <ActivityIndicator
                    color={loaderColor ?? 'grey'}
                    size={Platform.OS === 'android' ? 28 : 'small'}
                  />
                )}
              </ShaView>
              {loadingText ? (
                <Text style={styles.circularLoaderText}>{loadingText}</Text>
              ) : null}
            </ShaView>
          )
        ) : null}
      </Fragment>
    );
  }

  if (!loading) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator {...properties} />
    </View>
  );
};

ShaLoader.defaultProps = {
  size: 'large',
};

export default ShaLoader;
