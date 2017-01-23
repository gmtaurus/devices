/**
 * Created by gaomin on 1611/28.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/create': {
    	component (resolve) {
            require(['./views/create.vue'], resolve);
        }
    },
    'records': {
        component (resolve) {
            require(['./views/borrowrecords.vue'],resolve);
        }
    }
};
export default routers;