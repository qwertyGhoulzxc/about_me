const path =require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
    webpack : {
        alias:{
            "@components": resolvePath('./src/components'),
            "@ui": resolvePath('./src/ui'),
            "@pages": resolvePath('./src/pages'),
            "@global": resolvePath('./src/global-styles'),
            "@assets": resolvePath('./src/assets'),
        }
    }
}
