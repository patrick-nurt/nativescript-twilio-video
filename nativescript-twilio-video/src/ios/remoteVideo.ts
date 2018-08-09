import { View } from 'ui/core/view';

declare var TVIVideoView, UIViewContentMode;


export class RemoteVideo extends View {

    remoteVideoView: any;
    _remoteViewDelegate: any;
    nativeView: any;

    constructor() {
        super();
        
        // this._remoteViewDelegate = VideoViewDelegate.initWithOwner(new WeakRef(this));
        this.remoteVideoView = TVIVideoView.alloc().init(); 
        this.remoteVideoView.mirror = true;   
        this.remoteVideoView.contentMode = UIViewContentMode.ScaleAspectFill;
    }

    public createNativeView() {

        return this.remoteVideoView;

    }    

    public disposeNativeView(): void {

        this.nativeView = null;

    }


    get ios(): any {

        return this.nativeView;

    }  

}