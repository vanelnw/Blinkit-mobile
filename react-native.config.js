
module.exports = {
    project: {
        ios:{},
        android:{},
    },
    "react-native-vector-icons":{
        Platform:{
            ios:null,
        },
    },
    assets: ['./src/assets/fonts/'],
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer');
    },
    gteSourceExts(){
        return ['ts', 'tsx'];
    }
};