import moduleInfo from "./moduleInfo";

const moduleEffects = () => {
    return moduleInfo
        .map( module => module.name )
        .flatMap( ( moduleName ) => require( `../modules/${ moduleName }/effects` ).default )
};

export default moduleEffects();
