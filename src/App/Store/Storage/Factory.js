export default function Factory( storageType ){
    let Storage;
    switch(storageType){
        case "RemoteStorage":
            Storage = import(/* webpackChunkName: "RemoteStorage" */ "./RemoteStorage");
        break;
        default:
            Storage = import(/* webpackChunkName: "LocalStorage" */ "./LocalStorage");
        break;
    }
    return Storage;
};