const React = require("react")

const { StateProvider } = require('./src/components/lib/StateProvider')
const { initialState, reducer } = require('./src/lib/state/state')
const AppWrapper = require('./src/components/AppWrapper').default

exports.wrapRootElement = ({ element }) => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <AppWrapper>
                {element}
            </AppWrapper>
        </StateProvider>
    )
}