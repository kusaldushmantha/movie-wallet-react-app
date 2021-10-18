export const ActionCreator = ( action, payloadGenerator ) => {
    return ( payloadArgs ) => {
        let actualPayload = undefined
        if ( payloadArgs ) {
            actualPayload = payloadGenerator( payloadArgs )
        }
        return {
            type: action,
            payload: actualPayload
        }
    };
}
