import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'memberInfo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const memberInfoView = require('./containers/MemberInfoContainer').default
      const reducer = require('./modules/memberInfo').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'memberInfo', reducer })

      /*  Return getComponent   */
      cb(null, memberInfoView)

    /* Webpack named bundle   */
    }, 'memberInfo')
  }
})
