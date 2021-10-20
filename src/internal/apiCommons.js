export const callAsync = async ( promise ) => {
    const result = { data: undefined, err: { status: false, msg: '' } };
    try {
        const promiseResponse = await promise();
        result.data = promiseResponse.data
    } catch ( e ) {
        console.error( e );
        result.err.status = true;
        result.err.msg = e.toString()
    }
    return result
}
