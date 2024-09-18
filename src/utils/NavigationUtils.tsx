import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef()

export async function navigate(rootName:string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.navigate(rootName, params))
    }
}

export async function replace(rootName:string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady()){
        navigationRef.dispatch(StackActions.replace(rootName, params))
    }
}

export async function resetAndNavigate(rootName:string){
    navigationRef.isReady()
    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.reset(
            {
                index:0,
                routes:[{name: rootName}]
            }
        ))
    }
}

export async function goback(){
    navigationRef.isReady()
    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.goBack())
    }
}

export async function push(rootName:string, params?:object){
    navigationRef.isReady()
    if(navigationRef.isReady()){
        navigationRef.dispatch(StackActions.push(rootName, params))
    }
}

export async function prepareNavigation(){
    navigationRef.isReady()
}